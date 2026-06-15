import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate sending email
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status back to idle after 4s
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Background spot light glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container">
        
        {/* Section Heading */}
        <div style={{ marginBottom: '50px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--accent-pink)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Correspondence
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get In <span className="purple-blue-gradient-text">Touch</span>
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
                I am looking for internship, associate roles, or freelance collaboration opportunities. If you want to build a modern system or just chat, drop me a line!
              </p>

              {/* Info row 1: Email */}
              <div 
                className="glass-panel" 
                style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(168, 85, 247, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Write Email</span>
                  <a href="mailto:contact@susheel.dev" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                    contact@susheel.dev
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
                  borderRadius: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Based In</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>
                    Bengaluru, India
                  </span>
                </div>
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
                      style={{ color: '#10b981', marginBottom: '20px' }}
                    >
                      <CheckCircle size={64} style={{ filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.4))' }} />
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
                    {/* Name & Email in Row */}
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

                    {/* Subject */}
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

                    {/* Message */}
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      style={{
                        padding: '14px 28px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-pink) 100%)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        transition: 'opacity 0.2s',
                        boxShadow: '0 8px 20px -5px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      {status === 'sending' ? 'Sending Message...' : 'Send Message'}
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
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '10px',
  padding: '12px 16px',
  color: '#ffffff',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
  ':focus': {
    borderColor: 'rgba(236, 72, 153, 0.4)',
    boxShadow: '0 0 12px rgba(236, 72, 153, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)'
  }
};

// Quick fix for inline focus selectors in React
// We can bind focus/blur event handlers in the inputs or use custom standard CSS declarations.
// Since React inline styles do not support pseudo-classes like :focus natively, we will inject a global CSS block inside Contact.tsx.
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  input:focus, textarea:focus {
    border-color: rgba(236, 72, 153, 0.4) !important;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.2) !important;
    background-color: rgba(255, 255, 255, 0.04) !important;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}
