import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: '#4f8ef7',
    skills: [
      { name: 'Flutter / Dart', level: 88 },
      { name: 'React.js', level: 78 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#9b59f5',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Supabase', level: 90 },
      { name: 'REST APIs', level: 82 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    label: 'Database & Storage',
    icon: '🗄️',
    color: '#00d4ff',
    skills: [
      { name: 'PostgreSQL', level: 78 },
      { name: 'Firebase', level: 70 },
      { name: 'Supabase Storage', level: 85 },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: '#f7c948',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Razorpay API', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
        <span
          className="text-xs font-mono"
          style={{ color, fontFamily: 'JetBrains Mono, monospace' }}
        >
          {level}%
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: '6px', background: 'rgba(255,255,255,0.07)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 142, 247, 0.1) 0%, transparent 70%)',
          bottom: '0',
          right: '-100px',
          animationDelay: '-3s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            // Stop 02 — Skills
          </motion.p>
          <motion.h2
            className="font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}
          >
            My Tech <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Each bar represents hours of hands-on building — not just tutorials.
          </motion.p>
        </div>

        {/* Grid of skill categories */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}18` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {cat.label}
                  </h3>
                  <div className="w-8 h-0.5 mt-1 rounded-full" style={{ background: cat.color }} />
                </div>
              </div>

              {cat.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={cat.color} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Extra tech pills */}
        <motion.div
          className="mt-10 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {['Dart', 'Python', 'Tailwind CSS', 'Framer Motion', 'Riverpod', 'GetX', 'Realtime Subscriptions'].map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
