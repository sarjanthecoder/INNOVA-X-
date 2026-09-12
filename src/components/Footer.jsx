import './Footer.css';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      {/* 1. Sponsor / Organizer Showcase Bar */}
      <div className="footer-sponsors-container">
        {/* Left: Organized by College */}
        <div className="sponsor-block-college">
          <img
            src="/college_building_hd.webp"
            alt="Shree Venkateshwara College Campus"
            className="college-building-thumb"
            loading="lazy"
            decoding="async"
          />
          <div className="college-org-wrapper">
            <img
              src="/logos/college-logo-clean.webp"
              alt="College Crest"
              className="college-crest-thumb"
              loading="lazy"
              decoding="async"
            />
            <div className="org-text-content">
              <span className="org-label">Organized by</span>
              <span className="org-title">Shree Venkateshwara</span>
              <span className="org-subtitle">Hi-Tech Engineering College</span>
              <span className="org-city">Autonomous &bull; Erode, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Middle: Powered & Sponsored by Innovation Hacks */}
        <div className="sponsor-block-ih">
          <span className="ih-sponsor-label">Powered &amp; Sponsored by</span>
          <div className="ih-sponsor-wrapper">
            <img
              src="/logos/ih-logo-clean.webp"
              alt="Innovation Hacks Logo"
              className="ih-logo-thumb"
              loading="lazy"
              decoding="async"
            />
            <div className="ih-sponsor-text">
              <span className="ih-sponsor-name">Innovation Hacks</span>
              <span className="ih-sponsor-tagline">BUILD &nbsp;·&nbsp; INNOVATE &nbsp;·&nbsp; IMPACT</span>
            </div>
          </div>
        </div>

        {/* Right: Be Part of a Brighter Tomorrow Banner */}
        <div className="sponsor-block-banner">
          <a
            href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
            target="_blank"
            rel="noopener noreferrer"
            className="brighter-tomorrow-card"
          >
            <div className="card-top-prefix">BE PART OF</div>
            <div className="card-main-title">A BRIGHTER TOMORROW</div>
            <div className="card-tagline">BUILD &nbsp;·&nbsp; INNOVATE &nbsp;·&nbsp; IMPACT</div>
            <div className="card-arrow-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <span className="card-cursive-quote">Ideas for a better tomorrow</span>
          </a>
        </div>
      </div>

      {/* 2. Full Footer Navigation Menu Grid */}
      <div className="footer-menu-section">
        <div className="footer-menu-container">
          {/* Brand Column */}
          <div className="footer-menu-col footer-col-brand">
            <div className="footer-brand-lockup">
              <div className="footer-brand-badge">
                <span className="footer-brand-pulse" />
                <span>GLOBAL EDITION</span>
              </div>
              <h3 className="footer-brand-title">
                INNOVA <span className="brand-accent">X</span> 2026
              </h3>
            </div>
            <p className="footer-brand-description">
              A premier global online hackathon connecting visionary students, designers, and developers to pioneer real-world AI breakthroughs for a brighter tomorrow.
            </p>
            <div className="footer-pill-tags">
              <span className="footer-tag">🌍 100% Online</span>
              <span className="footer-tag">🚀 5 Challenge Tracks</span>
              <span className="footer-tag">🏆 ₹299/Squad</span>
            </div>
          </div>

          {/* Col 1: Explore & Navigation */}
          <div className="footer-menu-col">
            <h4 className="footer-col-heading">
              <span>Navigation</span>
              <div className="heading-accent-dot" />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about-page" onClick={(e) => scrollToSection(e, 'about-page')}>
                  About Institution
                </a>
              </li>
              <li>
                <a href="#why-innovax" onClick={(e) => scrollToSection(e, 'why-innovax')}>
                  Why Innova X
                </a>
              </li>
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  Challenge Tracks
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  Prizes &amp; Rewards
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
                  FAQ Center
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  Contact Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Challenge Tracks */}
          <div className="footer-menu-col">
            <h4 className="footer-col-heading">
              <span>Challenge Tracks</span>
              <div className="heading-accent-dot" />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  AI for Healthcare
                </a>
              </li>
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  AI for Agriculture
                </a>
              </li>
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  Climate &amp; Sustainability
                </a>
              </li>
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  Safety &amp; Disaster Response
                </a>
              </li>
              <li>
                <a href="#challenge-tracks" onClick={(e) => scrollToSection(e, 'challenge-tracks')}>
                  Open Innovation &bull; AI Future
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
                  Track Submission Rubric
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Prizes & Opportunities */}
          <div className="footer-menu-col">
            <h4 className="footer-col-heading">
              <span>Prizes &amp; Perks</span>
              <div className="heading-accent-dot" />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  👑 1st Prize · Claude Pro
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  🥈 2nd Prize · ChatGPT Plus
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  🥉 3rd Prize · emergent.sh
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  Innovation Hacks Internship
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
                  Verified Digital Certificates
                </a>
              </li>
              <li>
                <a href="#prizes" onClick={(e) => scrollToSection(e, 'prizes')}>
                  Top 3 Teams Podium Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Registration */}
          <div className="footer-menu-col">
            <h4 className="footer-col-heading">
              <span>Connect &amp; Join</span>
              <div className="heading-accent-dot" />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a
                  href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-highlight-cta"
                >
                  <span>Register on Unstop</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq" target="_blank" rel="noopener noreferrer">
                  WhatsApp Squad Lounge ↗
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  Discord Developer Community ↗
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  24/7 Organizer Helpdesk
                </a>
              </li>
              <li>
                <a href="mailto:info@innovax2026.com">
                  info@innovax2026.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Social Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <div className="footer-copy-text">
            &copy; 2026 INNOVA X &nbsp;|&nbsp; Shree Venkateshwara Hi-Tech Engineering College &nbsp;|&nbsp; Innovation Hacks
          </div>

          <div className="footer-nav-links">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            <span className="pipe">|</span>
            <a href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq" target="_blank" rel="noopener noreferrer">Join Community</a>
            <span className="pipe">|</span>
            <a href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160" target="_blank" rel="noopener noreferrer">Unstop</a>
            <span className="pipe">|</span>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>Guidelines</a>
            <span className="pipe">|</span>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Back to Top &uarr;</a>
          </div>

          <div className="footer-social-icons">
            {/* Discord */}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
