import { toolsData } from "../data/portfolioData";
import { ToolIcon } from "./Icons";

export default function Tools() {
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

        <div className="tools-grid fade-in">
          {toolsData.map((tool, i) => (
            <div key={i} className="tool-card">
              <div className="tool-icon">
                <ToolIcon icon={tool.icon} />
              </div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
