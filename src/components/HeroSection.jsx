import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WORDS = [
  'Full-Stack Developer',
  'Flutter Enthusiast',
  'Problem Solver',
  'Builder of Systems',
];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="typewriter-cursor" style={{ height: '1em' }} />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-container grid-bg"
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* Orbs */}
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(79, 142, 247, 0.18) 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(155, 89, 245, 0.15) 0%, transparent 70%)',
          bottom: '-150px',
          left: '-150px',
          animationDelay: '-4s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(79, 142, 247, 0.1)',
                border: '1px solid rgba(79, 142, 247, 0.2)',
                color: 'var(--accent-cyan)',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '2px',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              AVAILABLE FOR WORK
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(42px, 7vw, 88px)',
                color: 'var(--text-primary)',
                fontFamily: 'Space Grotesk, sans-serif',
                lineHeight: 1.05,
              }}
            >
              Hop On.
              <br />
              <span className="gradient-text">This is My</span>
              <br />
              Journey.
            </h1>
          </motion.div>

          {/* Subtitle with typewriter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-medium"
            style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
          >
            From Curiosity to Building Real-World Systems —{' '}
            <span className="block mt-1 text-lg">
              <Typewriter />
            </span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-6 py-2"
          >
            {[
              { value: '4+', label: 'Projects Built' },
              { value: '2+', label: 'Years Coding' },
              { value: '∞', label: 'Problems Solved' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-3xl font-black gradient-text"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a href="#about" className="btn-primary flex items-center gap-2">
              Start the Ride
              <span>🚌</span>
            </a>
            <a href="#projects" className="btn-secondary">
              See Projects
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-5 mt-2"
          >
            {[
              { href: 'https://github.com/siddharthbhamare', label: 'GitHub', icon: '⌨️' },
              { href: 'https://linkedin.com/in/siddharthbhamare', label: 'LinkedIn', icon: '💼' },
              { href: 'mailto:siddharthbhamare@gmail.com', label: 'Email', icon: '✉️' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 no-underline group"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span>{social.icon}</span>
                <span className="group-hover:text-white transition-colors">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating terminal-style card */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card absolute hidden lg:block"
          style={{
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '24px',
            minWidth: '300px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
            <span className="ml-2 text-xs opacity-40">siddharth.js</span>
          </div>
          <div style={{ color: 'rgba(200, 220, 255, 0.7)', lineHeight: 2 }}>
            <div><span style={{ color: '#9b59f5' }}>const</span> <span style={{ color: '#4f8ef7' }}>developer</span> = {'{'}</div>
            <div className="pl-4"><span style={{ color: '#00d4ff' }}>name</span>: <span style={{ color: '#a8d8a8' }}>"Siddharth Bhamare"</span>,</div>
            <div className="pl-4"><span style={{ color: '#00d4ff' }}>role</span>: <span style={{ color: '#a8d8a8' }}>"Full-Stack Dev"</span>,</div>
            <div className="pl-4"><span style={{ color: '#00d4ff' }}>passion</span>: <span style={{ color: '#a8d8a8' }}>"Building systems"</span>,</div>
            <div className="pl-4"><span style={{ color: '#00d4ff' }}>status</span>: <span style={{ color: '#6edd6e' }}>✓ open_to_work</span></div>
            <div>{'}'}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '2px' }}>
          SCROLL
        </span>
        <div
          className="w-6 h-10 rounded-full border flex items-start justify-center p-1.5"
          style={{ borderColor: 'rgba(79, 142, 247, 0.3)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--accent-blue)' }}
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
