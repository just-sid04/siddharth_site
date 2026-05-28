import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CONTACT_LINKS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'siddharthbhamare@gmail.com',
    href: 'mailto:siddharthbhamare@gmail.com',
    color: '#4f8ef7',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/siddharthbhamare',
    href: 'https://linkedin.com/in/siddharthbhamare',
    color: '#9b59f5',
  },
  {
    icon: '⌨️',
    label: 'GitHub',
    value: 'github.com/siddharthbhamare',
    href: 'https://github.com/siddharthbhamare',
    color: '#00d4ff',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Portfolio Inquiry from ${formState.name}`;
    const body = encodeURIComponent(`Hi Siddharth,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.open(`mailto:siddharthbhamare@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <div
        className="orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(155, 89, 245, 0.15) 0%, transparent 70%)',
          bottom: '-200px',
          right: '-200px',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 142, 247, 0.12) 0%, transparent 70%)',
          top: '-100px',
          left: '-100px',
          animationDelay: '-3s',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #4f8ef7)' }} />
            <p className="section-label" style={{ margin: 0 }}>// Final Stop — Contact</p>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #9b59f5)' }} />
          </motion.div>

          <motion.h2
            className="font-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(28px, 5vw, 60px)',
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
            }}
          >
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            The ride doesn't end here. If you have an idea, an opportunity, or just want to talk tech —
            I'm always down for the next adventure.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Links */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Prefer a direct line? Reach out through any of these:
            </motion.p>

            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-5 no-underline group transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  style={{ border: `1px solid ${link.color}20` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${link.color}15` }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: link.color, fontFamily: 'JetBrains Mono, monospace' }}>
                      {link.label}
                    </p>
                    <p
                      className="text-sm font-medium group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <span
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: link.color }}
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bus stop sign */}
            <motion.div
              className="glass-card mt-8 p-5 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ border: '1px solid rgba(79, 142, 247, 0.15)' }}
            >
              <div className="text-3xl">🚌</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  End of the line — for now.
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  Thanks for taking this journey with me.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3
              className="font-semibold mb-6"
              style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px' }}
            >
              Send a Message ✉️
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Opening your email client...</p>
                <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Siddharth...', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'email@example.com', type: 'email' },
                ].map(field => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs mb-2"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '1px' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      required
                      value={formState[field.name]}
                      onChange={e => setFormState(prev => ({ ...prev, [field.name]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(79, 142, 247, 0.4)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(79, 142, 247, 0.08)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs mb-2"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '1px' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Hey Siddharth, I'd love to discuss..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(79, 142, 247, 0.4)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(79, 142, 247, 0.08)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center flex items-center gap-2 mt-2">
                  Send Message 🚀
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xs" style={{ color: 'rgba(200, 210, 240, 0.35)', fontFamily: 'JetBrains Mono, monospace' }}>
            Designed & Built by{' '}
            <span style={{ color: 'var(--accent-blue)' }}>Siddharth Bhamare</span>
            {' '}· {new Date().getFullYear()} · Made with ⚡ + React
          </p>
        </motion.div>
      </div>
    </section>
  );
}
