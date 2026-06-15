import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Cloud, Cpu } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'frontend',
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Framer Motion', level: 80 },
      { name: 'TailwindCSS', level: 90 }
    ]
  },
  {
    category: 'backend',
    title: 'Backend & DBs',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 85 },
      { name: 'GraphQL', level: 75 }
    ]
  },
  {
    category: 'devops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS Cloud', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'Vercel / Netlify', level: 88 },
      { name: 'Linux Commands', level: 80 }
    ]
  },
  {
    category: 'fundamentals',
    title: 'Core Fundamentals',
    icon: Cpu,
    skills: [
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms (DSA)', level: 82 },
      { name: 'REST APIs', level: 92 },
      { name: 'System Design', level: 75 },
      { name: 'SQL Querying', level: 85 },
      { name: 'OOP Concepts', level: 90 }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = SKILLS_DATA.find((item) => item.category === activeTab);

  return (
    <section id="skills" style={{ position: 'relative' }}>
      {/* Visual background elements */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
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
            color: 'var(--accent-blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Competencies
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Technical <span className="purple-blue-gradient-text">Skillset</span>
          </h2>
        </div>

        {/* Categories Tab Selector */}
        <div style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '32px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {SKILLS_DATA.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.category;

            return (
              <button
                key={item.category}
                onClick={() => setActiveTab(item.category)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '14px',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.08)' : 'rgba(10, 8, 20, 0.45)',
                  color: isActive ? '#ffffff' : 'var(--text-gray)',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                <Icon size={18} style={{ color: isActive ? 'var(--accent-blue)' : 'var(--text-gray)' }} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Skills List Container */}
        <div style={{ minHeight: '260px' }}>
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '20px'
                }}
              >
                {activeCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel skills-card"
                    style={{
                      padding: '24px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Glowing mesh grid behind card */}
                    <div className="grid-overlay" style={{ opacity: 0.2 }} />

                    {/* Skill Info */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px'
                    }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-purple) 100%)',
                          borderRadius: '3px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
