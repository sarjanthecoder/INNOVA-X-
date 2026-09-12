import React from 'react';
import './WhyInnovaX.css';

const WhyInnovaX = () => {
  const cardFeatures = [
    {
      id: 'global-exposure',
      title: 'GLOBAL EXPOSURE',
      desc: 'Showcase your ideas on a global platform and connect with like-minded innovators worldwide.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: 'ai-tech',
      title: 'BUILD WITH AI & EMERGING TECHNOLOGIES',
      desc: 'Work with cutting-edge technologies and turn your ideas into real solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
    },
    {
      id: 'solve-problems',
      title: 'SOLVE REAL-WORLD PROBLEMS',
      desc: 'Tackle meaningful challenges and create impact beyond the classroom.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.2 6 .5.4.8 1 .8 1.6V17h6v-.4c0-.6.3-1.2.8-1.6 1.9-1.3 3.2-3.5 3.2-6a7 7 0 0 0-7-7z" />
        </svg>
      ),
    },
    {
      id: 'tech-rewards',
      title: 'WIN PREMIUM TECH REWARDS',
      desc: 'Get access to top AI tools, subscriptions, web domain and exciting prizes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M6 4h12v6a6 6 0 0 1-12 0V4z" />
        </svg>
      ),
    },
    {
      id: 'remote-internship',
      title: 'GLOBAL REMOTE INTERNSHIP',
      desc: 'Top teams get a chance for a 1-month Global Remote Internship with Innovation Hacks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: 'collaborate-learn',
      title: 'COLLABORATE & LEARN',
      desc: 'Team up across colleges, specializations and disciplines. Exchange ideas and grow together.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'gain-recognition',
      title: 'GAIN RECOGNITION',
      desc: 'Certificates, visibility and opportunities to kickstart your innovation journey.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      id: 'turn-ideas',
      title: 'TURN IDEAS INTO OPPORTUNITIES',
      desc: 'Transform your innovative ideas into real possibilities for a brighter, more sustainable tomorrow.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z" />
          <path d="M9 12l2 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="why-innovax-universe" id="why-innovax">
      {/* Dynamic Ambient Backdrops & Visual Flanks */}
      <div className="why-flank-wrap left-flank">
        <img
          src="/student_desk_blended_hd.webp"
          alt="Student Innovator Coding at Campus Desk"
          className="why-flank-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="why-flank-wrap right-flank">
        <img
          src="/clean_globe_right_hd.webp"
          alt="Global Network over Mountain Vista"
          className="why-flank-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Radial High-Tech Glow Effect */}
      <div className="why-tech-glow-core" aria-hidden="true" />

      {/* Main Responsive Stage */}
      <div className="why-content-container">
        {/* Top Institutional Header Bar */}
        <header className="why-top-header">
          {/* Left: Shree Venkateshwara College Branding */}
          <a
            href="#about-page"
            className="why-institution-brand"
            title="Shree Venkateshwara Hi-Tech Engineering College"
          >
            <img
              src="/logos/college-logo-clean.webp"
              alt="Shree Venkateshwara College Emblem"
              className="why-college-crest"
              loading="lazy"
              decoding="async"
            />
            <div className="why-institution-text">
              <span className="inst-title">Shree Venkateshwara</span>
              <span className="inst-subtitle">Hi-Tech Engineering College</span>
              <span className="inst-location">Erode, Tamil Nadu</span>
            </div>
          </a>

          {/* Center: Global Tagline with Divider Lines */}
          <div className="why-center-motto-track">
            <span className="motto-accent-line left" />
            <span className="motto-accent-text">A GLOBAL PLATFORM FOR BOLD IDEAS</span>
            <span className="motto-accent-line right" />
          </div>

          {/* Right: Innovation Hacks Community Branding */}
          <a
            href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq"
            target="_blank"
            rel="noopener noreferrer"
            className="why-organizer-brand"
            title="Innovation Hacks Community"
          >
            <img
              src="/logos/ih-logo-clean.webp"
              alt="Innovation Hacks Logo"
              className="why-ih-logo"
              loading="lazy"
              decoding="async"
            />
            <div className="why-organizer-text">
              <span className="org-name">Innovation Hacks</span>
              <span className="org-motto">BUILD &bull; INNOVATE &bull; IMPACT</span>
            </div>
          </a>
        </header>

        {/* Hero Title & Mission Statement */}
        <div className="why-hero-showcase">
          <span className="why-pretitle">WHY</span>

          {/* Master 3D Artwork Title replacing text INNOVA X */}
          <h2 className="why-master-title">
            <div className="why-title-artwork-crop">
              <img
                src="/iinovaxxx.webp"
                alt="INNOVA X"
                className="why-title-artwork-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="title-chunk-question">?</span>
            <span className="sr-only">WHY INNOVA X?</span>
          </h2>

          <p className="why-subheadline">BECAUSE IDEAS DESERVE A BIGGER TOMORROW</p>

          <p className="why-lead-description">
            INNOVA X 2026 is more than a competition &mdash; it&apos;s a global movement to bring
            together innovative minds, emerging technologies, and real-world challenges, creating
            solutions that make a lasting impact.
          </p>
        </div>

        {/* 8 Feature Cards Grid (4 Columns x 2 Rows) */}
        <div className="why-cards-matrix">
          {cardFeatures.map((card) => (
            <article
              key={card.id}
              className="why-feature-tile"
              tabIndex={0}
              aria-labelledby={`card-title-${card.id}`}
            >
              <div className="tile-glass-sheen" />
              <div className="tile-icon-pod">
                <span className="pod-circle">{card.icon}</span>
              </div>
              <div className="tile-info">
                <h3 id={`card-title-${card.id}`} className="tile-title">
                  {card.title}
                </h3>
                <p className="tile-desc">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Bottom CTA Pill Banner */}
        <div className="why-cta-dock">
          <a
            href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
            target="_blank"
            rel="noopener noreferrer"
            className="why-interactive-pill-cta"
            title="Register on Unstop — INNOVA X 2026"
            aria-label="Register on Unstop for INNOVA X 2026"
          >
            {/* Target Bullseye Icon */}
            <div className="pill-target-shield">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="target-icon-graphic"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>

            {/* Middle Message */}
            <div className="pill-hero-statement">
              <span className="statement-head">Your Ideas. A Bigger Tomorrow.</span>
              <span className="statement-sub">BUILD &bull; INNOVATE &bull; IMPACT</span>
            </div>

            {/* Right Tag & Action Chevron */}
            <div className="pill-action-cluster">
              <span className="cluster-divider" />
              <span className="cluster-edition-tag">INNOVA X 2026</span>
              <span className="cluster-arrow-circ">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyInnovaX;
