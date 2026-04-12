import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: 'I stopped thinking about lunch. It just arrives, fresh, balanced, and genuinely delicious. The subscription removed all the daily friction around eating well.',
    name: 'Anika Rao',
    role: 'Product Designer, Koramangala',
  },
  {
    quote: 'Full ingredient transparency on every item. I know exactly what I am eating and why. No other service does this. Pepperfarm is in a different category entirely.',
    name: 'Karthik Menon',
    role: 'Software Engineer, HSR Layout',
  },
  {
    quote: 'Managing a lifestyle condition means I cannot gamble on food quality. The clean-label promise and seasonal rotation is exactly what I needed for consistency.',
    name: 'Sneha Joshi',
    role: 'Wellness Coach, Indiranagar',
  },
  {
    quote: 'Three months in and I have not once thought about meal prep. The sourdough alone is worth it. This is genuinely the best food system I have found in Bangalore.',
    name: 'Rohan Kulkarni',
    role: 'Startup Founder, Whitefield',
  },
  {
    quote: 'The fruit bowls changed my mornings. I used to skip breakfast. Now I look forward to it. Seasonal, fresh, and the granola they make in-house is exceptional.',
    name: 'Priya Shenoy',
    role: 'UX Researcher, Jayanagar',
  },
  {
    quote: 'I ordered the trial pack and converted to a subscription within 48 hours. The soup that week was something else. Slow-cooked, wholesome, no shortcuts.',
    name: 'Aarav Nair',
    role: 'Finance Analyst, Bellandur',
  },
  {
    quote: 'What I appreciate most is consistency. Every Monday, Wednesday, Friday the box arrives. Same quality, rotating menu. It has genuinely become part of my routine.',
    name: 'Divya Krishnan',
    role: 'Doctor, Malleswaram',
  },
  {
    quote: 'The cold-pressed juices are the real deal. No sugar, no nonsense. My team now has a corporate plan and everyone looks forward to delivery days.',
    name: 'Siddharth Bhat',
    role: 'Engineering Manager, Electronic City',
  },
  {
    quote: 'I was sceptical. But the focaccia with hot honey converted me permanently. The bakery range alone makes the subscription worth it. Everything else is a bonus.',
    name: 'Meera Iyer',
    role: 'Marketing Lead, Banaswadi',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, 4500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, total]);

  const goTo = (idx) => {
    setActive(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);

  const visible = [
    testimonials[active % total],
    testimonials[(active + 1) % total],
    testimonials[(active + 2) % total],
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header reveal">
        <div className="section-label">What Subscribers Say</div>
        <h2 className="section-heading">Real people. Real routines.</h2>
      </div>

      <div className="testimonials-carousel">
        <button className="t-carousel-btn t-prev" onClick={prev} aria-label="Previous">&#8592;</button>
        <div className="testimonials-track">
          {visible.map((t, i) => (
            <div key={`${active}-${i}`} className={`testimonial-card${i === 0 ? ' t-primary' : ' t-secondary'}`}>
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
        <button className="t-carousel-btn t-next" onClick={next} aria-label="Next">&#8594;</button>
      </div>

      <div className="t-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`t-dot${i === active ? ' t-dot-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
