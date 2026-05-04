import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { firm, fullAddress } from '@/data/firm';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(10).max(15),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(20).max(1500),
});
type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (_d: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    reset();
    toast.success('Message received. We will respond shortly.');
  };

  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Reach the Chambers" lead="By appointment, in writing or in person." />

      <section className="paper-section py-20">
        <div className="container grid lg:grid-cols-2 gap-10 max-w-6xl">
          <Reveal>
            <h2 className="text-3xl mb-2">Get in Touch</h2>
            <div className="w-12 h-[2px] bg-gold mb-8" />
            <div className="space-y-6">
              <ContactRow icon={MapPin} label="Office">
                <p className="font-serif text-foreground/80 leading-relaxed">{fullAddress}</p>
              </ContactRow>
              <ContactRow icon={Phone} label="Telephone">
                <a href={`tel:${firm.phoneRaw}`} className="font-serif text-lg hover:text-gold-deep">{firm.phone}</a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a href={firm.whatsapp} target="_blank" rel="noopener noreferrer" className="font-serif text-lg hover:text-gold-deep">Message on WhatsApp →</a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${firm.email}`} className="font-serif text-lg hover:text-gold-deep break-all">{firm.email}</a>
              </ContactRow>
              <ContactRow icon={Clock} label="Office Hours">
                <ul className="font-serif text-foreground/80 space-y-1">
                  {firm.hours.map((h) => (
                    <li key={h.day}><span className="font-semibold">{h.day}:</span> {h.time}</li>
                  ))}
                </ul>
              </ContactRow>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-8 space-y-5">
              <h3 className="font-serif text-2xl mb-1">Send a Message</h3>
              <div className="w-12 h-[2px] bg-gold mb-4" />
              <Field label="Name" error={errors.name?.message}><input {...register('name')} className="form-input" /></Field>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" error={errors.email?.message}><input type="email" {...register('email')} className="form-input" /></Field>
                <Field label="Phone" error={errors.phone?.message}><input type="tel" {...register('phone')} className="form-input" /></Field>
              </div>
              <Field label="Subject" error={errors.subject?.message}><input {...register('subject')} className="form-input" /></Field>
              <Field label="Message" error={errors.message?.message}><textarea rows={6} {...register('message')} className="form-input resize-none" /></Field>
              <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pb-20">
        <div className="container max-w-6xl">
          <Reveal>
            <div className="border border-gold/40 overflow-hidden h-80 lg:h-96">
              <iframe
                title="ART Legal & Co. office location"
                src="https://www.google.com/maps?q=Motihari+Court,+East+Champaran,+Bihar&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const ContactRow = ({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="relative w-12 h-12 shrink-0">
      <div className="absolute inset-0 hex-frame bg-ink" />
      <Icon className="absolute inset-0 m-auto text-gold" size={18} />
    </div>
    <div>
      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-gold-deep mb-1">{label}</p>
      {children}
    </div>
  </div>
);

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-foreground/70 block mb-2">{label}</span>
    {children}
    {error && <span className="text-xs text-destructive mt-1 block font-serif italic">{error}</span>}
  </label>
);

export default Contact;
