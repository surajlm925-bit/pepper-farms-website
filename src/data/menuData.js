const menuItems = [
  // SALADS
  {
    name: "Farmer's Veg Bowl",
    desc: 'Seasonal farm-fresh greens, heritage cucumbers, cherry tomatoes, micro-greens with house vinaigrette.',
    options: [
      { size: '500ml', subscription: '₹145' },
      { size: '1000ml', subscription: '₹250' }
    ],
    category: 'salads',
    badge: 'Farm Fresh',
    color: '#1B3022',
    images: [
      '/images/salads/WhatsApp_Image_2026-03-30_202604130456.jpeg',
      '/images/salads/WhatsApp_Image_2026-03-30_202604130457 (1).jpeg',
      '/images/salads/WhatsApp_Image_2026-03-30_202604130457 (2).jpeg',
      '/images/salads/WhatsApp_Image_2026-03-30_202604130457 (3).jpeg',
      '/images/salads/WhatsApp_Image_2026-03-30_202604130457 (4).jpeg',
      '/images/salads/WhatsApp_Image_2026-03-30_202604130457.jpeg',
    ],
  },

  // SOUPS
  {
    name: 'Daily Artisan Soup',
    desc: 'Slow-cooked, whole-ingredient soups varying with the season. Comforting, healing, and completely clean.',
    subscription: '₹150',
    size: '500ml',
    category: 'soups',
    badge: 'Wholesome',
    color: '#C36B4D',
    images: [
      '/images/soup/PXL_20240724_084024300~2.jpg_202604130500.jpeg',
      '/images/soup/PXL_20240731_084727275~2.jpg_202604130459.jpeg',
      '/images/soup/PXL_20240802_102906929~2.jpg_202604130500.jpeg',
      '/images/soup/PXL_20240805_104640121~2.jpg_202604130500.jpeg',
      '/images/soup/PXL_20240809_092203462~2.jpg_202604130500.jpeg',
      '/images/soup/PXL_20240816_095329053~2.jpg_202604130500.jpeg',
    ],
  },

  // JUICES
  {
    name: 'Raw Cold-Pressed Juice',
    desc: 'Cold-pressed fresh daily. Pure extraction of seasonal fruits and vegetables. Zero sugar, zero additives.',
    options: [
      { size: '250ml', subscription: '₹140' },
      { size: '500ml', subscription: '₹250' }
    ],
    category: 'juice',
    badge: 'Raw & Pure',
    color: '#7FB069',
    images: [
      '/images/juice-new/PXL_20230703_110850844~2_(1).jpg_202604130503.jpeg',
      '/images/juice-new/PXL_20240624_102056002.PORTRAIT~2.jpg_202604130503.jpeg',
      '/images/juice-new/PXL_20241030_102035115.NIGHT~2.jpg_202604130503.jpeg',
      '/images/juice-new/PXL_20241104_101011145~2.jpg_202604130503.jpeg',
      '/images/juice-new/PXL_20241213_095355935~2.jpg_202604130503.jpeg',
      '/images/juice-new/PXL_20241220_081958513~2.jpg_202604130503.jpeg',
    ],
  },

  // PROTEIN SMOOTHIES
  {
    name: 'Protein Smoothie',
    desc: 'Power-packed smoothies with seasonal fruits, nuts, seeds, and clean protein. The perfect post-workout fuel.',
    subscription: '₹240',
    size: '500ml',
    category: 'juice',
    badge: 'Rejuvenating',
    color: '#E8C547',
    images: [
      '/images/protein-shakes/protein-shake-berry.png',
      '/images/protein-shakes/protein-shake-green.png',
      '/images/protein-shakes/protein-shake-chocolate.png',
    ],
  },

  // FRUIT BOWLS
  {
    name: "Hisenberg's Fruit Bowl",
    desc: 'Hand-picked seasonal fruits, house-made granola, and wild honey. A vibrant start to your day.',
    subscription: '₹250',
    size: '500ml',
    category: 'fruits',
    badge: 'Seasonal',
    color: '#E8C547',
    images: [
      '/images/fruit bowl/PXL_20230719_103156540~2.jpg_202604130454.jpeg',
      '/images/fruit bowl/PXL_20230721_094543307.MP~2_(1).jpg_202604130454.jpeg',
      '/images/fruit bowl/PXL_20230804_093451882~2.jpg_202604130454.jpeg',
      '/images/fruit bowl/PXL_20240515_094629175.PORTRAIT~2.jpg_202604130454.jpeg',
      '/images/fruit bowl/PXL_20240617_095901887.PORTRAIT~2.jpg_202604130454.jpeg',
      '/images/fruit bowl/PXL_20240701_101739351.PORTRAIT~2.jpg_202604130454.jpeg',
    ],
  },
];

const bakeryItems = [
  {
    name: 'Whole Wheat Seeded Bread',
    desc: 'Hearty whole wheat bread packed with sunflower, flax, and pumpkin seeds.',
    subscription: '₹155',
    size: '450gms',
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp_Image_2026-01-19_202604130505 (1).jpeg',
      '/images/breads/WhatsApp_Image_2026-01-19_202604130505 (2).jpeg',
    ],
  },
  {
    name: 'Sourdough Loaf',
    desc: '48-hour fermented classic sourdough with a perfect crust and tangy crumb.',
    subscription: '₹160',
    size: '500gms',
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp_Image_2026-01-19_202604130505.jpeg',
      '/images/breads/WhatsApp_Image_2026-01-19_202604130506 (1).jpeg',
    ],
  },
  {
    name: 'Focaccia with Hot Honey',
    desc: 'Dimpled Italian bread infused with rosemary and drizzled with spicy wild honey.',
    options: [
      { size: '450gms', subscription: '₹350' },
      { size: '950gms', subscription: '₹650' }
    ],
    category: 'bakery',
    images: [
      '/images/breads/WhatsApp_Image_2026-01-19_202604130506.jpeg',
    ],
  },
];

/* Hero carousel images — product showcase from hero folder */
const heroShowcaseImages = [
  { src: '/images/hero/farmers_veg_bowl_premium.png', label: 'Farm Salad' },
  { src: '/images/hero/artisan_soup_premium.png', label: 'Artisan Soup' },
  { src: '/images/hero/hisenberg_fruit_bowl_premium.png', label: 'Fruit Bowl' },
  { src: '/images/hero/raw_cold_pressed_juice_premium.png', label: 'Cold-Pressed' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.06 (1).jpeg', label: 'Fresh Greens' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.06 (2).jpeg', label: 'Seasonal Bowl' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.07 (1).jpeg', label: 'Daily Fresh' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.08 (1).jpeg', label: 'Garden Harvest' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.09.jpeg', label: 'Clean Eating' },
  { src: '/images/hero/WhatsApp Image 2026-01-19 at 16.34.09 (1).jpeg', label: 'Pure Nutrition' },
];

const menuTabs = [
  { key: 'all', label: 'All' },
  { key: 'salads', label: 'Salads' },
  { key: 'soups', label: 'Soups' },
  { key: 'juice', label: 'Juice' },
  { key: 'fruits', label: 'Fruits' },
];

export { menuItems, bakeryItems, menuTabs, heroShowcaseImages };
