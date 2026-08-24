import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import CareerGoals from "./components/CareerGoals";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function useScrollReveal() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Make everything visible immediately
      document.querySelectorAll(".fade-in").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Tools />
        <Projects />
        <Certifications />
        <CareerGoals />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
