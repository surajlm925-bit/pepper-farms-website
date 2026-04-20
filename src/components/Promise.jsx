const nutrients = [
  { value: '32', suffix: 'g', label: 'Avg. Protein / Bowl', barWidth: '75%' },
  { value: '48', suffix: 'g', label: 'Avg. Fiber / Day', barWidth: '60%' },
  { value: '0', suffix: '%', label: 'Artificial Additives', barWidth: '0%' },
  { value: '100', suffix: '%', label: 'In-House Prepared', barWidth: '100%' },
];

const promises = [
  'Zero preservatives, artificial additives, or premixes',
  'Locally sourced from small farms & seasonal vendors',
  'Full ingredient transparency on every single item',
  'Small-batch, in-house preparation. No industrial shortcuts',
  'Nutritionally balanced by design, not by accident',
  'Rotating menus to avoid monotony & follow seasons',
];

export default function Promise() {
  return (
    <section className="promise" id="promise">
      <div className="promise-text">
        <h2 className="section-heading reveal" style={{ textAlign: 'left', marginBottom: '1.5rem' }}></h2>
        <p className="promise-subtext reveal reveal-delay-1">
          Everything we put in your box follows one rule: if we would not eat it ourselves, it does not go in.
        </p>
        <ul className="promise-list reveal reveal-delay-3">
          {promises.map((p, i) => (
            <li key={i}>
              <span className="check">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="promise-visual">
        {nutrients.map((n, i) => (
          <div key={i} className={`nutrient-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="nutrient-value" data-target={n.value}>{`0${n.suffix}`}</div>
            <div className="nutrient-label">{n.label}</div>
            <div className="nutrient-bar">
              <div className="nutrient-bar-fill" style={{ width: '0%' }} data-width={n.barWidth}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
