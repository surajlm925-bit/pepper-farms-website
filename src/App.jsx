import { useEffect } from 'react';
import { useAnimations } from './hooks/useAnimations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import HowItWorks from './components/HowItWorks';
import Menu from './components/Menu';
import TrialBanner from './components/TrialBanner';
import Sourcing from './components/Sourcing';
import Testimonials from './components/Testimonials';
import Promise from './components/Promise';
import Subscriptions from './components/Subscriptions';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

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
      <TrialBanner />
      <Sourcing />
      <Gallery />
      <Testimonials />
      <Promise />
      <Subscriptions />
      <Footer />
    </>
  );
}

export default App;
