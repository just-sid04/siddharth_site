import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ scrollProgress }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled
          ? 'rgba(5, 8, 22, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #4f8ef7, #9b59f5, #00d4ff)',
        }}
      />

      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #4f8ef7, #9b59f5)',
            }}
          >
            SB
          </div>
          <span
            className="font-semibold text-base tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Siddharth<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-all duration-200 no-underline relative group"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, #4f8ef7, #9b59f5)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:siddharthbhamare@gmail.com"
          className="hidden md:block btn-primary text-sm py-2.5 px-5 no-underline"
          style={{ fontSize: '13px', padding: '10px 22px' }}
        >
          Hire Me 🚀
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none' }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'opacity: 0'
                  : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 px-6"
          style={{
            background: 'rgba(5, 8, 22, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <ul className="flex flex-col gap-4 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium no-underline"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
