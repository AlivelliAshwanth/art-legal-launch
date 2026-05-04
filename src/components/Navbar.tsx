import { useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/internship', label: 'Internship' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === '/';

  return (
    <header className={`sticky top-0 z-40 ${isHome ? 'bg-ink/95' : 'bg-ink'} backdrop-blur border-b border-gold/20`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" aria-label="ART Legal & Co. home">
          <Logo className="h-11" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((n) => (
            <RouterNavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `font-display text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`
              }
            >
              {n.label}
            </RouterNavLink>
          ))}
          <Link to="/consultation" className="btn-gold !py-2 !px-5 text-[10px]">
            Book Consultation
          </Link>
        </nav>

        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-ink animate-fade-up">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((n) => (
              <RouterNavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-xs uppercase tracking-[0.18em] py-3 px-2 border-l-2 transition-colors ${
                    isActive ? 'text-gold border-gold' : 'text-cream/80 border-transparent hover:text-gold hover:border-gold/40'
                  }`
                }
              >
                {n.label}
              </RouterNavLink>
            ))}
            <Link to="/consultation" onClick={() => setOpen(false)} className="btn-gold mt-3 w-full">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
