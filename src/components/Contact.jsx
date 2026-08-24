import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: show confirmation
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-submit">
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
