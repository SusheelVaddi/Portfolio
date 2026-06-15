import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap } from 'lucide-react';

export default function Achievements() {
  const timelineData = [
    {
      icon: GraduationCap,
      title: 'Engineering Student Journey',
      subtitle: 'REVA University, Bangalore',
      description: 'Pursuing a B.Tech in Computer Science & Engineering, specializing in Artificial Intelligence & Data Science (AI & DS). Acquiring core fundamentals in systems development, mathematical modeling, and distributed computing architectures.',
      date: '2025 - Present'
    },
    {
      icon: Award,
      title: 'Wadhwani Ignite Program',
      subtitle: 'Venture & Ideation Incubator',
      description: 'Successfully completed the 42-hour Ignite Full coursework in June 2026, gaining specialized skills in startup ideation, venture business modeling, and financial planning.',
      date: '2026'
    },
    {
      icon: ShieldCheck,
      title: 'Hackathons & Technical Workshops',
      subtitle: 'Competitions & Certifications',
      description: 'Active participant in competitive development tracks, including:\n• Team Vibranium Core - Xcelerate 24hr Hackathon (NIKSHATRA E-Summit 2025, BIT Bangalore)\n• BugBash debugging competitor (Aayam 2025, Newton School of Technology)\n• Full-Stack Spring Boot developer training (REVA University CSE Club)\n• Certified AI Workshop graduate (CertMeter, Nov 2025)',
      date: '2025 - Present'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="achievements" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ marginBottom: '60px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Milestones
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            My <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
          {/* Vertical Track Line */}
          <div style={{
            position: 'absolute',
            left: '31px',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: 'var(--border-secondary)'
          }} />

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
          >
            {timelineData.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    position: 'relative',
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Timeline circular node marker */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-pure)',
                    border: '2px solid var(--border-glass-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-white)',
                    zIndex: 2,
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-glass)'
                  }}>
                    <Icon size={22} />
                  </div>

                  {/* Timeline card details */}
                  <div 
                    className="glass-panel" 
                    style={{
                      flexGrow: 1,
                      padding: '30px'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-white)' }}>
                          {item.title}
                        </h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>
                          {item.subtitle}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-secondary)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        color: 'var(--text-silver)',
                        textTransform: 'uppercase'
                      }}>
                        {item.date}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '0.925rem',
                      lineHeight: 1.6,
                      color: 'var(--text-gray)',
                      whiteSpace: 'pre-line'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
