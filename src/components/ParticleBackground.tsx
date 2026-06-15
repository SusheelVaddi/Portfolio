import { useEffect, useRef } from 'react';

interface CursorParticle {
  x: number;
  y: number;
  text: string;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

interface CodeColumn {
  x: number;
  y: number;
  speed: number;
  snippets: string[];
  opacity: number;
}

const CODE_SNIPPETS = [
  '#include <stdio.h>',
  'int main() { printf("Hello SK"); }',
  'import tensorflow as tf',
  'def train_model(epochs=100):',
  'const [theme, setTheme] = useState()',
  '<html><head><title>Portfolio</title>',
  'body { background: var(--bg-pure); }',
  'public class Main { public static void }',
  'git commit -m "feat: matrix-bg"',
  'git push origin main',
  'await fetch("https://api.mediscan.ai")',
  'const ctx = canvas.getContext("2d")',
  'npm run dev',
  'pip install opencv-python',
  'analogRead(A0);',
  'export default function App()',
  '01010101100110',
  'matrix.override = true;',
  'System.out.println("SK.VS");',
  'class CustomCursor extends Component',
  'useContext(ThemeContext)'
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
    let cursorParticles: CursorParticle[] = [];
    let backgroundColumns: CodeColumn[] = [];
    const maxCursorParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      backgroundColumns = [];
      const colWidth = 220; // horizontal separation
      const numCols = Math.ceil(window.innerWidth / colWidth);

      for (let i = 0; i < numCols; i++) {
        const speed = Math.random() * 0.4 + 0.15; // slow ambient drift
        const x = i * colWidth + Math.random() * 50;
        const y = Math.random() * window.innerHeight;
        
        // Create initial snippet stack for each column
        const snippets: string[] = [];
        for (let j = 0; j < 10; j++) {
          snippets.push(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
        }

        backgroundColumns.push({
          x,
          y,
          speed,
          snippets,
          opacity: Math.random() * 0.04 + 0.02 // very faint ambient overlay
        });
      }
    };

    const spawnCursorParticle = (x: number, y: number) => {
      if (cursorParticles.length >= maxCursorParticles) {
        cursorParticles.shift();
      }
      const randomWord = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      cursorParticles.push({
        x,
        y,
        text: randomWord,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 1.2 - 0.4, // float upwards
        alpha: 1.0,
        size: Math.floor(Math.random() * 4) + 12
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // 1. Render Background Ambient Code Streams
      ctx.font = '500 11px monospace';
      ctx.textAlign = 'left';

      backgroundColumns.forEach((col) => {
        col.y += col.speed;
        
        // Wrap columns when they reach the bottom
        if (col.y > window.innerHeight) {
          col.y = -200;
          col.snippets = col.snippets.map(() => CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
        }

        col.snippets.forEach((snippet, idx) => {
          const snippetY = col.y + idx * 40; // vertical separation
          if (snippetY < -30 || snippetY > window.innerHeight + 30) return;

          const activeOpacity = isLight ? col.opacity * 0.55 : col.opacity * 0.75;
          ctx.fillStyle = isLight
            ? `rgba(0, 0, 0, ${activeOpacity})`
            : `rgba(255, 255, 255, ${activeOpacity})`;

          ctx.fillText(snippet, col.x, snippetY);
        });
      });

      // 2. Render Interactive Cursor Spawns
      ctx.textAlign = 'left';
      cursorParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.008; // fade-out

        if (p.alpha <= 0) return;

        ctx.font = `800 ${p.size}px monospace`;
        
        const baseAlpha = isLight ? 0.25 : 0.35;
        ctx.fillStyle = isLight
          ? `rgba(0, 0, 0, ${p.alpha * baseAlpha})`
          : `rgba(255, 255, 255, ${p.alpha * baseAlpha})`;

        ctx.fillText(p.text, p.x, p.y);
      });

      cursorParticles = cursorParticles.filter((p) => p.alpha > 0);

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 35) {
        spawnCursorParticle(e.clientX, e.clientY);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

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
