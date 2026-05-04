export const GoldDivider = ({ className = '' }: { className?: string }) => (
  <div className={`gold-divider ${className}`} aria-hidden="true">
    <span className="gold-divider-mark">✦</span>
  </div>
);
