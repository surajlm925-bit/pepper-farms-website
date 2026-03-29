const cards = [
  {
    icon: '🌾',
    bg: 'rgba(163,177,138,0.12)',
    title: 'Local Vendors & Small Farms',
    desc: 'We partner with local agricultural vendors and small-scale farms around Bangalore. Seasonal sourcing ensures peak freshness and supports the local food ecosystem.',
    image: '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.33.59.jpeg',
  },
  {
    icon: '🔥',
    bg: 'rgba(195,107,77,0.1)',
    title: 'Small Batch Cooking',
    desc: 'No central industrial kitchen. Every meal is prepared in small batches the morning of delivery — dressings, sauces, bases, all made in-house from scratch.',
    image: '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05.jpeg',
  },
  {
    icon: '🚛',
    bg: 'rgba(232,197,71,0.12)',
    title: 'Route-Based Delivery',
    desc: 'Delivery on Monday, Wednesday, and Friday only — route-optimized for freshness. Limited delivery days let us focus on quality over logistics sprawl.',
    image: '/images/fresh-produce/WhatsApp Image 2026-01-19 at 16.34.05 (1).jpeg',
  },
];

export default function Sourcing() {
  return (
    <section className="sourcing" id="sourcing">
      <div style={{ textAlign: 'center' }}>
        <div className="section-label reveal">How We Source</div>
        <h2 className="section-heading reveal reveal-delay-1">From local farms<br/>to your fork.</h2>
      </div>
      <div className="sourcing-grid">
        {cards.map((c, i) => (
          <div key={i} className={`sourcing-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            {c.image && (
              <div style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '20px',
              }}>
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            )}
            <div className="sourcing-icon" style={{ background: c.bg }}>{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
