import { useState, useEffect, useCallback, useRef } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";

const THEMES = [
  { key: "light", icon: "☀️", label: "Light" },
  { key: "dark", icon: "🌙", label: "Dark" },
  { key: "system", icon: "💻", label: "System" },
];

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.setAttribute("data-theme", resolved);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  // Apply theme on mount and change
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Listen for system theme changes when "system" is selected
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  // Close theme dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectTheme = (key) => {
    setTheme(key);
    setThemeMenuOpen(false);
  };

  const currentThemeObj = THEMES.find((t) => t.key === theme);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((l) => document.getElementById(l.id));
    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPos) {
        setActiveSection(navLinks[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, "home")}>
            {personalInfo.name}
          </a>

          <div className="navbar-right">
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme dropdown */}
            <div className="theme-dropdown" ref={themeRef}>
              <button
                className="theme-toggle"
                onClick={() => setThemeMenuOpen((v) => !v)}
                aria-label="Change theme"
                aria-expanded={themeMenuOpen}
                aria-haspopup="true"
              >
                {currentThemeObj.icon}
              </button>

              {themeMenuOpen && (
                <div className="theme-menu" role="menu">
                  {THEMES.map((t) => (
                    <button
                      key={t.key}
                      className={`theme-menu-item ${theme === t.key ? "active" : ""}`}
                      onClick={() => selectTheme(t.key)}
                      role="menuitem"
                    >
                      <span className="theme-menu-icon">{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className={`navbar-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
