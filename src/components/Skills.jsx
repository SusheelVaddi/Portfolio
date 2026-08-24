import { skillsData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical skills">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and domains I work with
          </p>
        </div>

        <div className="skills-single-card fade-in">
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
    </section>
  );
}
