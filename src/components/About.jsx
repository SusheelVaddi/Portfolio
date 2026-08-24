import { aboutData } from "../data/portfolioData";

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
        </div>
      </div>
    </section>
  );
}
