import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            My educational background from school to university
          </p>
        </div>

        <div className="education-timeline fade-in">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`education-item ${item.current ? "current" : ""}`}
            >
              <div className="education-card">
                <h3 className="education-institution">{item.institution}</h3>
                <p className="education-location">📍 {item.location}</p>
                <p className="education-detail">{item.education}</p>
                <div className="education-meta">
                  <span className="education-badge">{item.duration}</span>
                  {item.board && (
                    <span className="education-badge">{item.board}</span>
                  )}
                  {item.current && (
                    <span className="education-badge current-badge">
                      {item.detail}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
