import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { portals } from '../config/business';

const LINKS = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/for-canteens', label: 'For canteens' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet on navigation, otherwise it covers the new page.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}`}>
      <div className="shell nav__inner">
        <Link to="/" className="nav__mark">
          <span className="nav__markDot" aria-hidden="true">
            B
          </span>
          BiteSite
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggleBar" />
          <span className="nav__toggleBar" />
          <span className="nav__toggleBar" />
        </button>

        <nav id="nav-links" className="nav__links" data-open={open} aria-label="Main">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
          {/* www is the marketing site only — the product itself lives on app. */}
          <a className="btn btn--primary nav__cta" href={portals.app}>
            Open BiteSite
          </a>
        </nav>
      </div>
    </header>
  );
}
