import { skillsData } from "../data/portfolioData";
import { SkillCategoryIcon } from "./Icons";

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

        <div className="skills-grid fade-in">
          {skillsData.map((category, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-icon">
                <SkillCategoryIcon icon={category.icon} />
              </div>
              <h3 className="skill-card-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
