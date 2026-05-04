import { Link } from 'react-router-dom';
import { Users, Building2, Gavel, FileText, type LucideIcon } from 'lucide-react';
import type { ServiceGroup } from '@/data/services';
import { groupMeta, services } from '@/data/services';

const icons: Record<string, LucideIcon> = { Users, Building2, Gavel, FileText };

export const ServiceGroupCard = ({ group }: { group: ServiceGroup }) => {
  const meta = groupMeta[group];
  const Icon = icons[meta.icon];
  const items = services.filter((s) => s.group === group).slice(0, 4);

  return (
    <Link
      to="/services"
      className="group bg-card p-8 border border-border hover:border-gold transition-all duration-500 hover:shadow-elegant flex flex-col"
    >
      <div className="relative w-16 h-16 mb-5">
        <div className="absolute inset-0 hex-frame bg-ink group-hover:bg-gold transition-colors duration-500" />
        <Icon className="absolute inset-0 m-auto text-gold group-hover:text-ink transition-colors duration-500" size={26} />
      </div>
      <h3 className="font-serif text-2xl mb-1">{meta.title}</h3>
      <p className="text-sm text-muted-foreground italic mb-5 font-serif">{meta.subtitle}</p>
      <ul className="space-y-1.5 text-sm text-foreground/70 flex-1">
        {items.map((s) => (
          <li key={s.slug} className="flex gap-2"><span className="text-gold">✦</span>{s.name}</li>
        ))}
      </ul>
      <span className="mt-6 font-display text-[11px] uppercase tracking-[0.2em] text-gold-deep group-hover:text-gold">View all →</span>
    </Link>
  );
};
