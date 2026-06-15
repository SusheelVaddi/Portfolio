import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseRef = useRef({ x: 0, y: 0 });
  const outlinePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
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

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive-card, .skills-card'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let animationFrameId: number;
    const render = () => {
      const ease = 0.14;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }

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
      {/* Inner dot */}
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
          mixBlendMode: 'difference',
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.2s, height 0.2s',
          ...(isHovered && {
            width: '4px',
            height: '4px'
          })
        }}
      />
      {/* Outer ring */}
      <div
        ref={outlineRef}
        style={{
          position: 'fixed',
          top: -16,
          left: -16,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          ...(isHovered && {
            width: '48px',
            height: '48px',
            borderColor: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          })
        }}
      />
    </>
  );
}
