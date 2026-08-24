import { languagesData } from "../data/portfolioData";

export default function Languages() {
  return (
    <section className="section" aria-label="Languages" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Languages</span>
          <h2 className="section-title">Languages</h2>
        </div>

        <div className="languages-grid fade-in">
          {languagesData.map((lang, i) => (
            <div key={i} className="language-card">
              <h3 className="language-name">{lang.language}</h3>
              <div className="language-abilities">
                {lang.abilities.map((a, j) => (
                  <span key={j} className="language-ability">
                    {a}
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
