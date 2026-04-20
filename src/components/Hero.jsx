import { useEffect, useRef, useState } from 'react';
import { heroShowcaseImages } from '../data/menuData';

export default function Hero() {
  const headlineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  /* ── Headline reveal ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      headlineRef.current?.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  /* ── Auto-advance carousel ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((p) => (p + 1) % heroShowcaseImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const openContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('open-contact-modal', {
        detail: { item: "Let's Talk Inquiry" },
      })
    );
  };

  return (
    <section className="hero" aria-label="Hero">
      {/* ── Carousel background images ── */}
      <div className="hero-carousel-bg" aria-hidden="true">
        {heroShowcaseImages.map((img, i) => (
          <div
            key={i}
            className={`hero-carousel-slide${i === activeSlide ? ' active' : ''}`}
          >
            <img
              src={img.src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="hero-content" ref={headlineRef}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Farm to Table · Bangalore
          <span className="hero-eyebrow-line" />
        </div>

        <h1 className="hero-headline">
          Fresh. Honest.<br />
          Everyday food that<br />
          actually feels <em>good.</em>
        </h1>

        <div className="hero-cta-row">
          <button className="hero-cta-primary" onClick={openContact}>
            Order Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a
            href="https://wa.me/916364469861?text=Hi%20Pepperfarm!%20I%20want%20to%20learn%20more%20about%20your%20meal%20subscription."
            className="hero-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <div className="hero-stats-bar">
          <div className="hero-stat">
            <span className="num">24+</span>
            <span className="label">Rotating Recipes</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="num">3x</span>
            <span className="label">Weekly Delivery</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="num">₹250</span>
            <span className="label">Per Bowl / Sub</span>
          </div>
        </div>
      </div>

      {/* ── Carousel dots ── */}
      <div className="hero-dots" aria-hidden="true">
        {heroShowcaseImages.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === activeSlide ? ' active' : ''}`}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
