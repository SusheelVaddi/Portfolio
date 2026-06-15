import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, Phone } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ marginBottom: '50px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Contact
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        {/* Form and Info Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '30px'
        }}>
          {/* Left Column: Info Badges */}
          <div className="contact-info-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', justifyContent: 'center' }}>
              
              <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Let's work together.</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '20px' }}>
                Have a question or want to build a system? Send me a message, or connect with me via social channels.
              </p>

              {/* Info row 1: Email */}
              <div 
                className="glass-panel" 
                style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</span>
                  <a href="mailto:susheelvaddi07@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                    susheelvaddi07@gmail.com
                  </a>
                </div>
              </div>

              {/* Info row 1b: Phone */}
              <div 
                className="glass-panel" 
                style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</span>
                  <a href="tel:+918550050707" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                    +91 8550050707
                  </a>
                </div>
              </div>

              {/* Info row 2: Location */}
              <div 
                className="glass-panel" 
                style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>
                    Bengaluru, India
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <a 
                  href="https://github.com/SusheelVaddi" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    color: '#ffffff',
                    textDecoration: 'none'
                  }}
                >
                  <GithubIcon size={20} />
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    color: '#ffffff',
                    textDecoration: 'none'
                  }}
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            <div className="glass-panel" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
              <div className="grid-overlay" style={{ opacity: 0.1 }} />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '340px',
                      textAlign: 'center'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: [0.5, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      style={{ color: '#ffffff', marginBottom: '20px' }}
                    >
                      <CheckCircle size={64} />
                    </motion.div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Transmitted</h3>
                    <p style={{ color: 'var(--text-gray)', maxWidth: '300px' }}>
                      Thanks for reaching out! I will check your message and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="subject" style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>Subject</label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary"
                      style={{
                        padding: '14px 28px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      <Send size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .contact-info-wrapper {
          grid-column: span 12;
        }
        .contact-form-wrapper {
          grid-column: span 12;
        }
        @media (min-width: 992px) {
          .contact-info-wrapper {
            grid-column: span 5 !important;
          }
          .contact-form-wrapper {
            grid-column: span 7 !important;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '8px',
  padding: '12px 16px',
  color: '#ffffff',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.3s ease, background-color 0.3s ease'
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  input:focus, textarea:focus {
    border-color: rgba(255, 255, 255, 0.45) !important;
    background-color: rgba(255, 255, 255, 0.05) !important;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}
