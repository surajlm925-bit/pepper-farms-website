import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [context, setContext] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const whatsappNumber = '919535072044';

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      if (e.detail) {
        setContext(e.detail);
        if (e.detail.item) {
          const sizeStr = e.detail.size ? ` (${e.detail.size})` : '';
          setFormData(prev => ({
            ...prev,
            message: `Hi Pepperfarm! I'm interested in the ${e.detail.item}${sizeStr}.`
          }));
        }
      }
    };
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  const handleRedirect = () => {
    const text = formData.message || "Hi Pepperfarm! I'm interested in learning more about your healthy meal plans.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', phone: '', message: '' });
      setContext(null);
    }, 3000);
  };

  return (
    <>
      <div className="wa-fixed-btn" onClick={() => setIsOpen(true)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </div>

      {isOpen && (
        <div className="wa-modal-overlay">
          <div className="wa-modal reveal active">
            <button className="wa-close" onClick={() => setIsOpen(false)}>&times;</button>
            <div className="wa-modal-header">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
              <h3>How can we help?</h3>
              <p>We're here to assist you with your health goals.</p>
            </div>

            <div className="wa-modal-options">
              <button onClick={handleRedirect} className="wa-primary-redirect">
                Continue to WhatsApp
              </button>
              
              <div className="wa-divider">
                <span>OR</span>
              </div>
              
              <div className="wa-fallback">
                <h4>Leave a Message</h4>
                {submitted ? (
                  <div className="wa-success">
                    <p>Thank you! Our team will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="WhatsApp Number" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <textarea 
                      placeholder="Tell us what you're looking for..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    <button type="submit" className="wa-form-submit">Send Information</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
