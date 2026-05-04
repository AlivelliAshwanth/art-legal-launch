import { Phone, MessageCircle } from 'lucide-react';
import { firm } from '@/data/firm';

export const MobileCallBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-ink border-t border-gold/30 grid grid-cols-2">
    <a href={`tel:${firm.phoneRaw}`} className="flex items-center justify-center gap-2 py-3 text-cream font-display text-[11px] uppercase tracking-[0.15em] border-r border-gold/30">
      <Phone size={16} className="text-gold" /> Call
    </a>
    <a href={firm.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 text-cream font-display text-[11px] uppercase tracking-[0.15em]">
      <MessageCircle size={16} className="text-gold" /> WhatsApp
    </a>
  </div>
);
