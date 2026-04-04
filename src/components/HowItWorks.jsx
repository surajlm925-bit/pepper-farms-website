const steps = [
  { num: '01', title: 'Choose Your Plan', desc: 'Pick from our subscription tiers based on your appetite and frequency. Start with a 3-delivery trial or commit to a full plan.' },
  { num: '02', title: 'We Cook Fresh', desc: 'Small-batch preparation using locally sourced, seasonal ingredients. Every bowl assembled with intention the morning of delivery.' },
  { num: '03', title: 'Delivered to You', desc: 'Route-optimized delivery every Monday, Wednesday, and Friday. Cold-packed, perfectly portioned, ready to enjoy.' },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how">
      <div className="how-header">
        <div>
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-heading reveal reveal-delay-1">Your health,<br/>on autopilot.</h2>
        </div>
        <p className="reveal reveal-delay-2">
          Three simple steps to remove the daily friction of eating well. We handle sourcing, cooking, and delivery — you just eat.
        </p>
      </div>
      <div className="howitworks-grid">
        {steps.map((s, i) => (
          <div key={i} className={`step-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
