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
          <ul className="skills-main-list">
            {skillsData.map((category, i) => (
              <li key={i} className="skills-category-item">
                <div className="skills-category-header">
                  <span className="skills-main-bullet" aria-hidden="true" />
                  <h3 className="skills-category-title">{category.category}</h3>
                </div>
                <ul className="skills-sub-list">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="skills-sub-item">
                      <span className="skills-dash">-</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
