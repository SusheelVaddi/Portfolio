import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setScrolled(window.scrollY > 20);

      // Section spy logic
      const scrollPos = window.scrollY + 120; // offset
      
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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '720px',
        zIndex: 100,
        pointerEvents: 'none' // allow clicking through empty space
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          borderRadius: '24px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: scrolled ? 'rgba(5, 5, 10, 0.75)' : 'rgba(10, 8, 20, 0.4)',
          borderColor: scrolled ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
          pointerEvents: 'auto', // reactivate clicks for actual items
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5), 0 1px 3px rgba(168, 85, 247, 0.05)' : 'none'
        }}
      >
        {/* Monogram Brand Logo */}
        <a 
          href="#home"
          style={{
            textDecoration: 'none',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>Susheel</span>
          <span style={{ 
            color: 'var(--accent-purple)',
            fontWeight: 500,
            fontSize: '0.85rem',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            padding: '2px 6px',
            borderRadius: '6px',
            background: 'rgba(168, 85, 247, 0.08)'
          }}>VS</span>
        </a>

        {/* Links List */}
        <nav style={{ display: 'flex', gap: '4px' }}>
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? '#ffffff' : 'var(--text-gray)',
                  transition: 'color 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(168, 85, 247, 0.12)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      borderRadius: '12px',
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
      </div>
    </motion.header>
  );
}
