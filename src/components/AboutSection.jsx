import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STORY_CARDS = [
  {
    emoji: '🔍',
    title: 'The Curious Kid',
    text: 'It started with a simple question — "How does an app know who I am?" That curiosity led me down a rabbit hole of code, logic, and late-night debugging sessions.',
  },
  {
    emoji: '⚡',
    title: 'The Builder',
    text: 'I don\'t just learn concepts — I build things. From the first "Hello World" to a full-blown service-marketplace app with real-time systems and payment integration.',
  },
  {
    emoji: '🌍',
    title: 'The System Thinker',
    text: 'I think in flows — how users move, how data persists, how systems scale. Building ProConnect taught me that great software solves real human problems.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-container" ref={ref}>
      {/* Orb */}
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(155, 89, 245, 0.12) 0%, transparent 70%)',
          top: '10%',
          left: '-100px',
          animationDelay: '-2s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              // Stop 01 — About Me
            </motion.p>

            <motion.h2
              className="font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontFamily: 'Space Grotesk, sans-serif',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              Not just another{' '}
              <span className="gradient-text">developer.</span>
              <br />
              A problem-solver.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hey! I'm <strong style={{ color: 'var(--text-primary)' }}>Siddharth Bhamare</strong> — a software developer
              who believes in learning by doing. I specialize in building scalable, real-world applications
              that solve genuine user problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              My journey wasn't through bootcamps or structured courses alone — it was through
              building real apps, breaking things, fixing them, and shipping products that
              actually work. Every project taught me more than any textbook could.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="btn-primary flex items-center gap-2 no-underline text-sm"
                style={{ padding: '12px 28px' }}
              >
                📄 View Resume
              </a>
              <a href="#contact" className="btn-secondary no-underline text-sm" style={{ padding: '12px 28px' }}>
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right: Story Cards */}
          <div className="flex flex-col gap-4">
            {STORY_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 flex gap-4 items-start group hover:border-opacity-30 transition-all duration-300"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                whileHover={{ y: -4, borderColor: 'rgba(79, 142, 247, 0.25)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(79, 142, 247, 0.1)' }}
                >
                  {card.emoji}
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
