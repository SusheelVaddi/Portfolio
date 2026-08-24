import { toolsData } from "../data/portfolioData";

export default function Tools() {
  const toolNames = toolsData.map((t) => t.name).join(", ");

  return (
    <section className="section" aria-label="Tools and technologies" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Tools</span>
          <h2 className="section-title">Tools &amp; Technologies</h2>
          <p className="section-subtitle">
            Development tools and platforms I use
          </p>
        </div>

        <div className="skills-single-card fade-in">
          <ul className="skills-inline-list">
            <li className="skills-inline-item">
              <span className="skills-main-bullet" aria-hidden="true" />
              <div className="skills-inline-text">
                <strong className="skills-category-name">Tools &amp; Technologies</strong>
                <span className="skills-separator">: </span>
                <span className="skills-items-text">{toolNames}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
