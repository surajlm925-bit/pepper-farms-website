const values = [
  { icon: '🌿', title: 'Cook From Scratch', desc: 'Every dressing, sauce, and base is prepared in-house daily. Zero shortcuts, zero industrial premixes, zero engineered food.' },
  { icon: '⚖️', title: 'Balance Over Extremes', desc: 'No fad diets. No miracle promises. Nutritionally balanced meals designed for sustained energy and long-term health.' },
  { icon: '🍂', title: 'Seasonal Rotation', desc: 'Menus that follow nature\'s calendar. Local vendors, small farms, seasonal ingredients. Different every week, consistent in quality.' },
  { icon: '🔁', title: 'Consistency Over Hype', desc: 'Food as a system, not a product. Subscription-built to create predictability, trust, and a real daily nutrition habit.' },
];

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy-text">
        <div className="section-label reveal">Our Philosophy</div>
        <h2 className="section-heading reveal reveal-delay-1">Food is a system,<br/>not a product.</h2>
        <p className="reveal reveal-delay-2">
          Urban consumers face a daily paradox: the intention to eat healthy, and the reality of overprocessed, inconsistent options. Pepperfarm removes that friction. We cook from scratch — no preservatives, no artificial additives, no premixes. Real ingredients, seasonal sourcing, and a system built for consistency over hype.
        </p>
      </div>
      <div className="philosophy-values">
        {values.map((v, i) => (
          <div key={i} className={`value-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="value-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
