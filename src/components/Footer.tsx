import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { firm, fullAddress } from '@/data/firm';
import { groupMeta } from '@/data/services';

export const Footer = () => (
  <footer className="bg-ink text-cream/80 mt-0">
    <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo className="h-12" />
        <p className="mt-5 text-sm font-serif italic text-cream/70 leading-relaxed">
          Providing trusted legal counsel from Motihari since 1991. A practice built on diligence, discretion, and care.
        </p>
      </div>

      <div>
        <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-5">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {['About', 'Team', 'Internship', 'Consultation', 'Contact'].map((l) => (
            <li key={l}>
              <Link to={`/${l.toLowerCase()}`} className="link-underline hover:text-gold">{l}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-5">Practice Areas</h4>
        <ul className="space-y-2 text-sm">
          {Object.entries(groupMeta).map(([k, v]) => (
            <li key={k}><Link to="/services" className="link-underline hover:text-gold">{v.title}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-5">Reach Us</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /><span>{fullAddress}</span></li>
          <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5 shrink-0" /><a href={`tel:${firm.phoneRaw}`} className="hover:text-gold">{firm.phone}</a></li>
          <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5 shrink-0" /><a href={`mailto:${firm.email}`} className="hover:text-gold break-all">{firm.email}</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gold/15">
      <div className="container py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} ART Legal & Co. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-gold">Terms & Conditions</Link>
          <Link to="/refund-policy" className="hover:text-gold">Refund Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);
