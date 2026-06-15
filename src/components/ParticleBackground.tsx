import { useEffect, useRef } from 'react';

interface TextParticle {
  x: number;
  y: number;
  text: string;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

const TECH_WORDS = [
  'C',
  'Python',
  'HTML',
  'CSS',
  'Java',
  'Git',
  'GitHub',
  'AI Tools',
  '01',
  'IoT',
  'TypeScript',
  'MediScan',
  'React',
  'Canvas',
  'Matrix'
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: TextParticle[] = [];
    const maxParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnParticle = (x: number, y: number) => {
      if (particles.length >= maxParticles) {
        particles.shift();
      }
      const randomWord = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
      particles.push({
        x,
        y,
        text: randomWord,
        vx: (Math.random() - 0.5) * 1.0,
        vy: -Math.random() * 1.5 - 0.4, // drift upward
        alpha: 1.0,
        size: Math.floor(Math.random() * 6) + 12 // size between 12px and 18px
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check current theme explicitly from HTML data attribute
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.007; // smooth fade-out rate

        if (p.alpha <= 0) return;

        ctx.font = `800 ${p.size}px var(--font-heading)`;
        
        // Base alpha configuration to prevent visual clutter
        const baseAlpha = isLight ? 0.15 : 0.2;
        ctx.fillStyle = isLight
          ? `rgba(0, 0, 0, ${p.alpha * baseAlpha})`
          : `rgba(255, 255, 255, ${p.alpha * baseAlpha})`;

        ctx.fillText(p.text, p.x, p.y);
      });

      // Filter out faded particles
      particles = particles.filter((p) => p.alpha > 0);

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Spawn new word only if cursor moved more than 20 pixels
      if (dist > 20) {
        spawnParticle(e.clientX, e.clientY);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    // Pre-populate with initial drifting particles for visual depth on load
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        text: TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.1,
        alpha: Math.random() * 0.7 + 0.2,
        size: Math.floor(Math.random() * 6) + 11
      });
    }

    // Attach listeners directly to the window context
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: 'transparent'
      }}
    />
  );
}
