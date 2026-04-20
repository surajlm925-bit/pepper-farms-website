const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const plans = [
  {
    badge: 'Starter',
    name: 'Essentials',
    desc: 'One category, full commitment. Perfect for solo professionals building the habit.',
    price: '₹250',
    period: '/ bowl (1000ml)',
    featured: false,
    features: [
      '1000ml Veg Bowl. 3x weekly',
      'Minimum 10 deliveries',
      'Seasonal menu rotation',
      'Full ingredient transparency',
      'Save ₹50/bowl vs regular price',
    ],
    btnText: 'Get Started',
  },
  {
    badge: 'Most Popular',
    name: 'Complete',
    desc: 'Bowl + juice + extras. The full daily nutrition system. Your health on autopilot.',
    price: '₹490',
    period: '/ day',
    featured: true,
    features: [
      '1000ml Veg Bowl',
      'Cold-pressed juice or smoothie',
      'Fruit bowl or parfait',
      'Add-on extras (oats, dressings) at cost',
      'Priority delivery slot',
      'Nutrition insights dashboard',
    ],
    btnText: 'Subscribe Now',
  },
  {
    badge: 'Teams',
    name: 'Corporate',
    desc: 'Office-wide nutrition for teams of 10+. Bulk plans, custom delivery windows.',
    price: 'Custom',
    period: '/ team',
    featured: false,
    features: [
      'All categories: bowls, juices, soups, breads',
      'Dedicated account manager',
      'Custom delivery windows & routes',
      'Invoicing, reporting & preference tracking',
    ],
    btnText: 'Contact Us',
  },
];

export default function Subscriptions() {
  const openContact = (planName) => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', {
      detail: { item: `${planName} Subscription` }
    }));
  };

  return (
    <section className="subscriptions" id="subscriptions">
      <div className="sub-header">
        <div className="section-label reveal">Subscription Plans</div>
        <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>Built for your rhythm.</h2>
        <p className="reveal reveal-delay-2" style={{ maxWidth: '600px', margin: '24px auto 0', textAlign: 'center' }}>
          Minimum 10 deliveries. Delivery on Monday, Wednesday and Friday. Better food, zero daily effort.
        </p>
      </div>
      <div className="sub-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`sub-card${plan.featured ? ' featured' : ''} reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="sub-badge">{plan.badge}</div>
            <h3>{plan.name}</h3>
            <div className="sub-desc">{plan.desc}</div>
            <div className="sub-price-row">
              <span className="sub-price">{plan.price}</span>
              <span className="sub-period">{plan.period}</span>
            </div>
            <ul className="sub-features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '3px' }}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openContact(plan.name)}
              className={plan.featured ? "sub-btn featured-btn" : "sub-btn outline-btn"}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
