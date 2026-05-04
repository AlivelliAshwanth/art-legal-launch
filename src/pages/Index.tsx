import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Scale, ShieldCheck, UserCheck, GraduationCap } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Logo } from '@/components/Logo';
import { GoldDivider } from '@/components/GoldDivider';
import { Reveal } from '@/components/Reveal';
import { ServiceGroupCard } from '@/components/ServiceGroupCard';
import { firm, fullAddress } from '@/data/firm';
import type { ServiceGroup } from '@/data/services';

const groups: ServiceGroup[] = ['family', 'property', 'litigation', 'corporate'];

const Index = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A24A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-gold opacity-[0.03]" />
      <div className="container relative py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Logo className="h-32 lg:h-40 mb-8" showText={false} />
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] text-cream">
            ART Legal <span className="text-gold">&</span> Co.
          </h1>
          <div className="mt-3 mb-6">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold-light inline-block border-b border-gold pb-2">
              {firm.tagline}
            </p>
          </div>
          <p className="font-serif text-xl italic text-cream/70">Providing legal services since {firm.founded}.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border-l-2 border-gold/50 pl-8 lg:pl-12">
            <p className="text-cream/85 text-lg leading-relaxed font-serif">
              Trusted legal counsel since 1991. With over 35 years of combined experience, ART Legal & Co. helps individuals, families and businesses across Bihar navigate civil, criminal, family, property and corporate matters with clarity and care.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/consultation" className="btn-gold">Book Consultation <ArrowRight size={14} /></Link>
              <Link to="/services" className="btn-gold-outline">Our Services</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* TRUST STRIP */}
    <section className="bg-cream border-y border-gold/20">
      <div className="container py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-gold/30">
        {[
          { stat: '35+', label: 'Years Combined Experience' },
          { stat: '1991', label: 'Year Established' },
          { stat: '28', label: 'Practice Areas' },
          { stat: 'Bihar', label: 'Bar Council' },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07} className="text-center lg:px-4">
            <div className="font-serif text-5xl lg:text-6xl gold-foil italic">{s.stat}</div>
            <div className="font-display text-[10px] uppercase tracking-[0.2em] text-foreground/70 mt-2">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="paper-section py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/5] relative">
            <div className="absolute inset-4 border border-gold/40" />
            <div className="absolute inset-0 bg-ink flex items-center justify-center">
              <Scale size={120} className="text-gold/40" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-ink p-6 font-serif">
              <div className="text-3xl italic">Est.</div>
              <div className="font-display text-2xl">1991</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">About the Firm</p>
          <h2 className="text-4xl lg:text-5xl mb-2">A Practice Built on Diligence</h2>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="text-foreground/75 leading-relaxed mb-4 text-lg font-serif">
            ART Legal & Co. was established in 1991 in Motihari, East Champaran, with a simple commitment: to give every client honest counsel and considered representation. Over three decades, the firm has grown alongside its clients while keeping that founding ethic intact.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8 font-serif">
            Today, the firm advises individuals, families and businesses across Bihar on a wide range of civil, criminal, family, property and corporate matters — combining traditional courtcraft with practical, modern documentation.
          </p>
          <Link to="/about" className="font-display text-[11px] uppercase tracking-[0.2em] text-gold-deep hover:text-gold link-underline">
            Read more about us →
          </Link>
        </Reveal>
      </div>
    </section>

    {/* SERVICES */}
    <section className="bg-paper py-24">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Our Practice</p>
          <h2 className="text-4xl lg:text-5xl">Areas of Practice</h2>
          <GoldDivider />
          <p className="text-foreground/70 font-serif text-lg">
            Comprehensive legal services across personal, property, litigation and corporate matters — under one roof in Motihari.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {groups.map((g, i) => (
            <Reveal key={g} delay={i * 0.08}><ServiceGroupCard group={g} /></Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FOUNDERS */}
    <section className="bg-ink text-cream py-24">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-3">Counsel</p>
          <h2 className="text-4xl lg:text-5xl text-cream">Meet the Advocates</h2>
          <GoldDivider />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
          {firm.founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="border border-gold/30 p-8 hover:border-gold transition-all bg-charcoal/60">
                <div className="flex items-center gap-5 mb-5">
                  <div className="relative w-20 h-20 shrink-0">
                    <div className="absolute inset-0 hex-frame bg-gold/20" />
                    <UserCheck className="absolute inset-0 m-auto text-gold" size={32} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-cream">{f.name}</h3>
                    <p className="font-display text-[10px] uppercase tracking-[0.2em] text-gold mt-1">{f.role}</p>
                  </div>
                </div>
                <p className="text-cream/75 text-sm font-serif leading-relaxed mb-4">{f.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {f.expertise.map((e) => (
                    <span key={e} className="text-[10px] font-display uppercase tracking-wider px-2 py-1 border border-gold/40 text-gold-light">{e}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/team" className="btn-gold-outline">View Full Profiles</Link>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE */}
    <section className="paper-section py-24">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Why Choose Us</p>
          <h2 className="text-4xl lg:text-5xl">Considered Counsel, Steady Hands</h2>
          <GoldDivider />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Scale, title: 'Experience', text: 'Over three decades of court practice across Bihar — from the trial courts of Motihari to the High Court at Patna.' },
            { icon: UserCheck, title: 'Personalised Attention', text: 'Each client matter is led personally by an advocate. Communication is direct, prompt and clear.' },
            { icon: ShieldCheck, title: 'Confidentiality', text: 'All engagements are bound by strict professional confidentiality. Your matter never leaves the firm.' },
          ].map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 hex-frame bg-ink" />
                <it.icon className="absolute inset-0 m-auto text-gold" size={30} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{it.title}</h3>
              <p className="text-foreground/70 font-serif leading-relaxed">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* INTERNSHIP BANNER */}
    <section className="bg-ink text-cream py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink to-charcoal" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-gold opacity-[0.06]" />
      <div className="container relative grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
        <div className="relative w-20 h-20 shrink-0">
          <div className="absolute inset-0 hex-frame bg-gold/20" />
          <GraduationCap className="absolute inset-0 m-auto text-gold" size={32} />
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-2">Limited Seats Available</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-cream">Law Internship Programme</h2>
          <p className="text-cream/70 mt-2 font-serif">Court visits, drafting, research and direct mentorship from practising advocates.</p>
        </div>
        <Link to="/internship" className="btn-gold whitespace-nowrap">Apply Now</Link>
      </div>
    </section>

    {/* CONTACT CTA */}
    <section className="bg-paper py-24">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="border-2 border-gold p-10 lg:p-14 bg-card text-center">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Get in Touch</p>
            <h2 className="text-4xl lg:text-5xl mb-3">Speak with an Advocate</h2>
            <GoldDivider />
            <p className="text-foreground/70 font-serif text-lg mb-8">Schedule a confidential consultation to discuss your matter.</p>
            <div className="grid sm:grid-cols-3 gap-6 text-left mb-10">
              {[
                { icon: Phone, label: 'Call', val: firm.phone, href: `tel:${firm.phoneRaw}` },
                { icon: Mail, label: 'Email', val: firm.email, href: `mailto:${firm.email}` },
                { icon: MapPin, label: 'Office', val: `${firm.address.city}, ${firm.address.state}` },
              ].map((c) => (
                <div key={c.label} className="flex gap-3">
                  <c.icon className="text-gold mt-1 shrink-0" size={18} />
                  <div className="text-sm">
                    <div className="font-display text-[10px] uppercase tracking-widest text-foreground/50">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-serif text-base hover:text-gold-deep break-all">{c.val}</a>
                    ) : (
                      <span className="font-serif text-base">{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/consultation" className="btn-gold">Book Consultation <ArrowRight size={14} /></Link>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 font-serif italic">{fullAddress}</p>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Index;
