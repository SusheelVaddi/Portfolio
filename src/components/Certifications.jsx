import { certificationsData } from "../data/portfolioData";
import { AwardIcon } from "./Icons";

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

        <div className="certifications-grid fade-in">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-icon">
                <AwardIcon />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.detail && <p className="cert-detail">{cert.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
