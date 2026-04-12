import { useState, useEffect } from 'react';
import { menuItems } from '../data/menuData';

const MenuItemCard = ({ item, index, featured }) => {
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
      detail: { item: item.name, size }
    }));
  };

  const whatsappLink = (size = null) => {
    const sizeStr = size ? ` (${size})` : '';
    const text = `Hi Pepperfarm! I'd like to order the ${item.name}${sizeStr}.`;
    return `https://wa.me/919535072044?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`menu-card-v2 reveal ${featured ? 'menu-card-featured' : ''}`} style={{ '--delay': `${index * 0.08}s` }}>
      <div className="mc2-image">
        <div className="mc2-carousel">
          {item.images?.map((img, idx) => (
            <img key={idx} src={img} alt={item.name} className={idx === currentSlide ? 'active' : ''} loading="lazy" />
          ))}
        </div>
        {item.badge && (
          <span className="mc2-badge" style={{ '--badge-color': item.color || 'var(--sage)' }}>
            {item.badge}
          </span>
        )}
        {item.images && item.images.length > 1 && (
          <>
            <button className="carousel-nav prev" onClick={prevSlide}>&#8592;</button>
            <button className="carousel-nav next" onClick={nextSlide}>&#8594;</button>
            <div className="mc2-img-dots">
              {item.images.map((_, idx) => (
                <button key={idx} className={idx === currentSlide ? 'active' : ''} onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mc2-body">
        <div className="mc2-top">
          <h3>{item.name}</h3>
          <p className="mc2-desc">{item.desc}</p>
        </div>

        <div className="mc2-pricing">
          {item.options ? (
            item.options.map((opt, idx) => (
              <div key={idx} className="mc2-price-row">
                <span className="mc2-size">{opt.size}</span>
                <span className="mc2-price">{opt.subscription}</span>
                <a href={whatsappLink(opt.size)} target="_blank" rel="noopener noreferrer" className="mc2-wa-mini" title="Order on WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </a>
                <button className="mc2-form-mini" onClick={() => openContact(opt.size)} title="Leave your details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </button>
              </div>
            ))
          ) : (
            <div className="mc2-price-row">
              <span className="mc2-size">{item.size}</span>
              <span className="mc2-price">{item.subscription}</span>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mc2-wa-mini" title="Order on WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </a>
              <button className="mc2-form-mini" onClick={() => openContact()} title="Leave your details">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Menu() {
  const openContact = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', {
      detail: { item: 'Custom Meal Plan' }
    }));
  };

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div className="section-label reveal">Healthy Daily Nutrition</div>
        <h2 className="section-heading reveal reveal-delay-1">Crafted for your week.</h2>
        <p className="reveal reveal-delay-2" style={{ marginBottom: '24px' }}>
          Salads, fruit bowls, juices, and soups. All made in-house with clean-label ingredients.
        </p>
        <div className="mc2-subscription-note reveal reveal-delay-3">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 11.29a1 1 0 001.414 1.414l2-2A1 1 0 0011 10V7z"/></svg>
          Subscription pricing · Min 10 deliveries
        </div>
      </div>

      {/* Bento layout */}
      <div className="menu-bento">
        <div className="menu-bento-hero">
          <MenuItemCard item={menuItems[0]} index={0} featured />
        </div>
        <div className="menu-bento-grid">
          {menuItems.slice(1).map((item, idx) => (
            <MenuItemCard key={idx} item={item} index={idx + 1} />
          ))}
        </div>
      </div>

      {/* Dual funnel CTA */}
      <div className="menu-wa-cta reveal">
        <p>Can't decide? Let us build your perfect plan.</p>
        <div className="menu-cta-duo">
          <a
            href="https://wa.me/919535072044?text=Hi%20Pepperfarm!%20Help%20me%20build%20a%20custom%20meal%20plan."
            className="wa-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
          <button onClick={openContact} className="form-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            Leave your details
          </button>
        </div>
      </div>
    </section>
  );
}
