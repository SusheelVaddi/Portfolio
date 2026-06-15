import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
        
        {/* Logo and signature */}
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
            Full Stack Software Architect & Engineer
          </span>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          fontSize: '0.875rem',
          color: 'var(--text-gray)'
        }}>
          <a href="#about" style={footerLinkStyle}>About</a>
          <a href="#skills" style={footerLinkStyle}>Skills</a>
          <a href="#projects" style={footerLinkStyle}>Projects</a>
          <a href="#contact" style={footerLinkStyle}>Contact</a>
        </div>

        {/* Tech stack badge */}
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span>Designed & developed using React • TypeScript • Vanilla CSS</span>
        </div>

        {/* Copyright */}
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          &copy; {new Date().getFullYear()} Susheel Kumar VS. All rights reserved.
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          style={{
            position: 'absolute',
            right: '24px',
            bottom: '36px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s, border-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
          }}
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'var(--text-gray)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  ':hover': {
    color: '#ffffff'
  }
};

// Inject hover styling for links
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  footer a:hover {
    color: #ffffff !important;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}
