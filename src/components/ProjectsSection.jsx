import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: 'proconnect',
    featured: true,
    emoji: '🔗',
    title: 'ProConnect',
    tagline: 'Service Marketplace Platform',
    description:
      'A full-featured service marketplace connecting customers with service providers. Built with real-time booking, in-app chat, multi-role authentication, Razorpay payment integration, and a scalable backend on Supabase.',
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'Razorpay', 'Dart', 'Realtime'],
    highlights: [
      'Multi-user flows (Customer + Provider)',
      'Real-time booking & chat system',
      'Razorpay payment integration',
      'Row-Level Security (RLS) policies',
      'Scalable cloud backend',
    ],
    github: 'https://github.com/siddharthbhamare/proconnect',
    color: '#4f8ef7',
    gradient: 'linear-gradient(135deg, rgba(79, 142, 247, 0.15), rgba(155, 89, 245, 0.08))',
  },
  {
    id: 'portfolio',
    featured: false,
    emoji: '🚌',
    title: 'This Portfolio',
    tagline: 'Journey-Themed Personal Portfolio',
    description:
      'An interactive portfolio built with React + Framer Motion, featuring a "bus journey" metaphor, custom cursor, animated bus-route navigation, and scroll-triggered reveals.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    highlights: [
      'Custom scroll-based storytelling',
      'Animated bus-route navigation',
      'Glassmorphism + dark futuristic UI',
      'Custom cursor & micro-animations',
    ],
    github: 'https://github.com/siddharthbhamare/portfolio',
    color: '#9b59f5',
    gradient: 'linear-gradient(135deg, rgba(155, 89, 245, 0.15), rgba(0, 212, 255, 0.08))',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          top: '0',
          left: '0',
          animationDelay: '-1s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            // Stop 03 — Projects
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
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </motion.h2>
        </div>

        {/* Featured Project — ProConnect */}
        <motion.div
          className="project-card glass-card mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ background: PROJECTS[0].gradient, border: '1px solid rgba(79, 142, 247, 0.2)' }}
        >
          <div className="p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'rgba(79, 142, 247, 0.15)' }}
                >
                  {PROJECTS[0].emoji}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="text-2xl font-black"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {PROJECTS[0].title}
                    </h3>
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: 'rgba(79, 142, 247, 0.2)', color: '#4f8ef7', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      ⭐ FEATURED
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--accent-cyan)' }}>{PROJECTS[0].tagline}</p>
                </div>
              </div>

              <a
                href={PROJECTS[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 no-underline text-sm"
                style={{ padding: '10px 22px' }}
              >
                <span>⌨️</span> GitHub
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {PROJECTS[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].stack.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs mb-3 uppercase tracking-widest"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Key Features
                </p>
                <ul className="flex flex-col gap-2">
                  {PROJECTS[0].highlights.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: 'rgba(79, 142, 247, 0.2)', color: '#4f8ef7' }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Built With Numbers */}
            <div
              className="mt-8 pt-6 flex flex-wrap gap-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {[
                { value: '2', label: 'User Roles' },
                { value: '15+', label: 'Screens Built' },
                { value: 'Realtime', label: 'Architecture' },
                { value: '100%', label: 'Production Ready' },
              ].map(stat => (
                <div key={stat.label}>
                  <div
                    className="text-xl font-black gradient-text"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Portfolio card (this site) */}
          <motion.div
            className="project-card glass-card p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ background: PROJECTS[1].gradient, border: '1px solid rgba(155, 89, 245, 0.2)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'rgba(155, 89, 245, 0.1)' }}
              >
                {PROJECTS[1].emoji}
              </div>
              <a
                href={PROJECTS[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs no-underline px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(155, 89, 245, 0.1)', color: '#9b59f5', border: '1px solid rgba(155, 89, 245, 0.2)' }}
              >
                ⌨️ Source
              </a>
            </div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
              {PROJECTS[1].title}
            </h3>
            <p className="text-xs mb-4" style={{ color: 'var(--accent-cyan)' }}>{PROJECTS[1].tagline}</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {PROJECTS[1].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {PROJECTS[1].stack.map(tech => (
                <span key={tech} className="tech-tag" style={{ color: '#9b59f5', borderColor: 'rgba(155, 89, 245, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Coming soon card */}
          <motion.div
            className="glass-card p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ border: '1px dashed rgba(255,255,255,0.1)', minHeight: '200px' }}
          >
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
              Next Stop Loading...
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Something exciting is being built. Stay tuned for the next project.
            </p>
            <div
              className="mt-4 text-xs px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--text-secondary)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              coming_soon.exe
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
