import { learningData } from "../data/portfolioData";

export default function Learning() {
  return (
    <section id="learning" className="section" aria-label="Currently learning">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Learning</span>
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            Technologies and topics I am actively studying
          </p>
        </div>

        <div className="learning-grid fade-in">
          {learningData.map((item, i) => (
            <div key={i} className="learning-item">
              <span className="learning-dot" aria-hidden="true" />
              <span className="learning-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
