import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap } from 'lucide-react';

export default function Achievements() {
  const timelineData = [
    {
      icon: GraduationCap,
      title: 'Engineering Student Journey',
      subtitle: 'B.Tech in Computer Science',
      description: 'Acquiring core expertise in distributed architectures, mathematical logic, compilers, operating systems, and object-oriented paradigms.',
      date: '2022 - 2026'
    },
    {
      icon: Award,
      title: 'Wadhwani Ignite Program',
      subtitle: 'Entrepreneurship & Venture Development',
      description: 'Participated in core business incubator modules, learning how to validate product market fit, create minimal viable structures, and build pitches.',
      date: '2024 - 2025'
    },
    {
      icon: ShieldCheck,
      title: 'Certifications & Workshops',
      subtitle: 'Cloud & AI Competitions',
      description: 'AWS Certified Cloud Practitioner. Actively competing in national hackathons and completing specialized workshops in Deep Learning and LLM prompting pipelines.',
      date: '2023 - Present'
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
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
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
                    backgroundColor: '#000000',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-white)',
                    zIndex: 2,
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(0,0,0,0.9)'
                  }}>
                    <Icon size={22} />
                  </div>

                  {/* Timeline card details */}
                  <div 
                    className="glass-panel" 
                    style={{
                      flexGrow: 1,
                      padding: '30px',
                      backgroundColor: 'rgba(10, 10, 10, 0.45)',
                      borderColor: 'rgba(255, 255, 255, 0.06)'
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
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                          {item.title}
                        </h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 500 }}>
                          {item.subtitle}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
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
                      color: 'var(--text-gray)'
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
