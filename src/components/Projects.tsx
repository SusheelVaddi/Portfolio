import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'MediScan.AI',
    category: 'AI & Healthcare',
    desc: 'An intelligent medical assistant utilizing custom deep neural networks to process diagnostic scans and flag critical structural anomalies with high statistical accuracy.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  },
  {
    title: '2D Graphics Editor',
    category: 'Computer Graphics',
    desc: 'A full-featured vector graphics layout canvas engineered in pure TypeScript. It supports drawing shapes, applying geometric translation/rotation matrices, and exporting SVG layers.',
    tags: ['TypeScript', 'HTML5 Canvas', 'CSS Grid', 'Webpack'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  },
  {
    title: 'Automatic Vacuum Cleaner',
    category: 'Internet of Things',
    desc: 'An autonomous cleaning robot designed for an Internet of Things course. Features collision avoidance logic via sonar sensors, dynamic pathfinding microcontrollers, and live telemetry tracking.',
    tags: ['C++', 'Arduino', 'ESP32', 'IoT Sensors', 'Telemetry'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="projects" style={{ position: 'relative' }}>
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
            Portfolio
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={index}
              className="glass-panel"
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px',
                padding: '40px',
                backgroundColor: 'rgba(10, 10, 10, 0.45)',
                borderColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background grids */}
              <div className="grid-overlay" style={{ opacity: 0.1 }} />

              {/* Info Column (Left 8 columns on desktop) */}
              <div className="project-info-col">
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--text-gray)',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  {project.category}
                </span>

                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '16px'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--text-gray)',
                  marginBottom: '24px'
                }}>
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        color: 'var(--text-silver)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Column (Right 4 columns on desktop) */}
              <div className="project-actions-col">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Code size={16} />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Responsive media overrides */}
      <style>{`
        .project-info-col {
          grid-column: span 12 !important;
        }
        .project-actions-col {
          grid-column: span 12 !important;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          align-items: stretch;
        }
        @media (min-width: 992px) {
          .project-info-col {
            grid-column: span 8 !important;
          }
          .project-actions-col {
            grid-column: span 4 !important;
            margin-top: 0 !important;
            padding-left: 24px;
          }
        }
      `}</style>
    </section>
  );
}
