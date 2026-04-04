import { useEffect, useRef } from 'react';

export default function Hero() {
  const headlineRef = useRef(null);

  const openContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: "Let's Talk Inquiry" } 
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      headlineRef.current?.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-top">
        <h1 className="hero-headline" ref={headlineRef}>
          <span className="line"><span className="line-inner">The daily nutrition</span></span>
          <span className="line"><span className="line-inner"><em>system</em> designed for </span></span>
          <span className="line"><span className="line-inner">modern urban lives.</span></span>
        </h1>
        <div className="hero-aside reveal reveal-delay-2">
          <button onClick={openContact} className="pill-btn">
            Let's Talk
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <div className="hero-image-section reveal reveal-delay-1">
        <img
          className="hero-visual"
          src="/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (2).jpeg"
          alt="Pepperfarm fresh produce and ingredients"
        />
        <div className="hero-image-overlay">
          <p>Farm to fork, without compromise. Fresh, nutrient-dense meals — no preservatives, no additives, no premixes. A subscription-first clean-label food system.</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">24+</div>
              <div className="label">Rotating Recipes</div>
            </div>
            <div className="hero-stat">
              <div className="num">3x</div>
              <div className="label">Weekly Delivery</div>
            </div>
            <div className="hero-stat">
              <div className="num">₹250</div>
              <div className="label">Per Bowl / Sub</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  );
}
