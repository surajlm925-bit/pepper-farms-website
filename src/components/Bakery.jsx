import { useState, useEffect } from 'react';
import { bakeryItems } from '../data/menuData';

const BakeryCard = ({ item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % item.images.length);
    }, 4500 + Math.random() * 2000);
    return () => clearInterval(timer);
  }, [item.images.length]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const openContact = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: item.name } 
    }));
  };

  return (
    <div className="bakery-card reveal">
      <div className="menu-card-carousel bakery-card-carousel">
        {item.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={item.name}
            className={idx === currentSlide ? 'active' : ''}
          />
        ))}

        <button className="carousel-nav prev" onClick={prevSlide}>&#8592;</button>
        <button className="carousel-nav next" onClick={nextSlide}>&#8594;</button>
      </div>
      <div className="bakery-card-content">
        <h3>{item.name}</h3>
        <p className="desc">{item.desc}</p>
        
        {item.options ? (
          <div className="menu-options">
            {item.options.map((opt, idx) => (
              <div key={idx} className="menu-option-row">
                <span className="size">{opt.size}</span>
                <div className="prices">
                  <span className="price-sub">{opt.subscription}</span>
                  <span className="price-reg">{opt.price}</span>
                </div>
                <button className="add-btn" onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { item: item.name, size: opt.size } }))}>+</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-card-footer">
            <div className="price-group">
              <span className="price-sub">{item.subscription}</span>
              <span className="price-reg">{item.price}</span>
            </div>
            <button className="add-btn" onClick={openContact}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Bakery() {
  return (
    <section id="bakery" className="bakery-section">
      <div className="section-label reveal">Artisan Slow-Bakery</div>
      <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
        Breads & Bakes. <br /> Prepared by time.
      </h2>

      <div className="bakery-grid">
        {bakeryItems.map((item, idx) => (
          <BakeryCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
