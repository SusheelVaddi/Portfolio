import { personalInfo } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for opportunities, collaborations, or just to say hello
          </p>
        </div>

        <div className="contact-wrapper fade-in">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>{personalInfo.name}</h3>

            <div className="contact-item">
              <div className="contact-item-icon">
                <EmailIcon size={16} />
              </div>
              <div className="contact-item-text">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <EmailIcon size={16} />
              </div>
              <div className="contact-item-text">
                <a href={`mailto:${personalInfo.collegeEmail}`}>{personalInfo.collegeEmail}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <PhoneIcon size={16} />
              </div>
              <div className="contact-item-text">
                <a href={`tel:+91${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="contact-social-links">
              <a href={`mailto:${personalInfo.email}`} aria-label="Email me">
                <EmailIcon />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
