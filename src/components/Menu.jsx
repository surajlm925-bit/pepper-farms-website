import { useState, useEffect } from 'react';
import { menuItems } from '../data/menuData';

const MenuItemCard = ({ item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (item.images && item.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % item.images.length);
      }, 4000 + Math.random() * 2000);
      return () => clearInterval(timer);
    }
  }, [item.images]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % item.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const openContact = (size = null) => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: item.name, size: size } 
    }));
  };

  return (
    <div className="menu-card reveal">
      <div className="menu-card-image">
        <div className="menu-card-carousel">
          {item.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={item.name}
              className={idx === currentSlide ? 'active' : ''}
            />
          ))}
          {item.images && item.images.length > 1 && (
            <>
              <button className="carousel-nav prev" onClick={prevSlide}>&#8592;</button>
              <button className="carousel-nav next" onClick={nextSlide}>&#8594;</button>
            </>
          )}
        </div>
        {item.badge && (
          <div className="menu-badge" style={{ backgroundColor: item.color || 'var(--sage)' }}>
            {item.badge}
          </div>
        )}
      </div>
      
      <div className="menu-card-body">
        <h3>{item.name}</h3>
        <p className="desc">{item.desc}</p>
        
        {item.options ? (
          <div className="menu-options">
            {item.options.map((opt, idx) => (
              <div key={idx} className="menu-option-row">
                <span className="size">{opt.size}</span>
                <div className="price-stack">
                  <div className="price-item sub">
                    <span className="price-val">{opt.subscription}</span>
                    <span className="price-label">SUBSCRIPTION</span>
                  </div>
                  <div className="price-item regular">
                    <span className="price-val">{opt.price}</span>
                    <span className="price-label">REGULAR</span>
                  </div>
                </div>
                <button className="add-btn" onClick={() => openContact(opt.size)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-card-footer">
            <div className="price-stack">
              <div className="price-item sub">
                <span className="price-val">{item.subscription}</span>
                <span className="price-label">SUBSCRIPTION</span>
              </div>
              <div className="price-item regular">
                <span className="price-val">{item.price}</span>
                <span className="price-label">REGULAR</span>
              </div>
            </div>
            {item.size && <span className="size-label-small">{item.size}</span>}
            <button className="add-btn" onClick={() => openContact()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div className="section-label reveal">Healthy Daily Nutrition</div>
        <h2 className="section-heading reveal reveal-delay-1">Crafted for your week.</h2>
        <p className="reveal reveal-delay-2" style={{ marginBottom: '24px' }}>
          Salads, fruit bowls, juices, and soups — all made in-house with clean-label ingredients. <br />
          Enjoy lower pricing with our 10-delivery subscription plan.
        </p>
        <div className="pricing-legend reveal reveal-delay-3">
          <div className="legend-item">
            <span className="dot sub"></span>
            <span>Subscription (Min 10 Deliveries)</span>
          </div>
          <div className="legend-item">
            <span className="dot regular"></span>
            <span>Regular Price</span>
          </div>
        </div>
      </div>

      <div className="menu-grid" key="all-items">
        {menuItems.map((item, idx) => (
          <MenuItemCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
