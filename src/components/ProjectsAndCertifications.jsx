import { projectsData, certificationsData } from "../data/portfolioData";

export default function ProjectsAndCertifications() {
  return (
    <section id="projects" className="section" aria-label="Projects and Certifications">
      <div className="container">
        <div className="side-by-side-grid">
          {/* Projects Column */}
          <div className="side-col fade-in">
            <div className="section-header left-aligned">
              <span className="section-label">Projects</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Academic and personal projects I have built
              </p>
            </div>

            <div className="skills-single-card" style={{ width: "100%", maxWidth: "100%", margin: 0, height: "100%" }}>
              <div className="projects-combined-list">
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    className="project-item"
                    style={
                      index > 0
                        ? {
                            marginTop: "var(--space-lg)",
                            paddingTop: "var(--space-lg)",
                            borderTop: "1px solid var(--color-border-light)",
                          }
                        : {}
                    }
                  >
                    <div className="project-header" style={{ marginBottom: "var(--space-xs)" }}>
                      <span className="project-domain">{project.domain}</span>
                      <h3 className="project-name" style={{ fontSize: "1.1rem" }}>{project.name}</h3>
                    </div>
                    <p className="project-description" style={{ fontSize: "0.9rem", marginBottom: 0, lineHeight: "1.6" }}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div id="certifications" className="side-col fade-in">
            <div className="section-header left-aligned">
              <span className="section-label">Certifications</span>
              <h2 className="section-title">Certifications &amp; Activities</h2>
              <p className="section-subtitle">
                Workshops, hackathons, and learning activities
              </p>
            </div>

            <div className="skills-single-card" style={{ width: "100%", maxWidth: "100%", margin: 0, height: "100%" }}>
              <ul className="skills-inline-list">
                {certificationsData.map((cert) => (
                  <li key={cert.id} className="skills-inline-item">
                    <span className="skills-main-bullet" aria-hidden="true" />
                    <div className="skills-inline-text">
                      <strong className="skills-category-name">{cert.title}</strong>
                      <span className="skills-separator">: </span>
                      <span className="skills-items-text">
                        {cert.issuer}
                        {cert.detail ? ` (${cert.detail})` : ""}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
