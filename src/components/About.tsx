import { motion } from 'framer-motion';
import { Cpu, Lightbulb, GraduationCap, Flame } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: Cpu,
      title: 'AI & Systems',
      description: 'Passionate about engineering intelligent systems. Focus areas include agentic NLP networks, machine learning algorithms, and compiler fundamentals.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Dedicated to translating abstract problems into modular, clean, and well-tested codebases. I build with performance and scalability in mind.'
    },
    {
      icon: Flame,
      title: 'Entrepreneurship',
      description: 'Participant in the Wadhwani Ignite startup program. I love analyzing market viability, building MVPs, and understanding product-market fits.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'B.Tech student actively learning new tech paradigms. Transitioning smoothly from low-level systems in C to advanced JavaScript/Python pipelines.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ marginBottom: '50px', textAlign: 'left' }}>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-white)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            Identity
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Intro description */}
        <div style={{
          maxWidth: '800px',
          fontSize: '1.15rem',
          lineHeight: 1.8,
          color: 'var(--text-silver)',
          marginBottom: '48px'
        }}>
          I'm <span style={{ color: '#ffffff', fontWeight: 600 }}>Susheel Kumar VS</span>, an engineering student, software developer, and AI enthusiast. I merge mathematical modeling with modern full-stack development to build clean, minimalist software products that solve actual real-world challenges.
        </div>

        {/* Card Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={idx}
                className="glass-panel"
                variants={itemVariants}
                style={{
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  minHeight: '260px',
                  backgroundColor: 'rgba(10, 10, 10, 0.4)',
                  borderColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Icon wrapper */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)'
                }}>
                  <Icon size={20} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{card.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-gray)', lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
