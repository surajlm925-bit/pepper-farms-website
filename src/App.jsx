import { useEffect } from 'react';
import { useAnimations } from './hooks/useAnimations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import HowItWorks from './components/HowItWorks';
import Menu from './components/Menu';
import Bakery from './components/Bakery';
import TrialBanner from './components/TrialBanner';
import Sourcing from './components/Sourcing';
import Testimonials from './components/Testimonials';
import Promise from './components/Promise';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const { reobserve } = useAnimations();

  useEffect(() => {
    // Re-observe after initial render
    const timer = setTimeout(reobserve, 100);
    return () => clearTimeout(timer);
  }, [reobserve]);

  return (
    <>
      <Navigation />
      <Hero />
      <Marquee />
      <Philosophy />
      <HowItWorks />
      <Menu />
      <Bakery />
      <TrialBanner />
      <Sourcing />
      <Gallery />
      <Testimonials />
      <Promise />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;