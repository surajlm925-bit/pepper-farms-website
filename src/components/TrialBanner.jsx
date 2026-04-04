export default function TrialBanner() {
  const openTrialModal = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { item: "Rs. 1,250 Trial Plan" } 
    }));
  };

  return (
    <section className="trial-banner">
      <div className="section-label reveal">Try Before You Commit</div>
      <h2 className="reveal reveal-delay-1">Start with a Sample Pack.</h2>
      <p className="reveal reveal-delay-2">
        Three deliveries across all categories — veg bowls, juices, fruit bowls, and more. Zero commitment, full experience.
      </p>
      <div className="trial-price reveal reveal-delay-3">₹1,250</div>
      <div className="trial-detail reveal reveal-delay-3">for 3 deliveries · All categories included</div>
      <button onClick={openTrialModal} className="trial-cta reveal reveal-delay-4">
        Claim Your Trial
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </section>
  );
}
