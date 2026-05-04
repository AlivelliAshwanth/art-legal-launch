import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { GraduationCap, BookOpen, Scale, FileText } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  full_name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(10).max(15),
  college: z.string().trim().min(2).max(150),
  year: z.string().min(1),
  cover: z.string().trim().min(20).max(1000),
});

type FormData = z.infer<typeof schema>;

const benefits = [
  { icon: Scale, t: 'Court Visits', d: 'Observe live proceedings at the Motihari Court and accompany advocates on filings.' },
  { icon: FileText, t: 'Drafting & Research', d: 'Hands-on work on petitions, replies, contracts and case law research.' },
  { icon: BookOpen, t: 'Direct Mentorship', d: 'Work alongside practising advocates with regular feedback and guidance.' },
];

const Internship = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    // Backend wiring (Supabase + email) added in Phase 2
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
    toast.success('Application received. We will be in touch.');
  };

  return (
    <Layout>
      <PageHeader eyebrow="Programme" title="Law Internship Programme" lead="Limited seats. Real practice. Considered mentorship." />

      <section className="paper-section py-20">
        <div className="container max-w-5xl">
          <Reveal className="text-center mb-12">
            <div className="relative w-16 h-16 mx-auto mb-5">
              <div className="absolute inset-0 hex-frame bg-ink" />
              <GraduationCap className="absolute inset-0 m-auto text-gold" size={28} />
            </div>
            <h2 className="text-3xl lg:text-4xl">What You'll Gain</h2>
            <GoldDivider />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="bg-card border border-border p-7 text-center">
                <b.icon className="text-gold mx-auto mb-4" size={26} />
                <h3 className="font-serif text-2xl mb-2">{b.t}</h3>
                <p className="font-serif text-foreground/70 leading-relaxed">{b.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="bg-ink text-cream p-7 border border-gold/30">
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Eligibility</p>
              <ul className="space-y-2 font-serif text-cream/80">
                <li className="flex gap-2"><span className="text-gold">✦</span>3-year or 5-year LL.B. students</li>
                <li className="flex gap-2"><span className="text-gold">✦</span>Sincere interest in litigation or documentation</li>
                <li className="flex gap-2"><span className="text-gold">✦</span>Available to attend in person at Motihari</li>
              </ul>
            </div>
            <div className="bg-ink text-cream p-7 border border-gold/30">
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Duration</p>
              <p className="font-serif text-cream/80 mb-3">Minimum 4 weeks. Longer engagements considered for candidates demonstrating commitment.</p>
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold mt-4 mb-2">Stipend</p>
              <p className="font-serif text-cream/80">Modest stipend on completion, based on attendance and performance.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Apply</p>
              <h2 className="text-3xl lg:text-4xl">Application Form</h2>
              <GoldDivider />
            </div>

            {submitted ? (
              <div className="bg-card border-2 border-gold p-10 text-center">
                <h3 className="font-serif text-2xl mb-3">Application Received</h3>
                <p className="font-serif text-foreground/70">Thank you. Our team will review your application and respond within 7 working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-8 space-y-5">
                <Field label="Full Name" error={errors.full_name?.message}>
                  <input {...register('full_name')} className="form-input" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" error={errors.email?.message}>
                    <input type="email" {...register('email')} className="form-input" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input type="tel" {...register('phone')} className="form-input" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-[1fr_140px] gap-5">
                  <Field label="College / University" error={errors.college?.message}>
                    <input {...register('college')} className="form-input" />
                  </Field>
                  <Field label="Year" error={errors.year?.message}>
                    <select {...register('year')} className="form-input">
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5].map((y) => <option key={y} value={String(y)}>Year {y}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Cover Note" error={errors.cover?.message}>
                  <textarea rows={5} {...register('cover')} className="form-input resize-none" placeholder="Tell us briefly about your interest in legal practice." />
                </Field>
                <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
                  {isSubmitting ? 'Submitting…' : 'Submit Application'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-foreground/70 block mb-2">{label}</span>
    {children}
    {error && <span className="text-xs text-destructive mt-1 block font-serif italic">{error}</span>}
  </label>
);

export default Internship;
