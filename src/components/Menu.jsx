import { useState, useEffect } from 'react';
import { menuItems, menuTabs } from '../data/menuData';

function MenuCard({ item }) {
  const [imageError, setImageError] = useState(false);
  const showImage = item.images && item.images.length > 0 && !imageError;

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        {showImage ? (
          <img
            src={item.images[0]}
            alt={item.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: item.illustration(item.color) }} />
        )}
        {item.badge && <div className="menu-badge">{item.badge}</div>}
        <div className="size-tag">{item.size}</div>
      </div>
      <div className="menu-card-body">
        <h3>{item.name}</h3>
        <div className="desc">{item.desc}</div>
        <div className="menu-card-footer">
          <div className="price-group">
            <span className="price-sub">{item.price}</span>
            <span className="price-regular">{item.regular}</span>
          </div>
          <button className="add-btn" aria-label="Add to cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? menuItems
    : menuItems.filter((i) => i.category === filter);

  // Re-observe reveal elements after filter change
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.menu-card.reveal').forEach((el) => {
        el.classList.add('visible');
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div className="section-label reveal">The Menu</div>
        <h2 className="section-heading reveal reveal-delay-1">Crafted for your week.</h2>
        <p className="reveal reveal-delay-2">
          Salads, fruit bowls, juices, soups, and breads — all made in-house with clean-label ingredients. Subscription pricing shown first.
        </p>
      </div>
      <div className="menu-tabs reveal">
        {menuTabs.map((tab) => (
          <button
            key={tab.key}
            className={`menu-tab${filter === tab.key ? ' active' : ''}`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {filtered.map((item, i) => (
          <MenuCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}
