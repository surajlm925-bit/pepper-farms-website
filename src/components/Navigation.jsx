import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => setMobileOpen(false);

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Pepperfarm</a>
        <div className="nav-links">
          <a href="#philosophy">Philosophy</a>
          <a href="#menu">Menu</a>
          <a href="#subscriptions">Plans</a>
          <a href="#promise">Promise</a>
          <a href="#" className="nav-cta">₹1,250 Trial</a>
        </div>
        <div className="nav-hamburger" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`} id="mobileNav">
        <button className="mobile-nav-close" onClick={closeMobileNav}>&times;</button>
        <a href="#philosophy" onClick={closeMobileNav}>Philosophy</a>
        <a href="#menu" onClick={closeMobileNav}>Menu</a>
        <a href="#subscriptions" onClick={closeMobileNav}>Plans</a>
        <a href="#sourcing" onClick={closeMobileNav}>Sourcing</a>
        <a href="#promise" onClick={closeMobileNav}>Promise</a>
        <a href="#" onClick={closeMobileNav}>Start Trial — ₹1,250</a>
      </div>
    </>
  );
}
