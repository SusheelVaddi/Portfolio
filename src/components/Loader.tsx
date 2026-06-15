import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const LOADING_STEPS = [
  "Initializing Kernel...",
  "Loading Color Palettes...",
  "Assembling Bento Cells...",
  "Injecting Glassmorphism...",
  "Compiling Experience Grid...",
  "Rendering Portfolio..."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Progress counter
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Increase progress randomly for a natural feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    // Dynamic text sequence mapping based on progress
    const calculatedIndex = Math.min(
      Math.floor((progress / 100) * LOADING_STEPS.length),
      LOADING_STEPS.length - 1
    );
    setStepIndex(calculatedIndex);

    if (progress === 100) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completionTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-wrapper"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          y: -100,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#000000',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-heading)'
        }}
      >
        {/* Glow overlay */}
        <div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'relative', width: '280px', textAlign: 'center', zIndex: 1 }}>
          {/* Logo / Brand Indicator */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '32px' }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              background: 'linear-gradient(135deg, #ffffff 40%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
            }}>
              SK.VS
            </div>
          </motion.div>

          {/* Percentage text */}
          <div style={{ 
            fontSize: '4.5rem', 
            fontWeight: 800, 
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '16px',
            fontVariantNumeric: 'tabular-nums'
          }}>
            {progress}%
          </div>

          {/* Progress bar container */}
          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '16px'
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)',
                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>

          {/* Status text logs */}
          <div style={{ height: '20px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-gray)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                {LOADING_STEPS[stepIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
