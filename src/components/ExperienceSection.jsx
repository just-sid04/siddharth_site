import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LEARNING_STOPS = [
  {
    icon: '🚀',
    period: '2023 — 2024',
    title: 'Foundations & First Apps',
    description:
      'Started with web fundamentals. Built static pages, then dynamic apps. Fell in love with problem-solving through code. Learned Git, APIs, and the magic of async functions.',
    tags: ['HTML/CSS', 'JavaScript', 'Git', 'REST APIs'],
    color: '#4f8ef7',
  },
  {
    icon: '📱',
    period: '2024 — Present',
    title: 'Going Mobile — Flutter',
    description:
      'Picked up Flutter and immediately saw its power. Built multi-screen apps, integrated external APIs, learned state management patterns (GetX, Riverpod), and understood reactive UI design.',
    tags: ['Flutter', 'Dart', 'GetX', 'Riverpod'],
    color: '#9b59f5',
  },
  {
    icon: '🗄️',
    period: '2024 — Present',
    title: 'Backend & Real-World Systems',
    description:
      'Discovered Supabase and PostgreSQL. Built real-time systems with Row-Level Security, multi-user auth flows, payment integration with Razorpay, and production-grade storage pipelines.',
    tags: ['Supabase', 'PostgreSQL', 'RLS', 'Razorpay'],
    color: '#00d4ff',
  },
  {
    icon: '🔮',
    period: 'Future',
    title: 'What\'s Next',
    description:
      'Currently exploring AI integration, serverless architectures, and scalable microservice patterns. The journey is far from over — this is just one stop on a longer road.',
    tags: ['AI/ML', 'DevOps', 'Microservices', 'Cloud'],
    color: '#f7c948',
    future: true,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <div
        className="orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(247, 201, 72, 0.08) 0%, transparent 70%)',
          top: '20%',
          right: '-100px',
          animationDelay: '-5s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            // Stop 04 — Experience & Learning
          </motion.p>
          <motion.h2
            className="font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}
          >
            Learning by{' '}
            <span className="gradient-text">Building</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            No formal work experience yet — but every project was a sprint, every bug was a lesson,
            and every shipped feature was a win.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #4f8ef7, #9b59f5, transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {LEARNING_STOPS.map((stop, i) => (
              <motion.div
                key={stop.title}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: `${stop.color}18`,
                    border: `2px solid ${stop.color}40`,
                    top: '8px',
                  }}
                >
                  {stop.icon}
                </div>

                <div
                  className="glass-card p-6"
                  style={{
                    border: `1px solid ${stop.color}20`,
                    opacity: stop.future ? 0.75 : 1,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="font-semibold text-lg"
                        style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {stop.title}
                      </h3>
                      <span
                        className="text-xs"
                        style={{ color: stop.color, fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {stop.period}
                      </span>
                    </div>
                    {stop.future && (
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(247, 201, 72, 0.1)',
                          color: '#f7c948',
                          border: '1px solid rgba(247, 201, 72, 0.2)',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        🔮 Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {stop.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {stop.tags.map(tag => (
                      <span
                        key={tag}
                        className="tech-tag"
                        style={{ color: stop.color, borderColor: `${stop.color}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy box */}
        <motion.div
          className="glass-card mt-10 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ border: '1px solid rgba(79, 142, 247, 0.15)' }}
        >
          <div className="text-3xl mb-3">💡</div>
          <blockquote
            className="text-lg font-medium italic"
            style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            "I don't wait to learn before I build. I build to learn."
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            — The principle behind every project I've shipped
          </p>
        </motion.div>
      </div>
    </section>
  );
}
