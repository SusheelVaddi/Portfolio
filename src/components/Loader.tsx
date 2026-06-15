import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const LOADING_STEPS = [
  "Initializing Kernel...",
  "Loading Monochrome Palettes...",
  "Creating Grid Array...",
  "Compiling System Blueprints...",
  "Synchronizing Nodes...",
  "Completing Sequence..."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const calculatedIndex = Math.min(
      Math.floor((progress / 100) * LOADING_STEPS.length),
      LOADING_STEPS.length - 1
    );
    setStepIndex(calculatedIndex);

    if (progress === 100) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 600);
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
          y: -50,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
        <div style={{ position: 'relative', width: '280px', textAlign: 'center', zIndex: 1 }}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '32px' }}
          >
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: '#ffffff'
            }}>
              SK.VS
            </div>
          </motion.div>

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

          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1px',
            overflow: 'hidden',
            marginBottom: '16px'
          }}>
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#ffffff'
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>

          <div style={{ height: '20px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                style={{
                  fontSize: '0.85rem',
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
