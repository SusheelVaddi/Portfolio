import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-content">
        <span className="footer-name">{personalInfo.name}</span>
        <p className="footer-text">
          B.Tech AI &amp; Data Science · REVA University, Bengaluru
        </p>
        <div className="footer-links">
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="footer-text">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
