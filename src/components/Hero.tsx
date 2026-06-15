import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

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
        overflow: 'hidden'
      }}
    >
      {/* Light mesh grids and spotlights for premium feel */}
      <div className="grid-overlay" />
      
      {/* Backdrop spotlight */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 100%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-gray)'
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 10px #10b981',
              animation: 'pulse 2s infinite'
            }} />
            Open for new opportunities
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: '20px',
            letterSpacing: '-0.04em'
          }}
        >
          Designing Digital <br />
          <span className="purple-blue-gradient-text">Masterpieces.</span>
        </motion.h1>

        {/* Description Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-gray)',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}
        >
          Hi, I'm <span style={{ color: '#ffffff', fontWeight: 600 }}>Susheel Kumar VS</span>. 
          A developer building modern web applications, focusing on minimal design, rich interactivity, and clean codebases.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* View Projects Button */}
          <a
            href="#projects"
            style={{
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-blue) 100%)',
              color: '#ffffff',
              fontSize: '0.975rem',
              fontWeight: 600,
              boxShadow: '0 8px 25px -5px rgba(168, 85, 247, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(168, 85, 247, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(168, 85, 247, 0.4)';
            }}
          >
            Explore Projects
            <ArrowUpRight size={18} />
          </a>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              color: '#ffffff',
              fontSize: '0.975rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'background 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Down mouse wheel indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
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
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          padding: '6px'
        }}>
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'var(--text-gray)',
              borderRadius: '2px'
            }}
          />
        </div>
        <ChevronDown size={14} style={{ opacity: 0.6 }} />
      </motion.div>

      {/* Pulse Animation Definition */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
}
