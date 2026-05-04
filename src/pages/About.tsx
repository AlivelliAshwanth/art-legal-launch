import { Layout } from '@/components/Layout';
import { GoldDivider } from '@/components/GoldDivider';
import { Reveal } from '@/components/Reveal';
import { firm } from '@/data/firm';
import { Scale } from 'lucide-react';

const timeline = [
  { year: '1991', title: 'Firm Founded', text: 'ART Legal & Co. is established in Motihari with a focus on civil and family law.' },
  { year: '2005', title: 'Bar Council Enrolment', text: 'Advocate Alok Ranjan is enrolled with the Bar Council of Bihar.' },
  { year: '2010s', title: 'Practice Expands', text: 'The firm broadens into property, consumer and corporate documentation work.' },
  { year: 'Today', title: 'Trusted Across East Champaran', text: 'A practice serving individuals, families and businesses across Bihar.' },
];

export const PageHeader = ({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) => (
  <section className="bg-ink text-cream py-20 lg:py-28 border-b border-gold/30 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #C9A24A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    <div className="container relative text-center max-w-3xl">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>
      <h1 className="font-serif text-5xl lg:text-6xl text-cream">{title}</h1>
      <GoldDivider />
      {lead && <p className="font-serif italic text-cream/75 text-lg">{lead}</p>}
    </div>
  </section>
);

const About = () => (
  <Layout>
    <PageHeader eyebrow="About" title="A Chamber Built on Trust" lead="Three and a half decades of practice, in service of the people of Bihar." />

    <section className="paper-section py-20">
      <div className="container max-w-3xl">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl">Our Story</h2>
          <div className="w-16 h-[2px] bg-gold mt-3 mb-6" />
          <div className="space-y-4 text-foreground/80 font-serif text-lg leading-relaxed">
            <p>
              ART Legal & Co. was founded in 1991 in Motihari, East Champaran. From the outset, the practice was built around a single idea: that every client — whether contesting a partition, registering a marriage or defending a criminal charge — deserves the same diligent, personal attention.
            </p>
            <p>
              Today the firm is led by Advocate Alok Ranjan and Advocate Priya Ranjan Tiwari, with a combined experience of more than 35 years across the courts of Bihar. The firm has steadily added capability — property documentation, consumer law, cyber matters, corporate drafting — while keeping its trial-court roots intact.
            </p>
            <p>
              We work on the principle that good lawyering is mostly listening, then speaking precisely.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-paper py-20">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Philosophy</p>
          <h2 className="text-4xl">How We Practise</h2>
          <GoldDivider />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: 'Discretion', d: 'Every engagement is handled in strict confidence. Your matter, your story, stays within the chamber.' },
            { t: 'Diligence', d: 'Cases are prepared thoroughly — pleadings, evidence and law — well before the hearing.' },
            { t: 'Directness', d: 'We tell clients what their case is worth, and what it is not. No false promises.' },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1} className="text-center bg-card border border-border p-8">
              <Scale className="text-gold mx-auto mb-4" size={28} />
              <h3 className="font-serif text-2xl mb-2">{v.t}</h3>
              <p className="font-serif text-foreground/70 leading-relaxed">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-ink text-cream py-20">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-3">Milestones</p>
          <h2 className="text-4xl text-cream">Our Journey</h2>
          <GoldDivider />
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/40" />
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className={`relative flex md:items-center mb-12 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rotate-45" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="font-serif italic text-3xl gold-foil mb-1">{t.year}</div>
                  <h3 className="font-serif text-xl text-cream mb-2">{t.title}</h3>
                  <p className="font-serif text-cream/70">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="paper-section py-20">
      <div className="container max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Where We Sit</p>
          <h2 className="text-3xl mb-4">Our Chambers</h2>
          <GoldDivider />
          <p className="font-serif text-lg text-foreground/75">
            {firm.address.line1}, {firm.address.line2},<br />
            {firm.address.city}, {firm.address.state} — {firm.address.pin}
          </p>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default About;
