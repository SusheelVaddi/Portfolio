import { skillsData, toolsData } from "../data/portfolioData";

export default function SkillsAndTools() {
  return (
    <section id="skills" className="section" aria-label="Skills and Tools">
      <div className="container">
        <div className="side-by-side-grid">
          {/* Technical Skills Column */}
          <div className="side-col fade-in">
            <div className="section-header left-aligned">
              <span className="section-label">Skills</span>
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">
                Technologies and domains I work with
              </p>
            </div>

            <div className="skills-single-card" style={{ width: "100%", maxWidth: "100%", margin: 0, height: "100%" }}>
              <ul className="skills-inline-list">
                {skillsData.map((category, i) => (
                  <li key={i} className="skills-inline-item">
                    <span className="skills-main-bullet" aria-hidden="true" />
                    <div className="skills-inline-text">
                      <strong className="skills-category-name">{category.category}</strong>
                      <span className="skills-separator">: </span>
                      <span className="skills-items-text">{category.skills.join(", ")}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Technologies Column */}
          <div className="side-col fade-in">
            <div className="section-header left-aligned">
              <span className="section-label">Tools</span>
              <h2 className="section-title">Tools &amp; Technologies</h2>
              <p className="section-subtitle">
                Development tools and platforms I use
              </p>
            </div>

            <div className="skills-single-card" style={{ width: "100%", maxWidth: "100%", margin: 0, height: "100%" }}>
              <ul className="skills-inline-list">
                {toolsData.map((tool, i) => (
                  <li key={i} className="skills-inline-item">
                    <span className="skills-main-bullet" aria-hidden="true" />
                    <div className="skills-inline-text">
                      <strong className="skills-category-name">{tool.name}</strong>
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
