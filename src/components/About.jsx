import { aboutData, personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">About</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content fade-in">
          <div className="about-text">
            {aboutData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="skills-single-card" style={{ marginTop: "var(--space-xl)" }}>
            <ul className="skills-inline-list">
              <li className="skills-inline-item">
                <span className="skills-main-bullet" aria-hidden="true" />
                <div className="skills-inline-text">
                  <strong className="skills-category-name">University</strong>
                  <span className="skills-separator">: </span>
                  <span className="skills-items-text">{personalInfo.university.split(",")[0]}</span>
                </div>
              </li>
              <li className="skills-inline-item">
                <span className="skills-main-bullet" aria-hidden="true" />
                <div className="skills-inline-text">
                  <strong className="skills-category-name">Program</strong>
                  <span className="skills-separator">: </span>
                  <span className="skills-items-text">B.Tech AI &amp; DS</span>
                </div>
              </li>
              <li className="skills-inline-item">
                <span className="skills-main-bullet" aria-hidden="true" />
                <div className="skills-inline-text">
                  <strong className="skills-category-name">Location</strong>
                  <span className="skills-separator">: </span>
                  <span className="skills-items-text">Bengaluru</span>
                </div>
              </li>
              <li className="skills-inline-item">
                <span className="skills-main-bullet" aria-hidden="true" />
                <div className="skills-inline-text">
                  <strong className="skills-category-name">Focus</strong>
                  <span className="skills-separator">: </span>
                  <span className="skills-items-text">AI &amp; Data Science</span>
                </div>
              </li>
              <li className="skills-inline-item">
                <span className="skills-main-bullet" aria-hidden="true" />
                <div className="skills-inline-text">
                  <strong className="skills-category-name">Languages</strong>
                  <span className="skills-separator">: </span>
                  <span className="skills-items-text">English, Telugu, Kannada, Hindi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
