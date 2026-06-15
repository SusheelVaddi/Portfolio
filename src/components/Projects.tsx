import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
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

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Hyperion AI Search Engine',
    description: 'An agentic AI engine combining structured NLP processing, semantic vector search indexes, and multi-agent retrieval to resolve user questions.',
    category: 'ai',
    tags: ['React', 'Node.js', 'LangChain', 'Pinecone', 'OpenAI'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Orion Telemetry Dashboard',
    description: 'A dashboard providing real-time telemetry tracking and analytics dashboards for IoT node architectures and cluster resource utilization.',
    category: 'fullstack',
    tags: ['TypeScript', 'Vite', 'Node.js', 'WebSockets', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 3,
    title: 'Aether IaC Compiler',
    description: 'A cloud deployment microservice compiler that parses application blueprints to provision secure, modular AWS structures automatically.',
    category: 'cloud',
    tags: ['Go', 'AWS Lambda', 'Terraform', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 4,
    title: 'Vapor WebGL Engine',
    description: 'A custom, modular, zero-dependency 2D canvas rendering engine designed for real-time mathematical animations in browsers.',
    category: 'fullstack',
    tags: ['TypeScript', 'WebGL', 'HTML5 Canvas', 'Vanilla CSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

const CATEGORIES = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ai', label: 'AI & ML' },
  { value: 'cloud', label: 'Cloud-Native' }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="projects" style={{ position: 'relative' }}>
      {/* Background neon spotlight */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container">
        
        {/* Section Heading */}
        <div className="projects-header">
          <div>
            <span style={{
              fontSize: '0.875rem',
              color: 'var(--accent-purple)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              display: 'block',
              marginBottom: '8px'
            }}>
              Showcase
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Interactive <span className="purple-blue-gradient-text">Projects</span>
            </h2>
          </div>

          {/* Filters */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '16px'
          }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  border: filter === cat.value ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: filter === cat.value ? 'rgba(168, 85, 247, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  color: filter === cat.value ? '#ffffff' : 'var(--text-gray)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div style={{ minHeight: '400px' }}>
          <motion.div 
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel interactive-card"
                  style={{
                    padding: '32px',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                >
                  {/* Spotglow background grid */}
                  <div className="grid-overlay" style={{ opacity: 0.15 }} />

                  {/* Card Spot Light Glow */}
                  <div style={{
                    position: 'absolute',
                    top: 'var(--mouse-y, 0px)',
                    left: 'var(--mouse-x, 0px)',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                    transition: 'opacity 0.2s',
                    zIndex: 0
                  }} />

                  <div style={{ zIndex: 1, position: 'relative' }}>
                    {/* Top row */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                      color: 'var(--accent-purple)'
                    }}>
                      <Code2 size={24} />
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="project-link"
                          style={{ color: 'var(--text-gray)', transition: 'color 0.2s' }}
                        >
                          <GithubIcon size={20} />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="project-link"
                          style={{ color: 'var(--text-gray)', transition: 'color 0.2s' }}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    flexWrap: 'wrap', 
                    zIndex: 1, 
                    position: 'relative',
                    marginTop: 'auto'
                  }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-gray)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Styles for responsive header layout and project hover anchors */}
      <style>{`
        .projects-header {
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .projects-header {
            flex-direction: row !important;
            align-items: flex-end !important;
          }
        }
        .project-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
