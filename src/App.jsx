import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

/* ─── DATA ───────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    num: '_01.',
    name: 'ProConnect',
    desc: 'Full-featured service marketplace connecting customers with providers. Real-time booking, in-app chat, payments, and reviews.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Realtime'],
    github: 'https://github.com/just-sid04/proconnect-app',
    live: null,
    featured: true,
  },
  {
    num: '_02.',
    name: 'Finance Tracker',
    desc: 'Personal finance management app with charts, budget categories, and expense insights.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/just-sid04/bill-split',
    live: null,
  },
  {
    num: '_03.',
    name: 'Portfolio v1',
    desc: 'First portfolio site. Scroll-based dark design with terminal animations.',
    tags: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/just-sid04/Portfolio',
    live: null,
  },
];

const FRONTEND_SKILLS = [
  { name:'Flutter',    bg:'#0553B1', emoji:'🐦' },
  { name:'Dart',       bg:'#00B4AB', emoji:'🎯' },
  { name:'React',      bg:'#222',    emoji:'⚛️' },
  { name:'JavaScript', bg:'#F7DF1E', emoji:'JS', dark:true },
  { name:'HTML/CSS',   bg:'#E34F26', emoji:'🌐' },
];
const BACKEND_SKILLS = [
  { name:'Supabase',   bg:'#3ECF8E', emoji:'⚡', dark:true },
  { name:'Node.js',    bg:'#339933', emoji:'🟢' },
  { name:'Firebase',   bg:'#FFCA28', emoji:'🔥', dark:true },
  { name:'PostgreSQL', bg:'#4169E1', emoji:'🐘' },
  { name:'REST APIs',  bg:'#555',    emoji:'🔌' },
];
const TOOL_SKILLS = [
  { name:'Git',        bg:'#F05032', emoji:'🌿' },
  { name:'VS Code',    bg:'#007ACC', emoji:'💻' },
  { name:'Figma',      bg:'#A259FF', emoji:'🎨' },
  { name:'Android Studio', bg:'#3DDC84', emoji:'📱', dark:true },
  { name:'Postman',    bg:'#FF6C37', emoji:'📮' },
];

const LANGUAGE_SKILLS = [
  { name:'C',          bg:'#A8B9CC', emoji:'©️', dark:true },
  { name:'C++',        bg:'#00599C', emoji:'➕' },
  { name:'Java',       bg:'#007396', emoji:'☕' },
  { name:'Python',     bg:'#3776AB', emoji:'🐍' },
];

/* ─── PRELOADER ──────────────────────────────────────────────────── */
function Preloader({ onComplete }) {
  const name = "SIDDHARTH";
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // Show curtain after name is fully visible
    const timer = setTimeout(() => setShowCurtain(true), 2400);
    // Complete preloader after curtain has covered the screen
    const completeTimer = setTimeout(onComplete, 3200);
    return () => { clearTimeout(timer); clearTimeout(completeTimer); };
  }, [onComplete]);
  
  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <div className="preloader-content">
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      {/* Green curtain slide up animation */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div 
            className="preloader-curtain"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.77, 0, 0.175, 1] 
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── PARTICLES ──────────────────────────────────────────────────── */
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dots = [];
    const resize = () => { canvas.width=innerWidth; canvas.height=innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i=0;i<80;i++) dots.push({
      x:Math.random()*innerWidth, y:Math.random()*innerHeight,
      vx:(Math.random()-.5)*.18, vy:(Math.random()-.5)*.18,
      r: Math.random()*1.2+.3, a:Math.random()*.7+.15,
    });
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      dots.forEach(d=>{
        d.x+=d.vx; d.y+=d.vy;
        if(d.x<0) d.x=canvas.width; if(d.x>canvas.width) d.x=0;
        if(d.y<0) d.y=canvas.height; if(d.y>canvas.height) d.y=0;
        ctx.beginPath();
        ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${d.a})`;
        ctx.fill();
      });
      raf=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize',resize); };
  },[]);
  return <canvas ref={canvasRef} className="particle-canvas"/>;
}

/* ─── CURSOR ─────────────────────────────────────────────────────── */
function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({x:0,y:0});
  const tgt  = useRef({x:0,y:0});
  useEffect(()=>{
    const move = e=>{ tgt.current={x:e.clientX,y:e.clientY}; if(dot.current){ dot.current.style.left=e.clientX+'px'; dot.current.style.top=e.clientY+'px'; } };
    window.addEventListener('mousemove',move);
    const els = document.querySelectorAll('a,button,.project-item,.btn-hire,.skill-item');
    const over=()=>ring.current?.classList.add('hovering');
    const out =()=>ring.current?.classList.remove('hovering');
    els.forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out); });
    let raf;
    const lerp=(a,b,n)=>a+(b-a)*n;
    const animate=()=>{
      pos.current.x=lerp(pos.current.x,tgt.current.x,.12);
      pos.current.y=lerp(pos.current.y,tgt.current.y,.12);
      if(ring.current){ ring.current.style.left=pos.current.x+'px'; ring.current.style.top=pos.current.y+'px'; }
      raf=requestAnimationFrame(animate);
    };
    animate();
    return ()=>{ window.removeEventListener('mousemove',move); cancelAnimationFrame(raf); };
  },[]);
  return (<><div className="cursor-dot" ref={dot}/><div className="cursor-ring" ref={ring}/></>);
}

/* ─── SCROLL PROGRESS ────────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(()=>{
    const h=()=>{
      const el=document.documentElement;
      setPct(((el.scrollTop||document.body.scrollTop)/(el.scrollHeight-el.clientHeight))*100);
    };
    window.addEventListener('scroll',h);
    return ()=>window.removeEventListener('scroll',h);
  },[]);
  return <div className="scroll-progress" style={{height:`${pct}%`}}/>;
}

/* ─── REVEAL HOOK ────────────────────────────────────────────────── */
function useReveal(loading) {
  useEffect(()=>{
    if (loading) return; 
    
    // Small delay to ensure DOM is ready after state change
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(entries=>{
        entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
      },{ threshold:0.05 });
      els.forEach(el=>io.observe(el));
      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  },[loading]);
}

/* ─── NAV DRAWER ─────────────────────────────────────────────────── */
function NavDrawer({ open, onClose }) {
  return (
    <div className={`nav-drawer${open?' open':''}`}>
      <button className="drawer-close" onClick={onClose} aria-label="Close menu">✕</button>
      <div className="drawer-cols">
        <div>
          <div className="drawer-col-label">Social</div>
          <a href="https://github.com/just-sid04" target="_blank" rel="noopener" className="drawer-social-link">Github</a>
          <a href="https://www.linkedin.com/in/sidhart9689/" target="_blank" rel="noopener" className="drawer-social-link">LinkedIn</a>
          <a href="mailto:siddharthbhamare04@gmail.com" className="drawer-social-link">Email</a>
        </div>
        <div>
          <div className="drawer-col-label">Menu</div>
          {[
            {label:'Home',      color:'#FFD700', href:'#hero'},
            {label:'About Me',  color:'#60A5FA', href:'#about'},
            {label:'Skills',    color:'#00E676', href:'#skills'},
            {label:'Projects',  color:'#A78BFA', href:'#projects'},
            {label:'Contact',   color:'#F87171', href:'#contact'},
          ].map(({label,color,href})=>(
            <a key={label} href={href} className="drawer-menu-link" onClick={onClose}>
              <span className="drawer-dot" style={{background:color}}/>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="drawer-contact-label">Get in touch</div>
        <a href="mailto:siddharthbhamare04@gmail.com" className="drawer-contact-email">
          siddharthbhamare04@gmail.com
        </a>
      </div>
    </div>
  );
}

/* ─── SKILL ITEM ─────────────────────────────────────────────────── */
function SkillBadge({ name, bg, emoji, dark }) {
  return (
    <div className="skill-item">
      <div className="skill-icon" style={{background:bg, color: dark?'#000':'#fff'}}>
        <span style={{fontSize:'13px'}}>{emoji}</span>
      </div>
      {name}
    </div>
  );
}

/* ─── APP ────────────────────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal(loading);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <Particles/>
          <Cursor/>
          <ScrollProgress/>

          {/* Email sidebar */}
          <div className="sidebar-email">
            <a href="mailto:siddharthbhamare04@gmail.com"
              style={{color:'inherit',textDecoration:'none',letterSpacing:'2px'}}>
              siddharthbhamare04@gmail.com
            </a>
          </div>

          {/* Hamburger */}
          <button className={`menu-btn${menuOpen?' open':''}`} onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu">
            <span/><span/><span/>
          </button>

          {/* Drawer */}
          <NavDrawer open={menuOpen} onClose={()=>setMenuOpen(false)}/>

          {/* ── HERO ───────────────────────────────────────── */}
          <section id="hero" className="hero">
            <div className="hero-content">
              <h1 className="hero-title reveal">
                <span className="green">FULL STACK</span>
                <span className="white">DEVELOPER</span>
              </h1>
              <p className="hero-subtitle reveal" style={{transitionDelay:'0.15s'}}>
                Hi! I'm <strong>Siddharth</strong>. A passionate Full Stack developer
                building high-performance, scalable web and mobile applications with modern technologies.
              </p>
              <a href="#contact" className="btn-hire reveal" style={{transitionDelay:'0.25s'}}>HIRE ME</a>
            </div>
            <div className="hero-stats reveal" style={{transitionDelay:'0.3s'}}>
              <div>
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div>
                <div className="stat-number">∞</div>
                <div className="stat-label">Problems Solved</div>
              </div>
            </div>
          </section>

          {/* ── ABOUT ──────────────────────────────────────── */}
          <section id="about" className="about">
            <div className="container">
              <h2 className="about-quote reveal">
                "I believe in building applications that solve real-world problems and offer exceptional user experiences."
              </h2>
              <div className="section-label reveal" style={{transitionDelay:'0.1s'}}>
                <span className="star">✳</span> This is me.
              </div>
              <hr className="section-divider"/>
              <div className="about-grid">
                <div className="reveal" style={{transitionDelay:'0.15s'}}>
                  <h3 className="about-name">Hi, I'm Siddharth Bhamare.</h3>
                </div>
                <div>
                  <p className="about-bio reveal" style={{transitionDelay:'0.2s'}}>
                    I'm a Full Stack developer dedicated to turning complex ideas into powerful digital solutions. I specialize in crafting robust backend architectures and highly interactive frontends.
                  </p>
                  <p className="about-bio reveal" style={{transitionDelay:'0.28s'}}>
                    From developing real-time marketplaces like ProConnect to integrating AI tools into daily workflows, my focus remains on writing clean, maintainable code and optimizing for scale.
                  </p>
                  <p className="about-bio reveal" style={{transitionDelay:'0.35s'}}>
                    Currently based in India. Looking for exciting full-stack opportunities and challenging projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SKILLS ─────────────────────────────────────── */}
          <section id="skills" className="skills">
            <div className="container">
              <div className="section-label reveal"><span className="star">✳</span> My Stack</div>

              {/* Languages */}
          <div className="skills-block reveal" style={{transitionDelay:'0.05s'}}>
            <div className="skills-category">LANGS</div>
            <div className="skills-grid">
              {LANGUAGE_SKILLS.map(s=><SkillBadge key={s.name} {...s}/>)}
            </div>
          </div>

          {/* Frontend */}
              <div className="skills-block reveal" style={{transitionDelay:'0.1s'}}>
                <div className="skills-category">FRONTEND</div>
                <div className="skills-grid">
                  {FRONTEND_SKILLS.map(s=><SkillBadge key={s.name} {...s}/>)}
                </div>
              </div>

              {/* Backend */}
              <div className="skills-block reveal" style={{transitionDelay:'0.15s'}}>
                <div className="skills-category">BACKEND</div>
                <div className="skills-grid">
                  {BACKEND_SKILLS.map(s=><SkillBadge key={s.name} {...s}/>)}
                </div>
              </div>

              {/* Tools */}
              <div className="skills-block reveal" style={{transitionDelay:'0.2s'}}>
                <div className="skills-category">TOOLS</div>
                <div className="skills-grid">
                  {TOOL_SKILLS.map(s=><SkillBadge key={s.name} {...s}/>)}
                </div>
              </div>
            </div>
          </section>

          {/* ── PROJECTS ───────────────────────────────────── */}
          <section id="projects" className="projects">
            <div className="container">
              <div className="section-label reveal"><span className="star">✳</span> Selected Works</div>
              <div className="projects-list">
                {PROJECTS.map((p,i)=>(
                  <div key={i} className="project-item reveal" style={{transitionDelay:`${i*0.08}s`}}>
                    <div className="project-inner">
                      <span className="project-num">{p.num}</span>
                      <span className="project-name">{p.name}</span>
                      <span className="project-arrow">↗</span>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                      <div className="project-tags">
                        {p.tags.map(t=>(
                          <span key={t} className="project-tag">{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {p.github && <a href={p.github} target="_blank" rel="noopener" className="project-link">GitHub</a>}
                        {p.live   && <a href={p.live}   target="_blank" rel="noopener" className="project-link">Live ↗</a>}
                      </div>
                    </div>
                    {p.desc && (
                      <p style={{marginLeft:'40px',marginTop:'8px',fontSize:'13px',color:'var(--muted)',lineHeight:'1.6',maxWidth:'680px'}}>
                        {p.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT ────────────────────────────────────── */}
          <section id="contact" className="contact">
            <div className="container">
              <p className="contact-label reveal">Have a project in mind?</p>
              <a href="mailto:siddharthbhamare04@gmail.com" className="contact-email reveal" style={{transitionDelay:'0.1s'}}>
                siddharthbhamare04@gmail.com
              </a>
              <div className="footer-note reveal" style={{transitionDelay:'0.2s'}}>
                Design & built by Siddharth Bhamare &nbsp;·&nbsp;
                <a href="https://github.com/just-sid04" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
