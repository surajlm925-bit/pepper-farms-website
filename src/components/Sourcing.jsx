const cards = [
  {
    icon: '🌾',
    bg: 'rgba(163,177,138,0.12)',
    title: 'Local Vendors & Small Farms',
    desc: 'We partner with local agricultural vendors and small-scale farms around Bangalore. Seasonal sourcing ensures peak freshness and supports the local food ecosystem.',
    image: '/images/sourcing/Farmers_selling_vegetables_202604210111.jpeg',
  },
  {
    icon: '🔥',
    bg: 'rgba(195,107,77,0.1)',
    title: 'Community Kitchens',
    desc: 'No central industrial kitchen. Every meal is prepared in small batches the morning of delivery. Dressings, sauces, bases — all made in-house from scratch.',
    image: '/images/sourcing/Chefs_preparing_meals_202604210114.jpeg',
  },
  {
    icon: '🚛',
    bg: 'rgba(232,197,71,0.12)',
    title: 'Route-Based Delivery',
    desc: 'Delivery on Monday, Wednesday, and Friday only. Route-optimised for freshness. Limited delivery days let us focus on quality over logistics sprawl.',
    image: '/images/sourcing/Delivery_operations_scene_202604210115.jpeg',
  },
];

export default function Sourcing() {
  return (
    <section className="sourcing" id="sourcing">
      <div style={{ textAlign: 'center' }}>
        <div className="section-label reveal">How We Work</div>
        <h2 className="section-heading reveal reveal-delay-1">"Healthy and Tasty<br />that's our promise."</h2>
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
                  loading="lazy"
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
      <div style={{ textAlign: 'center', marginTop: '56px' }} className="reveal">
        <p style={{ color: 'rgba(45,45,45,0.55)', marginBottom: '20px', fontSize: '0.95rem' }}>
          From local farms to your fork.
        </p>
        <div className="menu-cta-duo">
          <a
            href="https://wa.me/916364469861?text=Hi%20Pepperfarm!%20I%20want%20to%20order%20my%20first%20meal."
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </a>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { item: 'First Meal Order' } }))} className="form-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
            Leave your details
          </button>
        </div>
      </div>
    </section>

  );
}
