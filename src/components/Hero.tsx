import { motion } from 'framer-motion';
import { ArrowDown, CornerDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '120px',
        overflow: 'hidden',
        backgroundColor: 'transparent'
      }}
    >
      {/* Refined subtle top grid and soft mesh gradients */}
      <div className="grid-overlay" />
      
      <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
        {/* Sub-badge indicating status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-block', marginBottom: '24px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--text-gray)',
              letterSpacing: '0.02em'
            }}
          >
            <span style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px #ffffff'
            }} />
            Open for internships & collaborations
          </div>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '-0.05em'
          }}
        >
          Susheel Kumar VS
        </motion.h1>

        {/* Roles Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            fontWeight: 500,
            color: 'var(--text-silver)',
            marginBottom: '24px',
            letterSpacing: '-0.01em'
          }}
        >
          Engineering Student <span style={{ color: 'var(--text-gray)' }}>|</span> Developer <span style={{ color: 'var(--text-gray)' }}>|</span> AI Enthusiast
        </motion.p>

        {/* Description Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text-gray)',
            maxWidth: '560px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}
        >
          Building high-fidelity software products and deep learning integrations. Focused on clean engineering logic and pixel-perfect minimalism.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '0.925rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Explore Projects
            <CornerDownRight size={16} />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            style={{
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '0.925rem'
            }}
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Down arrow mouse scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)'
        }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            const target = document.getElementById('about');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
