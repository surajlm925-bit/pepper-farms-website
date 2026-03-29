const testimonials = [
  {
    quote: 'I stopped thinking about lunch. It just arrives — fresh, balanced, and genuinely delicious. The subscription model removed all the daily friction around eating healthy.',
    name: 'Anika Rao',
    role: 'Product Designer · Subscriber since Jan',
  },
  {
    quote: 'Full ingredient transparency on every item. I know exactly what I\'m eating and why. No other cloud kitchen does this — Pepperfarm is in a different category entirely.',
    name: 'Karthik Menon',
    role: 'Software Engineer · Koramangala',
  },
  {
    quote: 'Managing a lifestyle condition means I can\'t gamble on food quality. Pepperfarm\'s clean-label promise and seasonal rotation is exactly what I needed for consistency.',
    name: 'Sneha Joshi',
    role: 'Wellness Coach · Indiranagar',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <div className="section-label reveal">What Subscribers Say</div>
        <h2 className="section-heading reveal reveal-delay-1">Real people. Real routines.</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
            <div className="testimonial-quote">"</div>
            <p>{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name.charAt(0)}</div>
              <div className="author-info">
                <h5>{t.name}</h5>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
