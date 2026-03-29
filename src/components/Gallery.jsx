const images = [
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.58.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.59 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.01 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.02 (2).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.03.jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04 (1).jpeg',
  '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.04.jpeg',
];

export default function Gallery() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'var(--parchment)',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center', padding: '0 48px', marginBottom: '48px' }}>
        <div className="section-label reveal">Fresh From the Source</div>
        <h2 className="section-heading reveal reveal-delay-1">Real ingredients.<br/>Real photography.</h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        padding: '0 48px',
      }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: i % 5 === 0 ? '4/3' : '1/1',
              gridRow: i % 7 === 0 ? 'span 2' : 'auto',
            }}
          >
            <img
              src={src}
              alt={`Fresh ingredient ${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
