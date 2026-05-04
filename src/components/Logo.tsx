interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo = ({ className = 'h-10', showText = true, variant = 'light' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-cream' : 'text-ink';
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#E5C97A" />
            <stop offset="0.5" stopColor="#C9A24A" />
            <stop offset="1" stopColor="#A6822E" />
          </linearGradient>
        </defs>
        {/* hexagon black left half */}
        <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="#0A0A0A" />
        {/* gold right accent */}
        <polygon points="50,4 92,27 92,73 50,96 50,50" fill="url(#goldGrad)" opacity="0.95" />
        {/* hex outline */}
        <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill="none" stroke="#C9A24A" strokeWidth="1.5" />
        {/* scales of justice */}
        <g stroke="#F5F1E8" strokeWidth="2" fill="none" strokeLinecap="round">
          <line x1="50" y1="28" x2="50" y2="68" />
          <line x1="50" y1="68" x2="42" y2="74" />
          <line x1="50" y1="68" x2="58" y2="74" />
          <line x1="30" y1="36" x2="70" y2="36" />
          <line x1="30" y1="36" x2="22" y2="50" />
          <line x1="30" y1="36" x2="38" y2="50" />
          <line x1="70" y1="36" x2="62" y2="50" />
          <line x1="70" y1="36" x2="78" y2="50" />
          <path d="M 22 50 Q 30 56 38 50" />
          <path d="M 62 50 Q 70 56 78 50" />
          <circle cx="50" cy="28" r="2" fill="#F5F1E8" />
        </g>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-serif text-xl font-bold tracking-wide ${textColor}`}>
            ART Legal <span className="text-gold">&</span> Co.
          </span>
          <span className={`font-display text-[9px] uppercase tracking-[0.2em] mt-1 ${variant === 'light' ? 'text-gold-light' : 'text-gold-deep'}`}>
            Advocates · Legal Consultants
          </span>
        </div>
      )}
    </div>
  );
};
