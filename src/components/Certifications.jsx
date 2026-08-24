import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications and activities">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Certifications &amp; Activities</h2>
          <p className="section-subtitle">
            Workshops, hackathons, and learning activities
          </p>
        </div>

        <div className="skills-single-card fade-in">
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
    </section>
  );
}
