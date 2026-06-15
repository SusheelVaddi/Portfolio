import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '40px 0',
      backgroundColor: '#000000',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        textAlign: 'center'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#ffffff'
          }}>
            Susheel Kumar VS
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Software Developer & AI Enthusiast
          </span>
        </div>

        <div style={{
          display: 'flex',
          gap: '24px',
          fontSize: '0.85rem',
          color: 'var(--text-gray)'
        }}>
          <a href="#about" style={footerLinkStyle}>About</a>
          <a href="#skills" style={footerLinkStyle}>Skills</a>
          <a href="#projects" style={footerLinkStyle}>Projects</a>
          <a href="#achievements" style={footerLinkStyle}>Achievements</a>
          <a href="#contact" style={footerLinkStyle}>Contact</a>
        </div>

        <div style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          &copy; {new Date().getFullYear()} Susheel Kumar VS. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          style={{
            position: 'absolute',
            right: '24px',
            bottom: '36px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ffffff';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title="Scroll to Top"
        >
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'var(--text-gray)',
  textDecoration: 'none',
  transition: 'color 0.2s'
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  footer a:hover {
    color: #ffffff !important;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}
