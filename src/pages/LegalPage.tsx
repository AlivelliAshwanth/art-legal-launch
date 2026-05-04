import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { firm } from '@/data/firm';

interface Props {
  title: string;
  eyebrow: string;
  lead?: string;
  sections: { heading: string; body: React.ReactNode }[];
}

export const LegalPage = ({ title, eyebrow, lead, sections }: Props) => (
  <Layout>
    <PageHeader eyebrow={eyebrow} title={title} lead={lead} />
    <section className="paper-section py-16">
      <div className="container max-w-3xl">
        <Reveal>
          <p className="font-serif italic text-foreground/60 mb-8 text-sm">
            Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl mb-2">{s.heading}</h2>
                <div className="w-12 h-[2px] bg-gold mb-4" />
                <div className="font-serif text-foreground/80 leading-relaxed space-y-3">{s.body}</div>
              </div>
            ))}
            <div className="bg-card border border-border p-6 mt-10">
              <p className="font-serif italic text-sm text-foreground/70">
                For any queries regarding this policy, please contact us at <a href={`mailto:${firm.email}`} className="text-gold-deep hover:text-gold">{firm.email}</a> or {firm.phone}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
