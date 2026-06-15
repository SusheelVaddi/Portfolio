import { motion } from 'framer-motion';
import { Terminal, Shield, FileCode, Edit2, Coffee, GitBranch, Cpu, Trophy, Compass, Film, Gamepad2, Moon } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const SKILLS_LIST = [
  {
    name: 'C Language',
    icon: Terminal,
    desc: 'Systems programming, memory management, algorithms.'
  },
  {
    name: 'Python',
    icon: Shield,
    desc: 'Data analysis, ML integration, automated scripts.'
  },
  {
    name: 'HTML5',
    icon: FileCode,
    desc: 'Semantic web formatting, standard tags, DOM outlines.'
  },
  {
    name: 'CSS3',
    icon: Edit2,
    desc: 'Responsive layout designs, flex/grid logic, custom variables.'
  },
  {
    name: 'Java',
    icon: Coffee,
    desc: 'Object-oriented programming, enterprise structures, JVM environments.'
  },
  {
    name: 'Git',
    icon: GitBranch,
    desc: 'Local version control, commit trees, branches alignment.'
  },
  {
    name: 'GitHub',
    icon: GithubIcon,
    desc: 'Cloud code distribution, repo configurations, actions pipeline.'
  },
  {
    name: 'AI Tools',
    icon: Cpu,
    desc: 'Agent models, developer systems integration, advanced prompting.'
  }
];

const PERSONAL_SKILLS_LIST = [
  {
    name: 'Cricket',
    icon: Trophy,
    desc: 'Passionate about active team sports, cricket strategy, and matches.'
  },
  {
    name: 'Travelling',
    icon: Compass,
    desc: 'Exploring new destinations, local cultures, and outdoor geography.'
  },
  {
    name: 'Watching Movies & Series',
    icon: Film,
    desc: 'Appreciating cinematography, creative storytelling, and video production.'
  },
  {
    name: 'Playing Games',
    icon: Gamepad2,
    desc: 'Enjoys competitive e-sports, logical gaming, and strategic mechanics.'
  },
  {
    name: 'Sleeping',
    icon: Moon,
    desc: 'Valuing quality rest and health recovery to maintain developer concentration.'
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ marginBottom: '50px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Abilities
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS_LIST.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="glass-panel skills-card"
                variants={itemVariants}
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                {/* Clean, monochrome icon wrap */}
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)',
                  flexShrink: 0
                }}>
                  <Icon size={18} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-white)' }}>
                    {skill.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Personal Interests Heading */}
        <div style={{ marginTop: '68px', marginBottom: '40px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Lifestyle
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Personal <span className="gradient-text">Interests</span>
          </h2>
        </div>

        {/* Personal Skills Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PERSONAL_SKILLS_LIST.map((interest) => {
            const Icon = interest.icon;

            return (
              <motion.div
                key={interest.name}
                className="glass-panel skills-card"
                variants={itemVariants}
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)',
                  flexShrink: 0
                }}>
                  <Icon size={18} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-white)' }}>
                    {interest.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                    {interest.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
