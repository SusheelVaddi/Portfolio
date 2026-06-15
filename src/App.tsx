import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Setup reveal elements transition listener
  useEffect(() => {
    if (loading) return;

    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ minHeight: '100vh', position: 'relative' }}
        >
          {/* Custom Monochrome Trailing Cursor */}
          <CustomCursor />

          {/* Canvas particle background */}
          <ParticleBackground />

          {/* Soft floating blurred shapes for premium layout depth */}
          <div className="bg-glow-shape glow-shape-1" />
          <div className="bg-glow-shape glow-shape-2" />

          {/* Floating Navigation Header */}
          <Navbar />

          <main>
            {/* Hero Section */}
            <Hero />

            {/* About Cards Section */}
            <div className="reveal">
              <About />
            </div>

            {/* Skills Grid Section */}
            <div className="reveal">
              <Skills />
            </div>

            {/* Projects Showcase Section */}
            <div className="reveal">
              <Projects />
            </div>

            {/* Achievements Timeline Section */}
            <div className="reveal">
              <Achievements />
            </div>

            {/* Contact Form Section */}
            <div className="reveal">
              <Contact />
            </div>
          </main>

          {/* Footer Section */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
