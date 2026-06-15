import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 120;
      
      for (const item of NAV_ITEMS) {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '820px',
        zIndex: 100,
        pointerEvents: 'none'
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          borderRadius: '16px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          backgroundColor: scrolled ? 'rgba(var(--nav-bg), 0.85)' : 'var(--bg-card)',
          borderColor: 'var(--border-glass)',
          pointerEvents: 'auto',
          boxShadow: scrolled ? '0 10px 40px -15px rgba(0,0,0,0.9)' : 'none'
        }}
      >
        <a 
          href="#home"
          style={{
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-white)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0
          }}
        >
          <span>Susheel Kumar VS</span>
          <span style={{ 
            color: 'var(--text-white)',
            fontWeight: 600,
            fontSize: '0.8rem',
            border: '1px solid var(--border-glass-hover)',
            padding: '2px 6px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.05)',
            flexShrink: 0
          }}>SK</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <nav style={{ display: 'flex', gap: '2px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    position: 'relative',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-white)' : 'var(--text-gray)',
                    transition: 'color 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-glass-hover)',
                        borderRadius: '8px',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Sleek Theme Selector */}
          <button
            onClick={toggleTheme}
            title={`Active Theme: ${theme.toUpperCase()} (Click to cycle)`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--border-glass)',
              border: '1px solid var(--border-glass-hover)',
              color: 'var(--text-white)',
              cursor: 'pointer',
              flexShrink: 0,
              outline: 'none'
            }}
          >
            {theme === 'dark' && <Moon size={14} />}
            {theme === 'light' && <Sun size={14} />}
            {theme === 'system' && <Monitor size={14} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
