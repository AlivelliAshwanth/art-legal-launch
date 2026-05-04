import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageHeader } from './About';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { groupMeta, services } from '@/data/services';
import type { ServiceGroup } from '@/data/services';
import { Users, Building2, Gavel, FileText, ArrowRight, type LucideIcon } from 'lucide-react';

const icons: Record<string, LucideIcon> = { Users, Building2, Gavel, FileText };
const groups: ServiceGroup[] = ['family', 'property', 'litigation', 'corporate'];

const Services = () => (
  <Layout>
    <PageHeader eyebrow="Practice Areas" title="Comprehensive Legal Services" lead="Under one roof in Motihari — from family matters to corporate documentation." />

    {groups.map((g) => {
      const meta = groupMeta[g];
      const Icon = icons[meta.icon];
      const items = services.filter((s) => s.group === g);
      return (
        <section key={g} className={g === 'property' || g === 'corporate' ? 'paper-section py-20' : 'bg-paper py-20'}>
          <div className="container">
            <Reveal>
              <div className="flex flex-col items-center text-center mb-10">
                <div className="relative w-16 h-16 mb-5">
                  <div className="absolute inset-0 hex-frame bg-ink" />
                  <Icon className="absolute inset-0 m-auto text-gold" size={26} />
                </div>
                <h2 className="text-3xl lg:text-4xl">{meta.title}</h2>
                <p className="font-serif italic text-foreground/60 mt-2">{meta.subtitle}</p>
                <GoldDivider />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group block bg-card border border-border p-6 h-full hover:border-gold hover:shadow-elegant transition-all"
                  >
                    <h3 className="font-serif text-xl mb-2 group-hover:text-gold-deep transition-colors">{s.name}</h3>
                    <p className="text-sm text-foreground/65 font-serif leading-relaxed mb-4">{s.short}</p>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-gold-deep inline-flex items-center gap-1">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );
    })}
  </Layout>
);

export default Services;
