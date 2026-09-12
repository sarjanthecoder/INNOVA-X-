import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section by scroll position across all major sections
      const sections = [
        'home',
        'about-page',
        'why-innovax',
        'challenge-tracks',
        'prizes',
        'how-it-works',
        'faq',
        'contact-page',
      ];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Complete sections menu across the full hackathon page
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about-page' },
    { label: 'Why Innova X', id: 'why-innovax' },
    { label: 'Tracks', id: 'challenge-tracks' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact-page' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Left: SVHEC College Emblem (Larger, Clean Without Text) */}
        <a
          href="#home"
          className="navbar-college"
          onClick={(e) => handleNavClick(e, 'home')}
          title="Shree Venkateshwara Hi-Tech Engineering College"
          aria-label="Shree Venkateshwara Hi-Tech Engineering College Home"
        >
          <img
            src="/logos/college-logo-clean.webp"
            alt="Shree Venkateshwara Hi-Tech Engineering College Emblem"
            className="college-crest"
            decoding="async"
          />
        </a>

        {/* Center: Complete Sections Navigation Menu (Desktop) */}
        <nav className="nav-menu" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Center: Stunning Brand Text Lockup Between Logos (Mobile & Tablet) */}
        <div className="navbar-center-brand" aria-label="INNOVA X 2026 Hackathon">
          <span className="navbar-center-title">
            INNOVA <span className="brand-x">X</span> 2026
          </span>
          <span className="navbar-center-sub">
            SVHEC <span className="brand-dot">&bull;</span> INNOVATION HACKS
          </span>
        </div>

        {/* Right: Innovation Hacks Logo (Larger, Clean Without Text) + CTA Buttons */}
        <div className="navbar-actions">
          <a
            href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq"
            target="_blank"
            rel="noopener noreferrer"
            className="ih-brand"
            title="Innovation Hacks"
            aria-label="Innovation Hacks Community"
          >
            <img
              src="/logos/ih-logo-clean.webp"
              alt="Innovation Hacks Official Logo"
              className="ih-icon"
              decoding="async"
            />
          </a>

          {/* Unstop Register Pill Button */}
          <a
            href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-unstop-nav"
          >
            <span>Register on Unstop</span>
            <svg
              className="arrow-diagonal"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* WhatsApp Community Pill Button */}
          <a
            href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-community-nav"
          >
            <svg className="whatsapp-nav-icon" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Join Community</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="mobile-dropdown">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-actions">
            <a
              href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-unstop-nav"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              Register on Unstop ↗
            </a>
            <a
              href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-community-nav"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              Join WhatsApp Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
