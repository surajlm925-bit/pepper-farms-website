Listed directory pepperfarm-react
Viewed package.json:1-28
Listed directory src
Listed directory components
Listed directory data
Viewed App.jsx:1-50
Viewed README.md:1-17
Viewed useAnimations.js:1-75
Viewed menuData.js:1-159
Viewed index.css:1-800

# Project Report & Developer Handout: Pepper Farms Website V2

This document provides a comprehensive technical overview and development guide for the **Pepper Farms Website V2** project. It is designed to facilitate smooth onboarding for developers and provide a high-level summary of the current project status, architecture, and design principles.

> [!NOTE]
> This project is built as a high-fidelity, performance-optimized React 19 application using Vite. It emphasizes a "premium farm-to-table" aesthetic with custom vanilla CSS and scroll-driven interactions.

## 1. Project Overview
**Pepper Farms** is a direct-to-consumer (D2C) brand focused on seasonal, farm-fresh produce and artisan food products. The website serves as a premium digital storefront and brand storytelling platform, emphasizing transparency, sourcing, and health.

### Core Tech Stack
*   **Frontend Framework**: React 19
*   **Build Tool**: Vite 8.0.1
*   **Styling**: Vanilla CSS (Custom tokens, Flex/Grid, Modern CSS features)
*   **State Management**: React Hooks (Native `useState`, `useEffect`, `useRef`)
*   **Deployment**: Optimized for Netlify (`netlify.toml` included)

---

## 2. Directory Structure
The codebase follows a modular React structure aimed at high maintainability.

```text
pepperfarm-react/
├── public/              # Static assets (images, icons)
├── src/
│   ├── assets/          # Shared visual assets
│   ├── components/      # Reusable UI components (Hero, Menu, etc.)
│   ├── data/            # Content-driven data (menuData.js)
│   ├── hooks/           # Custom React hooks (useAnimations.js)
│   ├── App.jsx          # Main application entry and section assembly
│   ├── index.css        # Global styles & design system tokens (49KB)
│   └── main.jsx         # React mounting point
├── package.json         # Dependency and script management
└── vite.config.js       # Vite configuration
```

---

## 3. Design System
The visual language is defined in `src/index.css` using CSS custom properties (variables).

### Color Palette
*   `--deep-forest`: `#1B3022` (Primary Brand Color)
*   `--terracotta`: `#C36B4D` (Accent/CTA Color)
*   `--parchment`: `#F9F7F2` (Main Background)
*   `--sage`: `#A3B18A` (Secondary Brand Color)

### Typography
*   **Headings**: `Playfair Display` (Serif) - Conveying heritage and premium quality.
*   **Body**: `Inter` (Sans-serif) - Ensuring high readability and modern feel.

---

## 4. Key Components & Implementation

### Animation System (`src/hooks/useAnimations.js`)
The project uses a custom-built animation engine based on the **Intersection Observer API**.
*   **Reveal System**: Elements with the `.reveal` class are automatically animated into view on scroll.
*   **Nutrient Counter**: A specialized observer for "Nutrient Cards" that triggers an odometer-style count-up effect and bar-fill animation when they enter the viewport.
*   **Dynamic Re-observation**: Includes a `reobserve()` utility to handle elements that might be added to the DOM dynamically (e.g., during menu filtering).

### Data Management (`src/data/menuData.js`)
Content is decoupled from logic. All product information (name, description, prices, images, categories) is stored in a structured JSON-like format. This allows for:
*   Easy content updates without touching JSX.
*   Implementation of category filtering (Salads, Soups, Juices, etc.).
*   Support for multiple pricing options (Subscriptions vs. Single Purchase).

### Hero Sequence (`src/components/Hero.jsx`)
A full-bleed, responsive carousel that:
*   Uses a dark gradient overlay to ensure text readability over varying images.
*   Features an "eyebrow" label and animated scroll indicator.
*   Includes a "Stats Bar" highlighting key brand metrics (Farms, Orders, etc.).

---

## 5. Developer Guide (Getting Started)

### Local Development
1.  **Install Dependencies**: `npm install`
2.  **Start Dev Server**: `npm run dev`
3.  **Build for Production**: `npm run build`

### Adding a New Product
To add a new product to the menu:
1.  Open `src/data/menuData.js`.
2.  Add a new object to the `menuItems` array following the existing schema.
3.  Place images in the `public/images/` directory.

### Implementing New Animations
To make a component reveal on scroll, simply wrap the element or add the class:
```jsx
<div className="reveal">
  {/* Content */}
</div>
```
Use `.reveal-delay-1` through `.reveal-delay-4` for staggered entries.

---

## 6. Current Status & Roadmap
The project is currently in its second version (v2), featuring a highly polished UI.
*   **Status**: Core landing page sections are complete and responsive.
*   **Next Phase**:
    *   Integration with a backend for real-time subscription management.
    *   Enhanced e-commerce functionality (Cart/Checkout).
    *   Localized content support.

---

### Summary of Key Files for Handover
| File | Purpose |
| :--- | :--- |
| `src/index.css` | **Critical**: Contains the entire design system and global overrides. |
| `src/App.jsx` | Defines the layout order and section hierarchy. |
| `src/hooks/useAnimations.js` | Manages all scroll-triggered visual effects. |
| `src/data/menuData.js` | The "Single Source of Truth" for website content. |

This project report summarizes the technical and design landscape of the Pepper Farms React website. For further architectural details, refer to the individual component files which are heavily documented in-line.