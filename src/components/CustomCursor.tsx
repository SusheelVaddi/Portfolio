import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Use refs for mouse positions to avoid unnecessary component rerenders
  const mouseRef = useRef({ x: 0, y: 0 });
  const outlinePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor in CSS on desktop - already done in body CSS,
    // but we start hidden to avoid cursor popping before mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup interactive elements listeners
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive-card, .skills-card'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Initialize list of hovered elements
    addHoverListeners();

    // Re-bind listeners on DOM changes (e.g. dynamic tabs, modal opens)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Custom animation loop for trailing effect (linear interpolation)
    let animationFrameId: number;
    const render = () => {
      const ease = 0.12; // Lower value = more delay/spring
      
      // Update dot position instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }

      // Smoothly interpolate outline position towards target mouse position
      outlinePosRef.current.x += (mouseRef.current.x - outlinePosRef.current.x) * ease;
      outlinePosRef.current.y += (mouseRef.current.y - outlinePosRef.current.y) * ease;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePosRef.current.x}px, ${outlinePosRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Small dot tracking mouse position */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          ...(isHovered && {
            width: '4px',
            height: '4px',
            backgroundColor: '#a855f7'
          })
        }}
      />
      {/* Outer elastic ring tracking with delay */}
      <div
        ref={outlineRef}
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: '40px',
          height: '40px',
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0)',
          ...(isHovered && {
            width: '60px',
            height: '60px',
            borderColor: 'rgba(168, 85, 247, 0.8)',
            backgroundColor: 'rgba(168, 85, 247, 0.05)',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
          })
        }}
      />
    </>
  );
}
