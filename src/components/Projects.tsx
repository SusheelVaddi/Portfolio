import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Info, X } from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  longDesc: string;
  features: string[];
  architecture: string;
  tags: string[];
  github: string;
  demo: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'MediScan.AI',
    category: 'AI & Healthcare',
    desc: 'An intelligent medical assistant utilizing custom deep neural networks to process diagnostic scans and flag critical structural anomalies with high statistical accuracy.',
    longDesc: 'MediScan.AI is an advanced client-side web application designed to support medical professionals by accelerating diagnostic imaging analysis. It scans anatomical imagery (such as MRI and CT scans), maps key physiological features, and overlays dynamic bounding box heatmaps highlighting critical anomalies using modern computer vision models.',
    features: [
      'Autonomous neural network classifier built with Python, TensorFlow, and OpenCV',
      'Generates real-time anomaly overlays using dynamic canvas heatmap rendering',
      'Highly responsive client interface allowing instant file uploads and parsing',
      'Integrated patient dashboard mapping scans over historical records'
    ],
    architecture: 'Medical Scans (DICOM/PNG) -> Client Upload -> TensorFlow.js WebGL Engine -> Diagnostic Heatmap UI',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  },
  {
    title: '2D Graphics Editor',
    category: 'Computer Graphics',
    desc: 'A full-featured vector graphics layout canvas engineered in pure TypeScript. It supports drawing shapes, applying geometric translation/rotation matrices, and exporting SVG layers.',
    longDesc: 'A modern vector editing application running entirely in the client browser. Users can sketch vector shapes, modify paths, control layer stacks, drag elements dynamically, and apply coordinate transformation algorithms natively with absolute precision.',
    features: [
      'High-fidelity rendering using custom TypeScript and HTML5 Canvas context structures',
      'Robust linear algebra engine computing translation, scaling, and rotation affine matrices',
      'Multi-layer stacking system with active canvas event handlers',
      'Seamless vector schema exporting directly to clean SVG and high-res PNG formats'
    ],
    architecture: 'Canvas Render Loop -> Mouse Event Listener -> Affine Transformation Matrix -> Layer Serialization -> SVG Document',
    tags: ['TypeScript', 'HTML5 Canvas', 'CSS Grid', 'Webpack'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  },
  {
    title: 'Automatic Vacuum Cleaner',
    category: 'Internet of Things',
    desc: 'An autonomous cleaning robot designed for an Internet of Things course. Features collision avoidance logic via sonar sensors, dynamic pathfinding microcontrollers, and live telemetry tracking.',
    longDesc: 'An autonomous robot prototype engineered for real-time obstacle avoidance and spatial mapping. The system uses a mesh of sensors communicating with an onboard ESP32/Arduino microcontroller to run autonomous pathfinding scripts and feed coordinates to a telemetry dashboard.',
    features: [
      'Proximity-aware navigational routing using ultrasonic/sonar sensor interfaces',
      'Optimized state-machine routing script avoiding static walls and dynamic barriers',
      'Bi-directional MQTT communications transmitting live operational status and logs',
      'Low-power microcontroller power profile ensuring prolonged operational cycles'
    ],
    architecture: 'Sensor Array -> ESP32 Mainboard -> Pathfinding State Machine -> MQTT Broker -> Live Telemetry Server',
    tags: ['C++', 'Arduino', 'ESP32', 'IoT Sensors', 'Telemetry'],
    github: 'https://github.com/SusheelVaddi',
    demo: '#'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

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
                  color: 'var(--text-white)',
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
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-secondary)',
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

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary"
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <Info size={16} />
                  View Architecture
                </button>

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

      {/* Premium Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '640px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: 'var(--shadow-glass-hover)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-secondary)',
                  color: 'var(--text-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <X size={16} />
              </button>

              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--text-gray)',
                  letterSpacing: '0.15em',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {selectedProject.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-white)' }}>
                  {selectedProject.title}
                </h3>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--border-secondary)' }} />

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-white)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Project Overview
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-gray)' }}>
                  {selectedProject.longDesc}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-white)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Key Features & Metrics
                </h4>
                <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {selectedProject.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-white)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  System Architecture
                </h4>
                <div style={{
                  padding: '16px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-secondary)',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: 'var(--text-silver)',
                  overflowX: 'auto'
                }}>
                  {selectedProject.architecture}
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--border-secondary)', marginTop: '8px' }} />

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Source Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    textDecoration: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
