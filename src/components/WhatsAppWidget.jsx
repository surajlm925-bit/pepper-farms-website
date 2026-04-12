import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('choose'); // 'choose' | 'form' | 'success'
  const [context, setContext] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const whatsappNumber = '919535072044';

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      setView('choose');
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

  const handleWhatsApp = () => {
    const text = formData.message || "Hi Pepperfarm! I'm interested in learning more about your healthy meal plans.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setView('success');
    setTimeout(() => {
      setView('choose');
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setContext(null);
    }, 3500);
  };

  const close = () => {
    setIsOpen(false);
    setView('choose');
  };

  return (
    <>
      <div className="wa-fixed-btn" onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 24 24" fill="white" width="32" height="32"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>

      {isOpen && (
        <div className="wa-modal-overlay" onClick={close}>
          <div className="wa-modal reveal active" onClick={(e) => e.stopPropagation()}>
            <button className="wa-close" onClick={close}>&times;</button>

            {view === 'choose' && (
              <>
                <div className="wa-modal-header">
                  <div className="wa-modal-icon">🌿</div>
                  <h3>Get in touch</h3>
                  <p>{context?.item ? `Interested in ${context.item}?` : 'We\'re here to help you eat better.'}</p>
                </div>

                <div className="wa-modal-options">
                  <button onClick={handleWhatsApp} className="wa-option-btn wa-option-whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <div>
                      <strong>Chat on WhatsApp</strong>
                      <span>Get instant replies</span>
                    </div>
                    <span className="wa-option-arrow">→</span>
                  </button>

                  <button onClick={() => setView('form')} className="wa-option-btn wa-option-form">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                    <div>
                      <strong>Leave your details</strong>
                      <span>We'll call or email you</span>
                    </div>
                    <span className="wa-option-arrow">→</span>
                  </button>
                </div>
              </>
            )}

            {view === 'form' && (
              <>
                <div className="wa-modal-header">
                  <button className="wa-back" onClick={() => setView('choose')}>← Back</button>
                  <h3>Your details</h3>
                  <p>We'll reach out within a few hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="wa-contact-form">
                  <div className="wa-form-field">
                    <label>Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="wa-form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="wa-form-field">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="wa-form-field">
                    <label>What are you interested in?</label>
                    <textarea
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <button type="submit" className="wa-form-submit">Send Details</button>
                </form>
              </>
            )}

            {view === 'success' && (
              <div className="wa-success-view">
                <div className="wa-success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>Our team will reach out to you shortly via call or email.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
