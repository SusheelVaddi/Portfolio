import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, MapPin, Globe, Clock, Mail, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function AboutBento() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion reveal variants for grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ marginBottom: '50px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--accent-purple)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Discovery
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            About Me & <span className="purple-blue-gradient-text">Achievements</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* CARD 1: BIO (col-span-2 row-span-2) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)'
                }}>
                  <Globe size={20} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Who I Am</h3>
              </div>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '16px' }}>
                I'm <span style={{ color: '#ffffff', fontWeight: 600 }}>Susheel Kumar VS</span>, a dynamic software developer who loves creating interactive systems. I approach web development by finding the sweet spot between code scalability, functional robustness, and visual elegance.
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                My development stack is built on modern frameworks. Whether building clean user interfaces or architecting API endpoints, I strive to write semantic, well-documented, and production-ready code.
              </p>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} /> Architecture First
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} /> Pixel Perfect
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} /> Clean API Designs
              </div>
            </div>
          </motion.div>

          {/* CARD 2: PHILOSOPHY (col-span-2 row-span-1) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 2',
              padding: '24px 36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Core Philosophy</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                "Simplicity is the ultimate sophistication. I build web applications with zero bloating, lightning fast speeds, and modular structure."
              </p>
            </div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'rgba(168, 85, 247, 0.1)',
              userSelect: 'none',
              fontFamily: 'var(--font-heading)'
            }}>
              &lt;/&gt;
            </div>
          </motion.div>

          {/* CARD 3: ACHIEVEMENTS (col-span-2 row-span-1) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 2',
              padding: '30px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Award size={20} style={{ color: 'var(--accent-purple)' }} />
              <h3 style={{ fontSize: '1.25rem' }}>Selected Accomplishments</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-purple)' }}>Winner / Finalist</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Smart India Hackathon</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-blue)' }}>500+ Solved</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>LeetCode & DSA Problems</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-indigo)' }}>AWS Certified</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Cloud Practitioner Practitioner</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-pink)' }}>Open Source</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Active Git Contributor</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: TIMELINE (col-span-2 row-span-2) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <Briefcase size={20} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Experience & Education</h3>
              </div>

              {/* Timeline list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', paddingLeft: '20px' }}>
                {/* Vertical Line */}
                <div style={{
                  position: 'absolute',
                  left: '4px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }} />

                {/* Timeline Item 1 */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-purple)',
                    boxShadow: '0 0 8px var(--accent-purple)'
                  }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase' }}>2025 - Present</span>
                  <h4 style={{ fontSize: '1.05rem', marginTop: '2px' }}>Associate Software Engineer Intern</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Building cloud-native web experiences & APIs</p>
                </div>

                {/* Timeline Item 2 */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-blue)',
                    boxShadow: '0 0 8px var(--accent-blue)'
                  }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600, textTransform: 'uppercase' }}>2024 - 2025</span>
                  <h4 style={{ fontSize: '1.05rem', marginTop: '2px' }}>Freelance Web Developer</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Delivering production-grade frontend systems for global clients</p>
                </div>

                {/* Timeline Item 3 */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--text-muted)'
                  }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>2022 - 2026</span>
                  <h4 style={{ fontSize: '1.05rem', marginTop: '2px' }}>B.Tech in Computer Science & Engineering</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>Acquiring core knowledge in Distributed Computing and Systems Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: TIME ZONE CLOCK (col-span-1 row-span-1) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 1',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '180px'
            }}
          >
            <div style={{ color: 'var(--text-gray)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Clock size={18} style={{ color: 'var(--accent-purple)' }} />
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Local Time</span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ffffff', margin: '12px 0' }}>
              {time || '00:00:00 AM'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-gray)' }}>
              <MapPin size={12} style={{ color: 'var(--accent-pink)' }} /> India (UTC+5:30)
            </div>
          </motion.div>

          {/* CARD 6: CONNECT SOCIAL (col-span-1 row-span-1) */}
          <motion.div 
            className="glass-panel"
            variants={itemVariants}
            style={{
              gridColumn: 'span 1',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '180px'
            }}
          >
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-white)' }}>
              Let's Connect
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <TwitterIcon size={18} />
              </a>
              <a 
                href="mailto:contact@susheel.dev" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
