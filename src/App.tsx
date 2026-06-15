import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'; // import helper styles if needed
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Setup scroll animation reveals using IntersectionObserver
  useEffect(() => {
    if (loading) return;

    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Reveal once
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
      {/* Premium Loader screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ minHeight: '100vh', position: 'relative' }}
        >
          {/* Custom Trailing Cursor */}
          <CustomCursor />

          {/* Floating animated background spotlights */}
          <div className="mesh-bg">
            <div className="mesh-glow mesh-glow-1" />
            <div className="mesh-glow mesh-glow-2" />
            <div className="mesh-glow mesh-glow-3" />
          </div>

          {/* Floating Navigation Header */}
          <Navbar />

          {/* Page content blocks */}
          <main>
            {/* Hero Section */}
            <Hero />

            {/* About & Achievements Bento Grid Section */}
            <div className="reveal">
              <AboutBento />
            </div>

            {/* Skills Section */}
            <div className="reveal">
              <Skills />
            </div>

            {/* Projects Section */}
            <div className="reveal">
              <Projects />
            </div>

            {/* Contact Section */}
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
