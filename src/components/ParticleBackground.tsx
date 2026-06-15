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

interface OrbitingWord {
  text: string;
  orbitRadiusX: number;
  orbitRadiusY: number;
  orbitAngle: number;
  orbitSpeed: number;
  spinAngle: number;
  spinSpeed: number;
  size: number;
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
    let orbitingWords: OrbitingWord[] = [];
    const maxCursorParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
      initOrbitingWords();
    };

    const initColumns = () => {
      backgroundColumns = [];
      const colWidth = 220; // horizontal separation
      const numCols = Math.ceil(window.innerWidth / colWidth);

      for (let i = 0; i < numCols; i++) {
        const speed = Math.random() * 0.4 + 0.15; // slow ambient drift
        const x = i * colWidth + Math.random() * 50;
        const y = Math.random() * window.innerHeight;
        
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

    const initOrbitingWords = () => {
      orbitingWords = [];
      const spaceWords = [
        'C Language',
        'Python',
        'React',
        'AI Tools',
        'Java',
        'GitHub',
        'TypeScript',
        'Arduino',
        'IoT',
        'CSS3',
        'Git',
        '01'
      ];

      spaceWords.forEach((word, idx) => {
        // Distribute orbit sizes to create a layered "planet ring" effect
        const orbitRadiusX = window.innerWidth * 0.3 + idx * 22;
        const orbitRadiusY = window.innerHeight * 0.25 + idx * 12;
        
        // Very slow orbiting speeds
        const orbitSpeed = (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1);
        const spinSpeed = (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1);

        orbitingWords.push({
          text: word,
          orbitRadiusX,
          orbitRadiusY,
          orbitAngle: (idx / spaceWords.length) * Math.PI * 2,
          orbitSpeed,
          spinAngle: Math.random() * Math.PI * 2,
          spinSpeed,
          size: Math.floor(Math.random() * 8) + 16 // font size 16px to 24px
        });
      });
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
        
        if (col.y > window.innerHeight) {
          col.y = -200;
          col.snippets = col.snippets.map(() => CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
        }

        col.snippets.forEach((snippet, idx) => {
          const snippetY = col.y + idx * 40;
          if (snippetY < -30 || snippetY > window.innerHeight + 30) return;

          const activeOpacity = isLight ? col.opacity * 0.55 : col.opacity * 0.75;
          ctx.fillStyle = isLight
            ? `rgba(0, 0, 0, ${activeOpacity})`
            : `rgba(255, 255, 255, ${activeOpacity})`;

          ctx.fillText(snippet, col.x, snippetY);
        });
      });

      // 2. Render 3D Space-Lost Orbiting Code Languages
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      orbitingWords.forEach((word) => {
        word.orbitAngle += word.orbitSpeed;
        word.spinAngle += word.spinSpeed;

        const cos = Math.cos(word.orbitAngle);
        const sin = Math.sin(word.orbitAngle);

        const px = centerX + cos * word.orbitRadiusX;
        // Tilt the orbital plane to create an angled galactic look
        const py = centerY + sin * word.orbitRadiusY * 0.35 + cos * 40;

        // Use the sin value as a depth coordinate to scale size and opacity
        const scale = (sin + 1.5) / 2.5; // range 0.2 to 1.0
        
        const baseOpacity = isLight ? 0.08 : 0.12;
        const opacity = scale * baseOpacity;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(word.spinAngle);

        ctx.font = `800 ${Math.floor(word.size * scale)}px var(--font-heading)`;
        ctx.fillStyle = isLight
          ? `rgba(0, 0, 0, ${opacity})`
          : `rgba(255, 255, 255, ${opacity})`;

        ctx.fillText(word.text, 0, 0);
        ctx.restore();
      });

      // Reset baseline alignment for standard renders
      ctx.textBaseline = 'alphabetic';

      // 3. Render Interactive Cursor Spawns
      ctx.textAlign = 'left';
      cursorParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.008;

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
