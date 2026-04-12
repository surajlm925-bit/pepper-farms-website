import { useEffect, useRef, useState } from 'react';
import { heroShowcaseImages } from '../data/menuData';

export default function Hero() {
  const headlineRef = useRef(null);
  const heroRef = useRef(null);
  const parallaxLayers = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const openContact = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('open-contact-modal', {
        detail: { item: "Let's Talk Inquiry" },
      })
    );
  };

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ── Mouse-tracking parallax ── */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      parallaxLayers.current.forEach((el) => {
        if (!el) return;
        const depth = parseFloat(el.dataset.depth || 0);
        const moveX = x * depth * 40;
        const moveY = y * depth * 25;
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });

      /* Rotate the 3D carousel ring slightly */
      const ring = hero.querySelector('.carousel-3d-ring');
      if (ring) {
        ring.style.setProperty('--mouse-x', `${x * 8}deg`);
        ring.style.setProperty('--mouse-y', `${y * -4}deg`);
      }
    };

    hero.addEventListener('mousemove', handleMove);
    return () => hero.removeEventListener('mousemove', handleMove);
  }, []);

  const addParallaxRef = (el) => {
    if (el && !parallaxLayers.current.includes(el)) {
      parallaxLayers.current.push(el);
    }
  };

  const totalImages = heroShowcaseImages.length;
  const angleStep = 360 / totalImages;

  return (
    <section className="hero hero-banner hero-3d" ref={heroRef}>
      {/* ── Gradient background (no image) ── */}
      <div className="hero-gradient-bg" />

      {/* ── Grain overlay ── */}
      <div className="hero-grain" />

      {/* ── Floating organic elements ── */}
      <div className="hero-floating-elements" aria-hidden="true">
        <div className="float-orb float-orb-1" ref={addParallaxRef} data-depth="1.2" />
        <div className="float-orb float-orb-2" ref={addParallaxRef} data-depth="0.8" />
        <div className="float-orb float-orb-3" ref={addParallaxRef} data-depth="1.5" />
      </div>

      {/* ── Pollen particles ── */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            opacity: 0.15 + Math.random() * 0.35,
          }} />
        ))}
      </div>

      {/* ── Fullscreen 3D Carousel Background ── */}
      <div className="hero-carousel-fullscreen" ref={addParallaxRef} data-depth="0.2">
        <div className="carousel-3d-viewport">
          <div
            className="carousel-3d-ring"
            style={{ '--active': activeSlide, '--total': totalImages, '--angle-step': `${angleStep}deg` }}
          >
            {heroShowcaseImages.map((img, i) => (
              <div
                key={i}
                className={`carousel-3d-card ${i === activeSlide ? 'active' : ''}`}
                style={{ '--i': i, '--angle': `${i * angleStep}deg` }}
              >
                <img src={img.src} alt={img.label} />
                <span className="carousel-3d-label">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── Content overlaid center ── */}
      <div className="hero-content-overlay">
        <div className="hero-text-top reveal">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Farm to Table · Bangalore
            <span className="hero-eyebrow-line" />
          </div>
        </div>

        <div className="hero-text-bottom">
          <h1 className="hero-headline-small reveal">
            Fresh. Honest. Everyday food that actually feels <em>good.</em>
          </h1>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
