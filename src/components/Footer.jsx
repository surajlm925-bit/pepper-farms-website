export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">Pepperfarm</a>
          <p>The daily nutrition system. Clean-label food delivered by design for urban lives that refuse to compromise.</p>
        </div>
        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><a href="#menu">Veg Bowls</a></li>
            <li><a href="#menu">Fruit Bowls</a></li>
            <li><a href="#menu">Juices</a></li>
            <li><a href="#menu">Soups</a></li>
            <li><a href="#menu">Breads</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#philosophy">About</a></li>
            <li><a href="#sourcing">Our Kitchen</a></li>
            <li><a href="#sourcing">Sourcing</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Delivery Zones</a></li>
            <li><a href="#subscriptions">Manage Subscription</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Pepperfarm. All rights reserved. Bangalore, India.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </footer>
  );
}
