import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => setMobileOpen(false);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: "General Inquiry" } 
    }));
    closeMobileNav();
  };

  const openTrial = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: "Rs. 1,250 Trial" } 
    }));
    closeMobileNav();
  };

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <img
            src="/images/logo/Pepperfarm green logo png.png"
            alt="Pepperfarm — Healthy Meal Delivery Bangalore"
            className="nav-logo-img"
          />
        </a>
        <div className="nav-links">
          <a href="#philosophy">Philosophy</a>
          <a href="#menu">Menu</a>
          <a href="#bakery">Bakery</a>
          <a href="#subscriptions">Plans</a>
          <a href="#promise">Promise</a>
          <button onClick={openContact} className="nav-link-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Contact Us</button>
          {scrolled && <button onClick={openTrial} className="nav-cta">₹1,250 Trial</button>}
        </div>
        <div className="nav-hamburger" id="hamburger" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`} id="mobileNav">
        <button className="mobile-nav-close" onClick={closeMobileNav}>&times;</button>
        <img src="/images/logo/Pepperfarm white logo png.png" alt="Pepperfarm" className="mobile-nav-logo" />
        <a href="#philosophy" onClick={closeMobileNav}>Philosophy</a>
        <a href="#menu" onClick={closeMobileNav}>Menu</a>
        <a href="#bakery" onClick={closeMobileNav}>Bakery</a>
        <a href="#subscriptions" onClick={closeMobileNav}>Plans</a>
        <a href="#sourcing" onClick={closeMobileNav}>Sourcing</a>
        <a href="#promise" onClick={closeMobileNav}>Promise</a>
        <button onClick={openContact} style={{ background: 'none', border: 'none', color: 'var(--parchment)', fontSize: '1.25rem', fontFamily: "'Playfair Display', serif", cursor: 'pointer' }}>Contact Us</button>
        <button onClick={openTrial} className="sub-btn featured-btn" style={{ marginTop: '20px', width: 'auto', padding: '16px 32px' }}>Start Trial — ₹1,250</button>
      </div>
    </>
  );
}
