import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { services } from '@/data/services';
import { CalendarClock, IndianRupee, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const tiers = [
  { id: 'consult-30', label: '30-Minute Consultation', amount: 500 },
  { id: 'consult-60', label: '60-Minute Consultation', amount: 1000 },
  { id: 'retainer', label: 'Booking Retainer (in-person appointment)', amount: 1000 },
];

const schema = z.object({
  service: z.string().min(1),
  tier: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(10).max(15),
  matter: z.string().trim().min(20).max(1000),
});

type FormData = z.infer<typeof schema>;

const Consultation = () => {
  const [params] = useSearchParams();
  const presetService = params.get('service') ?? '';
  const [bookingId, setBookingId] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: presetService, tier: tiers[0].id },
  });

  const selectedTier = tiers.find((t) => t.id === watch('tier')) ?? tiers[0];
  const gst = Math.round(selectedTier.amount * 0.18);
  const total = selectedTier.amount + gst;

  const onSubmit = async (_data: FormData) => {
    // Razorpay flow added in Phase 3 (requires Lovable Cloud + RAZORPAY keys)
    await new Promise((r) => setTimeout(r, 700));
    const id = `BKG-${Date.now().toString(36).toUpperCase()}`;
    setBookingId(id);
    toast.success('Booking recorded. Payment will be wired up in the next phase.');
  };

  if (bookingId) {
    return (
      <Layout>
        <PageHeader eyebrow="Confirmed" title="Consultation Booked" />
        <section className="paper-section py-20">
          <div className="container max-w-xl text-center">
            <Reveal>
              <div className="bg-card border-2 border-gold p-10">
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold-deep mb-2">Booking Reference</p>
                <p className="font-serif text-3xl gold-foil mb-6">{bookingId}</p>
                <GoldDivider />
                <p className="font-serif text-foreground/75 leading-relaxed">
                  Thank you. Our chambers will reach out within one working day on the contact details provided to confirm your slot. For urgent matters, please call directly.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader eyebrow="Engage" title="Book a Consultation" lead="Confidential, without obligation. Fees are indicative and may be adjusted at the consultation." />

      <section className="paper-section py-20">
        <div className="container grid lg:grid-cols-[1fr_360px] gap-10 max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-8 space-y-5">
            <Field label="Matter / Service" error={errors.service?.message}>
              <select {...register('service')} className="form-input">
                <option value="">Select a matter</option>
                {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
              </select>
            </Field>

            <Field label="Consultation Type" error={errors.tier?.message}>
              <div className="grid gap-2">
                {tiers.map((t) => (
                  <label key={t.id} className="flex items-center gap-3 border border-border p-3 cursor-pointer hover:border-gold transition-colors">
                    <input type="radio" value={t.id} {...register('tier')} className="accent-[hsl(var(--gold-primary))]" />
                    <span className="font-serif flex-1">{t.label}</span>
                    <span className="font-serif font-semibold text-gold-deep">₹{t.amount}</span>
                  </label>
                ))}
              </div>
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Preferred Date" error={errors.date?.message}>
                <input type="date" {...register('date')} className="form-input" />
              </Field>
              <Field label="Preferred Time" error={errors.time?.message}>
                <input type="time" {...register('time')} className="form-input" />
              </Field>
            </div>

            <Field label="Your Name" error={errors.name?.message}>
              <input {...register('name')} className="form-input" />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register('email')} className="form-input" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input type="tel" {...register('phone')} className="form-input" />
              </Field>
            </div>
            <Field label="Brief Description of Matter" error={errors.matter?.message}>
              <textarea rows={5} {...register('matter')} className="form-input resize-none" />
            </Field>

            <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
              {isSubmitting ? 'Processing…' : `Pay ₹${total} & Book`}
            </button>
            <p className="text-[11px] text-muted-foreground text-center font-serif italic">
              Secure payment will be processed via Razorpay. By booking, you agree to our Terms and Refund Policy.
            </p>
          </form>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-ink text-cream p-7 border border-gold/40">
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Order Summary</p>
              <h3 className="font-serif text-2xl text-cream mb-4">{selectedTier.label}</h3>
              <GoldDivider />
              <div className="space-y-3 text-sm font-serif">
                <Row icon={CalendarClock} label="Slot" value={`${watch('date') || '—'} ${watch('time') || ''}`} />
                <Row icon={IndianRupee} label="Fee" value={`₹${selectedTier.amount}`} />
                <Row icon={IndianRupee} label="GST (18%)" value={`₹${gst}`} />
                <div className="border-t border-gold/30 pt-3 flex justify-between font-serif text-lg">
                  <span>Total</span><span className="gold-foil font-semibold">₹{total}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-cream/60 text-xs mt-5 font-serif italic">
                <ShieldCheck size={14} className="text-gold mt-0.5 shrink-0" />
                <span>All payments secured. Slots confirmed only after payment.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

const Row = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start justify-between text-cream/80 gap-4">
    <span className="flex gap-2 items-center"><Icon size={14} className="text-gold" />{label}</span>
    <span className="text-cream text-right">{value}</span>
  </div>
);

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-foreground/70 block mb-2">{label}</span>
    {children}
    {error && <span className="text-xs text-destructive mt-1 block font-serif italic">{error}</span>}
  </label>
);

export default Consultation;
