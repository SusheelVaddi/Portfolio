import { projectsData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Academic and personal projects I have built
          </p>
        </div>

        <div className="projects-list">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card fade-in">
              <div className="project-header">
                <span className="project-domain">{project.domain}</span>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Features (if available) */}
              {project.features && (
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  <h4 className="project-section-title">Key Features</h4>
                  <div className="project-tags">
                    {project.features.map((f, i) => (
                      <span key={i} className="project-tag">{f}</span>
                    ))}
                  </div>
                </div>
              )}

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
