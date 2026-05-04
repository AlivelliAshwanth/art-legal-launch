import { Link, useParams, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Reveal } from '@/components/Reveal';
import { GoldDivider } from '@/components/GoldDivider';
import { getService, groupMeta } from '@/data/services';
import { ChevronRight, Clock, IndianRupee, FileCheck2, ListOrdered } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;
  if (!service) return <Navigate to="/services" replace />;
  const meta = groupMeta[service.group];

  return (
    <Layout>
      <section className="bg-ink text-cream py-16 border-b border-gold/30">
        <div className="container">
          <nav className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.18em] text-cream/60 mb-6">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-gold">Services</Link>
            <ChevronRight size={12} />
            <span className="text-gold">{meta.title}</span>
          </nav>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-3">{meta.title}</p>
          <h1 className="font-serif text-4xl lg:text-6xl text-cream max-w-3xl">{service.name}</h1>
          <p className="font-serif italic text-cream/75 text-lg mt-4 max-w-2xl">{service.short}</p>
        </div>
      </section>

      <section className="paper-section py-16">
        <div className="container grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-3xl mb-2">Overview</h2>
              <div className="w-12 h-[2px] bg-gold mb-5" />
              <p className="font-serif text-lg text-foreground/80 leading-relaxed">{service.full}</p>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <FileCheck2 className="text-gold" size={22} />
                <h2 className="text-2xl">Documents Required</h2>
              </div>
              <div className="w-12 h-[2px] bg-gold mb-5" />
              <ul className="space-y-2">
                {service.documents.map((d) => (
                  <li key={d} className="flex gap-3 font-serif text-foreground/80">
                    <span className="text-gold mt-1">✦</span>{d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <ListOrdered className="text-gold" size={22} />
                <h2 className="text-2xl">Typical Process</h2>
              </div>
              <div className="w-12 h-[2px] bg-gold mb-5" />
              <ol className="space-y-4">
                {service.process.map((p, i) => (
                  <li key={p} className="flex gap-4 font-serif text-foreground/80">
                    <span className="font-serif italic text-2xl gold-foil shrink-0 leading-none w-8">{i + 1}.</span>
                    <span className="pt-1">{p}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="bg-ink text-cream p-8 border border-gold/40">
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Engage Counsel</p>
              <h3 className="font-serif text-2xl text-cream mb-4">Book a Consultation</h3>
              <GoldDivider />
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <IndianRupee className="text-gold mt-1 shrink-0" size={16} />
                  <div>
                    <div className="font-display text-[10px] uppercase tracking-widest text-cream/60">Indicative Fee</div>
                    <div className="font-serif text-lg text-cream">{service.fee}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-gold mt-1 shrink-0" size={16} />
                  <div>
                    <div className="font-display text-[10px] uppercase tracking-widest text-cream/60">Initial Slot</div>
                    <div className="font-serif text-lg text-cream">30 – 60 minutes</div>
                  </div>
                </div>
              </div>
              <Link to={`/consultation?service=${service.slug}`} className="btn-gold w-full">
                Book Consultation
              </Link>
              <p className="text-[11px] text-cream/55 mt-4 text-center font-serif italic">
                All consultations are confidential and without obligation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
