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
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.features && project.features.length > 0 && (
                <div className="project-tags">
                  {project.features.map((feature, i) => (
                    <span key={i} className="project-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              )}

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
