import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { firm } from '@/data/firm';
import { UserCheck, Award } from 'lucide-react';

const Team = () => (
  <Layout>
    <PageHeader eyebrow="The Counsel" title="Meet the Advocates" lead="Two practitioners, one chamber, decades of combined court experience." />

    <section className="paper-section py-20">
      <div className="container max-w-5xl space-y-16">
        {firm.founders.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.1}>
            <div className={`grid md:grid-cols-[280px_1fr] gap-10 items-start ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[4/5] max-w-[280px] mx-auto md:mx-0 w-full">
                <div className="absolute inset-3 border border-gold/40" />
                <div className="absolute inset-0 bg-ink flex items-center justify-center">
                  <UserCheck className="text-gold/40" size={100} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-ink px-4 py-2 font-display text-[10px] uppercase tracking-[0.2em]">
                  {f.role}
                </div>
              </div>

              <div>
                <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-2">Advocate</p>
                <h2 className="font-serif text-4xl lg:text-5xl">{f.name}</h2>
                <GoldDivider className="!justify-start [&::before]:!hidden" />
                <p className="font-serif italic text-foreground/70 mb-4 flex items-center gap-2">
                  <Award size={16} className="text-gold" />
                  {f.qualifications}
                  {f.enrolled && ` · Enrolled ${f.enrolled}`}
                </p>
                <p className="font-serif text-lg text-foreground/80 leading-relaxed mb-6">{f.bio}</p>
                <div>
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-gold-deep mb-3">Areas of Practice</p>
                  <div className="flex flex-wrap gap-2">
                    {f.expertise.map((e) => (
                      <span key={e} className="text-xs font-display uppercase tracking-wider px-3 py-1.5 border border-gold/40 text-foreground/80 bg-card">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default Team;
