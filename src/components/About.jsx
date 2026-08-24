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
            <p>
              <strong>Languages:</strong> English · Telugu · Kannada · Hindi
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight-item">
              <div className="about-highlight-icon">🎓</div>
              <div className="about-highlight-label">University</div>
              <div className="about-highlight-value">{personalInfo.university.split(",")[0]}</div>
            </div>
            <div className="about-highlight-item">
              <div className="about-highlight-icon">📚</div>
              <div className="about-highlight-label">Program</div>
              <div className="about-highlight-value">B.Tech AI &amp; DS</div>
            </div>
            <div className="about-highlight-item">
              <div className="about-highlight-icon">📍</div>
              <div className="about-highlight-label">Location</div>
              <div className="about-highlight-value">Bengaluru</div>
            </div>
            <div className="about-highlight-item">
              <div className="about-highlight-icon">🔬</div>
              <div className="about-highlight-label">Focus</div>
              <div className="about-highlight-value">AI &amp; Data Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
