const menuItems = [
  // SALADS
  {
    name: "Farmer's Veg Bowl",
    desc: 'Seasonal farm-fresh greens, heritage cucumbers, cherry tomatoes, micro-greens with house vinaigrette — nutrient-dense and clean.',
    options: [
      { size: '500ml', price: '₹175', subscription: '₹145' },
      { size: '1000ml', price: '₹300', subscription: '₹250' }
    ],
    category: 'salads',
    badge: 'Farm Fresh',
    color: '#1B3022',
    images: [
      '/images/menu-premium/farmers_veg_bowl_premium.png',
      '/images/salads/WhatsApp Image 2026-01-19 at 16.34.06 (1).jpeg',
      '/images/salads/WhatsApp Image 2026-01-19 at 16.34.08 (1).jpeg',
      '/images/salads/WhatsApp Image 2026-01-19 at 16.34.09 (1).jpeg',
      '/images/salads-new/WhatsApp Image 2026-03-30 at 10.43.16 AM.jpeg',
    ],
  },

  // SOUPS
  {
    name: 'Daily Artisan Soup',
    desc: 'Slow-cooked, whole-ingredient soups varying with the season. Comforting, healing, and completely clean.',
    price: '₹175',
    subscription: '₹150',
    size: '500ml',
    category: 'soups',
    badge: 'Wholesome',
    color: '#C36B4D',
    images: [
      '/images/menu-premium/artisan_soup_premium.png',
      '/images/soup/WhatsApp Image 2026-01-19 at 16.34.06.jpeg',
      '/images/soup/WhatsApp Image 2026-01-19 at 16.34.07 (2).jpeg',
      '/images/soups-new/Soups  (1).png',
      '/images/soups-new/Soups  (2).png',
    ],
  },

  // JUICES & SMOOTHIES
  {
    name: 'Raw Cold-Pressed Juice',
    desc: 'Cold-pressed fresh daily. Pure extraction of seasonal fruits and vegetables — zero sugar, zero additives.',
    options: [
      { size: '250ml', price: '₹170', subscription: '₹140' },
      { size: '500ml', price: '₹300', subscription: '₹250' }
    ],
    category: 'juice',
    badge: 'Raw & Pure',
    color: '#7FB069',
    images: [
      '/images/menu-premium/raw_cold_pressed_juice_premium.png',
      '/images/juice/WhatsApp Image 2026-01-19 at 16.34.08 (2).jpeg',
      '/images/juice-new/Untitled Design - 1.png',
      '/images/juice-new/Untitled Design - 1 (1).png',
    ],
  },
  {
    name: 'Protein Smoothie',
    desc: 'Power-packed smoothies with seasonal fruits, nuts, and seeds. The perfect post-revery fuel.',
    price: '₹275',
    subscription: '₹240',
    size: '500ml',
    category: 'juice',
    badge: 'Rejuvenating',
    color: '#E8C547',
    images: [
      '/images/juice-new/Untitled (1000 x 1000 px).png',
      '/images/juice-new/PXL_20240624_102056002.PORTRAIT~2.jpg',
      '/images/juice-new/PXL_20241213_095355935~2.jpg',
    ],
  },

  // FRUIT BOWLS
  {
    name: "Hisenberg's Fruit Bowl",
    desc: 'Hand-picked seasonal fruits, house-made granola, and wild honey — a vibrant start to your day.',
    price: '₹300',
    subscription: '₹250',
    size: '500ml',
    category: 'fruits',
    badge: 'Seasonal',
    color: '#E8C547',
    images: [
      '/images/menu-premium/hisenberg_fruit_bowl_premium.png',
      '/images/fruit-bowls/WhatsApp Image 2026-01-19 at 16.34.06 (2).jpeg',
      '/images/fruit-bowls/WhatsApp Image 2026-01-19 at 16.34.07 (1).jpeg',
      '/images/fruit-bowls/WhatsApp Image 2026-01-19 at 16.34.08.jpeg',
      '/images/fruit-bowls/WhatsApp Image 2026-01-19 at 16.34.09.jpeg',
    ],
  },
];

const bakeryItems = [
  {
    name: 'Whole Wheat Seeded Bread',
    desc: 'Hearty whole wheat bread packed with sunflower, flax, and pumpkin seeds.',
    price: '₹190',
    subscription: '₹155',
    size: '450gms',
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp Image 2026-01-19 at 16.34.01.jpeg',
      '/images/breads/WhatsApp Image 2026-01-19 at 16.34.00 (2).jpeg',
      '/images/bakery/IMG_20210314_162051.jpg',
    ],
  },
  {
    name: 'Sourdough Loaf',
    desc: '48-hour fermented classic sourdough with a perfect crust and tangy crumb.',
    price: '₹200',
    subscription: '₹160',
    size: '500gms',
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp Image 2026-01-19 at 16.33.59 (2).jpeg',
      '/images/breads/WhatsApp Image 2026-01-19 at 16.34.00 (1).jpeg',
      '/images/bakery/IMG_20210122_172038.jpg',
    ],
  },
  {
    name: 'Focaccia with Hot Honey',
    desc: 'Dimpled Italian bread infused with rosemary and drizzled with spicy wild honey.',
    options: [
      { size: '450gms', price: '₹425', subscription: '₹350' },
      { size: '950gms', price: '₹725', subscription: '₹650' }
    ],
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp Image 2026-01-19 at 16.34.01 (1).jpeg',
      '/images/bakery/IMG_20210410_174543.jpg',
    ],
  },
];

const menuTabs = [
  { key: 'all', label: 'All' },
  { key: 'salads', label: 'Salads' },
  { key: 'soups', label: 'Soups' },
  { key: 'juice', label: 'Juice' },
  { key: 'fruits', label: 'Fruits' },
];

export { menuItems, bakeryItems, menuTabs };
