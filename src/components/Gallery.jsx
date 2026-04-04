const freshProduce = [
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.58.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.59 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.59.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.01 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05.jpeg',
];

const kitchensAndPackaging = [
  '/images/salads/WhatsApp Image 2026-01-19 at 16.34.06 (1).jpeg',
  '/images/soup/WhatsApp Image 2026-01-19 at 16.34.06.jpeg',
  '/images/fruit-bowls/WhatsApp Image 2026-01-19 at 16.34.06 (2).jpeg',
  '/images/breads/WhatsApp Image 2026-01-19 at 16.33.59 (2).jpeg',
  '/images/breads/WhatsApp Image 2026-01-19 at 16.34.00 (1).jpeg',
];

export default function Gallery() {
  return (
    <section className="gallery-section-marquee" id="gallery">
      <div className="gallery-header">
        <div className="section-label reveal">Fresh From the Source</div>
        <h2 className="section-heading reveal reveal-delay-1">Real ingredients. Real photography.</h2>
      </div>
      
      {/* Track 1: Fresh Produce */}
      <div className="gallery-marquee-container">
        <div className="gallery-marquee-track">
          {[...freshProduce, ...freshProduce].map((src, i) => (
            <div key={`g1-${i}`} className="gallery-marquee-item">
              <img src={src} alt="Fresh produce" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Kitchen & Packaging (Reverse Direction) */}
      <div className="gallery-marquee-container" style={{ marginTop: '32px' }}>
        <div className="gallery-marquee-track reverse">
          {[...kitchensAndPackaging, ...kitchensAndPackaging].map((src, i) => (
            <div key={`g2-${i}`} className="gallery-marquee-item" style={{ width: '400px', height: '500px' }}>
              <img src={src} alt="Kitchen and Packaging" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
