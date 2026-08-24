import { heroData, personalInfo } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-content fade-in">
          <p className="hero-greeting">{heroData.greeting}</p>
          <h1 className="hero-name">
            {heroData.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="accent">{heroData.name.split(" ").pop()}</span>
          </h1>
          <p className="hero-subtitle">{heroData.subtitle}</p>
          <p className="hero-intro">{heroData.introduction}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="https://github.com/SusheelVaddi">
              <GitHubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="https://www.linkedin.com/in/susheel-kumar-vs-a7a20a3b2">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" title={personalInfo.email}>
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
