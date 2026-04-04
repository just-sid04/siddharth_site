import { motion, AnimatePresence } from 'framer-motion';

// ─── SKILL BAR ────────────────────────────────────────────────────
function SkillBar({ name, level, color = '#D97706' }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1C1210' }}>{name}</span>
        <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ background: '#E5D9C8', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

// ─── STOP CONTENTS ────────────────────────────────────────────────
const STOP_CONTENT = [
  // 0 — HERO
  () => (
    <div style={{ textAlign: 'center', padding: '8px 0' }}>
      <div style={{ fontSize: '56px', marginBottom: '8px' }}>🚌</div>
      <h1 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 900, color: '#1C1210', lineHeight: 1.2, marginBottom: '10px' }}>
        Hop On —<br />
        <span style={{ color: '#D97706' }}>This is My Journey.</span>
      </h1>
      <p style={{ fontSize: '14px', color: '#7C5741', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto 14px' }}>
        From curiosity to building real-world systems. I'm Siddharth Bhamare — full-stack developer.
        Your driver today on this journey through my story.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {[['3+', 'Projects'], ['2+', 'Years Coding'], ['∞', 'Problems Solved']].map(([v, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#D97706' }}>{v}</div>
            <div style={{ fontSize: '11px', color: '#7C5741' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  // 1 — ABOUT
  () => (
    <div>
      <div style={{ display: 'grid', gap: '10px' }}>
        {[
          { e: '🔍', t: 'The Curious Kid', d: 'It started with "How does an app know who I am?" — a simple question that dragged me into code, logic, and late-night debugging.' },
          { e: '⚡', t: 'The Builder',      d: 'I learn by shipping. From my first app to ProConnect — a full service marketplace with real-time systems, payments, and multi-user flows.' },
          { e: '🧠', t: 'The System Thinker', d: 'I think in flows: how users move, how data persists, how things scale. Every bug taught me something no tutorial could.' },
        ].map(({ e, t, d }) => (
          <div key={t} style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            background: '#FEF9F0', borderRadius: '12px', padding: '12px',
            border: '1px solid #FDE68A',
          }}>
            <span style={{ fontSize: '22px', flexShrink: 0 }}>{e}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '13px', color: '#1C1210', marginBottom: '3px' }}>{t}</div>
              <div style={{ fontSize: '12px', color: '#7C5741', lineHeight: 1.6 }}>{d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // 2 — SKILLS
  () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
      {[
        { label: '🎨 Frontend', skills: [['Flutter/Dart',88],['React.js',78],['HTML/CSS',85]] },
        { label: '⚙️ Backend',  skills: [['Supabase',90],['Node.js',72],['REST APIs',82]] },
        { label: '🗄️ Database', skills: [['PostgreSQL',78],['Firebase',70],['Supabase DB',85]] },
        { label: '🛠️ Tools',    skills: [['Git/GitHub',88],['Razorpay API',80],['Figma',70]] },
      ].map(({ label, skills }) => (
        <div key={label} style={{
          background: '#FEF9F0', borderRadius: '12px',
          padding: '12px', border: '1px solid #FDE68A',
        }}>
          <div style={{ fontWeight: 800, fontSize: '12px', color: '#92400E', marginBottom: '10px' }}>{label}</div>
          {skills.map(([name, level]) => <SkillBar key={name} name={name} level={level} />)}
        </div>
      ))}
    </div>
  ),

  // 3 — PROJECTS
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* ProConnect Featured */}
      <div style={{
        background: 'linear-gradient(135deg,#FEF9F0,#FEF3C7)',
        borderRadius: '16px', padding: '16px',
        border: '2px solid #FCD34D',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '28px' }}>🔗</span>
          <div>
            <div style={{ fontWeight: 900, fontSize: '18px', color: '#1C1210' }}>ProConnect</div>
            <div style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>Service Marketplace Platform ⭐ FEATURED</div>
          </div>
          <a href="https://github.com/siddharthbhamare/proconnect" target="_blank" rel="noreferrer"
             style={{ marginLeft: 'auto', background: '#1C1210', color: 'white', borderRadius: '8px',
                      padding: '6px 12px', fontSize: '12px', fontWeight: 700, textDecoration: 'none' }}>
            GitHub ↗
          </a>
        </div>
        <p style={{ fontSize: '12px', color: '#7C5741', lineHeight: 1.6, marginBottom: '10px' }}>
          Full-featured service marketplace connecting customers with providers. Real-time booking,
          in-app flows, Razorpay payments, RLS-secured Supabase backend, multi-role auth.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
          {['Flutter','Supabase','PostgreSQL','Razorpay','Dart','Realtime'].map(t => (
            <span key={t} style={{ background: '#FEF3C7', border: '1px solid #FDE68A',
                                    borderRadius: '99px', padding: '2px 10px', fontSize: '11px',
                                    color: '#92400E', fontWeight: 700 }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[['2','User Roles'],['15+','Screens'],['Realtime','Architecture'],['✓','Production']].map(([v,l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 900, color: '#D97706' }}>{v}</div>
              <div style={{ fontSize: '10px', color: '#7C5741' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* This portfolio */}
      <div style={{ background: '#FEF9F0', borderRadius: '12px', padding: '12px', border: '1px solid #FDE68A' }}>
        <div style={{ fontWeight: 800, fontSize: '14px', color: '#1C1210', marginBottom: '4px' }}>🚌 This Portfolio</div>
        <div style={{ fontSize: '11px', color: '#D97706', marginBottom: '6px' }}>React · Framer Motion · Tailwind CSS</div>
        <p style={{ fontSize: '12px', color: '#7C5741', lineHeight: 1.5 }}>
          An immersive bus-journey storytelling portfolio — animated driver, moving scenery, stop-based navigation.
        </p>
      </div>
    </div>
  ),

  // 4 — EXPERIENCE
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {[
        { icon: '🚀', period: '2023–2024', title: 'Foundations', desc: 'HTML/CSS, JS, Git, REST APIs. Built static pages then dynamic apps. Fell in love with problem-solving.', tags: ['HTML/CSS','JavaScript','Git','APIs'] },
        { icon: '📱', period: '2024–Now',  title: 'Flutter & Mobile', desc: 'Multi-screen apps, state management (GetX, Riverpod), external API integration, reactive UI.', tags: ['Flutter','Dart','GetX','Riverpod'] },
        { icon: '🗄️', period: '2024–Now',  title: 'Backend & Systems', desc: 'Supabase, PostgreSQL, real-time subscriptions, RLS, Razorpay payment pipelines, cloud storage.', tags: ['Supabase','PostgreSQL','Razorpay','RLS'] },
        { icon: '🔮', period: 'Next',      title: 'What\'s Coming', desc: 'Exploring AI integration, serverless, DevOps. The journey\'s far from over!', tags: ['AI/ML','Cloud','DevOps'] },
      ].map(({ icon, period, title, desc, tags }) => (
        <div key={title} style={{
          display: 'flex', gap: '10px',
          background: '#FEF9F0', borderRadius: '12px',
          padding: '10px', border: '1px solid #FDE68A',
        }}>
          <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontWeight: 800, fontSize: '13px', color: '#1C1210' }}>{title}</span>
              <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>{period}</span>
            </div>
            <p style={{ fontSize: '11px', color: '#7C5741', lineHeight: 1.5, marginBottom: '6px' }}>{desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {tags.map(t => (
                <span key={t} style={{ background: '#FEF3C7', border: '1px solid #FDE68A',
                                        borderRadius: '99px', padding: '1px 8px', fontSize: '10px',
                                        color: '#92400E', fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),

  // 5 — CONTACT
  () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '44px', marginBottom: '8px' }}>🎉</div>
      <h2 style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 900, color: '#1C1210', marginBottom: '8px' }}>
        Let's Build Something <span style={{ color: '#D97706' }}>Together!</span>
      </h2>
      <p style={{ fontSize: '13px', color: '#7C5741', marginBottom: '18px', lineHeight: 1.6 }}>
        The journey ends here — but the next adventure is just one message away.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '360px', margin: '0 auto' }}>
        {[
          { icon: '✉️', label: 'Email', value: 'siddharthbhamare@gmail.com', href: 'mailto:siddharthbhamare@gmail.com' },
          { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/siddharthbhamare', href: 'https://linkedin.com/in/siddharthbhamare' },
          { icon: '⌨️', label: 'GitHub',   value: 'github.com/siddharthbhamare', href: 'https://github.com/siddharthbhamare' },
        ].map(({ icon, label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
             style={{
               display: 'flex', alignItems: 'center', gap: '12px',
               background: '#FEF9F0', border: '1px solid #FDE68A',
               borderRadius: '12px', padding: '12px 16px', textDecoration: 'none',
               transition: 'transform 0.2s',
             }}>
            <span style={{ fontSize: '20px' }}>{icon}</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>{label}</div>
              <div style={{ fontSize: '12px', color: '#1C1210', fontWeight: 600 }}>{value}</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#D97706', fontWeight: 700 }}>→</span>
          </a>
        ))}
      </div>
      <p style={{ fontSize: '11px', color: '#A07855', marginTop: '16px' }}>
        Built with ⚡ React + Framer Motion by Siddharth Bhamare · {new Date().getFullYear()}
      </p>
    </div>
  ),
];

// ─── SPEECH BUBBLE ────────────────────────────────────────────────
function SpeechBubble({ text }) {
  return (
    <div
      className="bubble-float"
      style={{
        background: 'white',
        border: '2px solid #FCD34D',
        borderRadius: '16px',
        padding: '10px 16px',
        position: 'relative',
        boxShadow: '0 4px 16px rgba(76,36,8,0.12)',
        maxWidth: '360px',
        margin: '0 auto 10px',
      }}
    >
      <div style={{ fontSize: '12px', color: '#7C5741', lineHeight: 1.6, fontStyle: 'italic', fontWeight: 600 }}>
        💬 &ldquo;{text}&rdquo;
      </div>
      {/* Tail */}
      <div style={{
        position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)',
        width: 0, height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '12px solid #FCD34D',
      }} />
    </div>
  );
}

// ─── MAIN CONTENT PANEL ───────────────────────────────────────────
export default function ContentPanel({ stop, phase, onNext, isLast }) {
  const ContentComp = STOP_CONTENT[stop.index];
  return (
    <AnimatePresence mode="wait">
      {phase === 'stopped' && (
        <motion.div
          key={`stop-${stop.index}`}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {/* Speech bubble */}
          <SpeechBubble text={stop.driverSpeech} />

          {/* Content card */}
          <div
            className="content-card stop-scroll"
            style={{ flex: 1, padding: '14px', overflowY: 'auto', minHeight: 0 }}
          >
            {/* Stop name badge */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <div style={{
                background: '#FEF3C7', border: '1px solid #FCD34D',
                borderRadius: '8px', padding: '4px 12px',
                fontSize: '11px', fontWeight: 800, color: '#92400E',
                fontFamily: 'monospace', letterSpacing: '1px',
              }}>
                📍 {stop.stopName}
              </div>
              {/* Next stop button */}
              <button
                onClick={onNext}
                style={{
                  background: isLast
                    ? 'linear-gradient(135deg,#D97706,#F59E0B)'
                    : 'linear-gradient(135deg,#1D4ED8,#3B82F6)',
                  color: 'white', border: 'none', borderRadius: '10px',
                  padding: '8px 18px', fontSize: '13px', fontWeight: 800,
                  cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'; }}
                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.2)'; }}
              >
                {isLast ? '🎉 End Journey' : 'Next Stop →'}
              </button>
            </div>

            {/* Section content */}
            <ContentComp />
          </div>
        </motion.div>
      )}

      {/* DRIVING / TRANSITIONING STATE */}
      {phase !== 'stopped' && (
        <motion.div
          key="driving-msg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '100%', flexDirection: 'column', gap: '10px',
          }}
        >
          <div style={{ fontSize: '36px', animation: 'driver-bob 0.7s ease-in-out infinite' }}>🚌</div>
          <p style={{
            fontSize: '14px', fontWeight: 700, color: '#7C5741',
            fontStyle: 'italic',
          }}>
            {phase === 'departing' ? 'Next stop loading...' :
             phase === 'arriving'  ? 'Almost there!' : 'Hang on, we\'re moving!'}
          </p>
          {/* Bouncing dots */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#D97706',
                animation: `driver-bob 0.7s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
