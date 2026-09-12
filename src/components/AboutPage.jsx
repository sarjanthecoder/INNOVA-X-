import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about-page-container" id="about-page">
      {/* 1. About Hero Section with Seamless UHD College Campus Artwork */}
      <div className="about-hero-section">
        {/* Right Blended College Campus Background with /svhechd.png */}
        <div className="about-campus-artwork" aria-hidden="true">
          <div className="campus-artwork-frame">
            <img
              src="/svhechd.webp"
              alt="Shree Venkateshwara Hi-Tech Engineering College Campus"
              className="campus-blended-img"
              loading="lazy"
              decoding="async"
            />

            {/* Flying birds flock in the sky */}
            <div className="campus-sky-birds-wrap">
              <svg viewBox="0 0 160 70" fill="none" className="campus-sky-birds">
                <path d="M12 28 Q18 20 25 28 Q32 20 38 28" stroke="#3b6998" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M48 16 Q53 10 59 16 Q65 10 70 16" stroke="#3b6998" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M78 32 Q83 26 89 32 Q95 26 100 32" stroke="#3b6998" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32 48 Q36 43 41 48 Q46 43 50 48" stroke="#3b6998" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M96 14 Q100 9 105 14 Q110 9 114 14" stroke="#3b6998" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M120 26 Q124 21 129 26 Q134 21 138 26" stroke="#3b6998" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Top Right Ambient Motto Badge matching Hero */}
            <div className="campus-sky-motto-badge">
              <span className="sky-motto-pre">ENGINEERING</span>
              <span className="sky-motto-main">A BRIGHTER TOMORROW</span>
              <div className="sky-badge-accent-line" />
            </div>

            {/* Right Vertical Ambient Keywords matching Hero */}
            <div className="campus-sky-keywords">
              <span>IDEAS</span>
              <span>PEOPLE</span>
              <span>TECHNOLOGY</span>
              <span className="kw-highlight">A BRIGHTER</span>
              <span className="kw-highlight">TOMORROW</span>
            </div>
          </div>
        </div>

        {/* Hero Left Content with Bold Hero-Scale Typography */}
        <div className="about-hero-content-wrapper">
          <div className="about-hero-left">
            {/* Top Category Badge */}
            <div className="about-badge">
              <span className="badge-pulse-dot" />
              <span>A GLOBAL INSTITUTION OF EXCELLENCE</span>
            </div>

            {/* 3D Master Title matching Hero */}
            <h2 className="about-title">
              <span className="about-title-main">SHREE VENKATESHWARA</span>
              <span className="about-title-accent">HI-TECH ENGINEERING COLLEGE</span>
            </h2>

            {/* Motto with Glowing Cyan Accent Dots */}
            <div className="about-motto">
              KNOWLEDGE &nbsp;<span className="motto-dot">•</span>&nbsp; INNOVATION &nbsp;<span className="motto-dot">•</span>&nbsp; EXCELLENCE
            </div>

            {/* Lead Description Paragraph with Strong Readability */}
            <p className="about-lead">
              <strong>Shree Venkateshwara Hi-Tech Engineering College, Erode</strong>, is an autonomous premier
              institution committed to delivering <strong>world-class technical education</strong>, fostering
              groundbreaking research, and shaping <strong>future-ready global innovators</strong> to solve
              real-world challenges.
            </p>

            {/* 4 Feature Badges with Prominent Glassmorphic Cards & Crisp Icons */}
            <div className="about-feature-chips">
              <div className="about-chip-card">
                <span className="chip-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                </span>
                <div className="chip-text-wrap">
                  <span className="chip-title">Quality Education</span>
                  <span className="chip-sub">Academic Excellence</span>
                </div>
              </div>

              <div className="about-chip-card">
                <span className="chip-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                <div className="chip-text-wrap">
                  <span className="chip-title">Student Centric</span>
                  <span className="chip-sub">Mentorship &amp; Growth</span>
                </div>
              </div>

              <div className="about-chip-card">
                <span className="chip-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                </span>
                <div className="chip-text-wrap">
                  <span className="chip-title">Innovation Driven</span>
                  <span className="chip-sub">Advanced R&amp;D Labs</span>
                </div>
              </div>

              <div className="about-chip-card">
                <span className="chip-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
                    <path d="M14 2h7v7l-3-3-4.5 4.5-2.8-2.8L17 3.4z" />
                  </svg>
                </span>
                <div className="chip-text-wrap">
                  <span className="chip-title">Better Tomorrow</span>
                  <span className="chip-sub">Global Societal Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Floating Highlights Pill Bar */}
      <div className="about-floating-bar-section">
        <div className="about-bar-container">
          <div className="about-pill-card">
            {/* 5 Information Highlights with Bold Readable Typography */}
            <div className="about-highlights-grid">
              <div className="about-hl-item">
                <span className="hl-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <div className="hl-text-block">
                  <span className="hl-main-title">Erode, Tamil Nadu</span>
                  <span className="hl-sub-title">Campus Headquarters</span>
                </div>
              </div>

              <div className="about-hl-item">
                <span className="hl-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                <div className="hl-text-block">
                  <span className="hl-main-title">Future Engineers</span>
                  <span className="hl-sub-title">Nurturing Global Talent</span>
                </div>
              </div>

              <div className="about-hl-item">
                <span className="hl-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L2 6v2h20V6L12 1zm-7 9v8h2v-8H5zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zM2 20v2h20v-2H2z" />
                  </svg>
                </span>
                <div className="hl-text-block">
                  <span className="hl-main-title">Academic Legacy</span>
                  <span className="hl-sub-title">Decades of Excellence</span>
                </div>
              </div>

              <div className="about-hl-item">
                <span className="hl-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <div className="hl-text-block">
                  <span className="hl-main-title">Innovation Hub</span>
                  <span className="hl-sub-title">R&amp;D &amp; Incubation</span>
                </div>
              </div>

              <div className="about-hl-item">
                <span className="hl-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" y1="8" x2="2" y2="22" />
                    <line x1="17.5" y1="15" x2="9" y2="15" />
                  </svg>
                </span>
                <div className="hl-text-block">
                  <span className="hl-main-title">Brighter Tomorrow</span>
                  <span className="hl-sub-title">Sustainable Future</span>
                </div>
              </div>
            </div>

            {/* Right Navy Executive Quote Pill */}
            <div className="about-quote-pill">
              <span className="quote-mark">“</span>
              <div className="quote-body">
                <span className="quote-text">Education is the foundation for a brighter tomorrow.</span>
              </div>
              <svg className="quote-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom 3-Column Vision, Mission & Belief Section */}
      <div className="about-triad-section">
        <div className="triad-container">
          {/* Card 1: Our Belief with World Map SVG Background */}
          <div className="triad-card belief-card">
            {/* World Map Dots Pattern */}
            <div className="belief-map-bg" aria-hidden="true">
              <svg viewBox="0 0 450 250" fill="none" className="world-map-svg">
                <g fill="#93c5fd" opacity="0.6">
                  <circle cx="120" cy="80" r="2.5" />
                  <circle cx="130" cy="85" r="2.5" />
                  <circle cx="140" cy="80" r="2.5" />
                  <circle cx="150" cy="75" r="3" />
                  <circle cx="160" cy="70" r="3" />
                  <circle cx="170" cy="72" r="3.5" />
                  <circle cx="180" cy="78" r="3.5" />
                  <circle cx="190" cy="85" r="3" />
                  <circle cx="200" cy="90" r="3" />
                  <circle cx="210" cy="95" r="3" />
                  <circle cx="220" cy="100" r="2.5" />
                  <circle cx="230" cy="105" r="2.5" />
                  <circle cx="240" cy="110" r="2.5" />
                  <circle cx="165" cy="95" r="3" />
                  <circle cx="175" cy="105" r="3" />
                  <circle cx="185" cy="115" r="3" />
                  <circle cx="195" cy="125" r="3" />
                  <circle cx="205" cy="135" r="3" />
                  <circle cx="280" cy="80" r="3.5" />
                  <circle cx="295" cy="85" r="3.5" />
                  <circle cx="310" cy="90" r="3" />
                  <circle cx="325" cy="95" r="3" />
                  <circle cx="340" cy="100" r="3" />
                  <circle cx="355" cy="110" r="3" />
                  <circle cx="370" cy="120" r="3" />
                  <circle cx="300" cy="110" r="3" />
                  <circle cx="315" cy="120" r="3" />
                  <circle cx="330" cy="130" r="3" />
                  <circle cx="345" cy="140" r="3" />
                  <circle cx="360" cy="150" r="3" />
                  <circle cx="375" cy="160" r="2.5" />
                  <circle cx="390" cy="165" r="2.5" />
                </g>
                <path d="M60 115 C 160 55, 270 55, 390 115" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M60 155 C 160 95, 270 95, 390 155" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              </svg>
            </div>

            <div className="belief-card-content">
              <span className="triad-prefix">OUR BELIEF</span>
              <h3 className="triad-title">
                <span className="underlined-word">Engineers</span> for<br />a Better World
              </h3>
              <p className="triad-desc">
                We believe in empowering young minds with deep technical knowledge, creative innovation,
                and strong ethical values to engineer transformative solutions for humanity.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="triad-card vision-card">
            <div className="triad-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="triad-prefix">OUR VISION</span>
            <h3 className="triad-card-title">A Brighter Tomorrow Through Innovation</h3>
            <p className="triad-card-text">
              To be an internationally recognized center of academic and technical excellence, nurturing
              cutting-edge research, entrepreneurial leadership, and ethically grounded professionals.
            </p>
          </div>

          {/* Card 3: Our Mission */}
          <div className="triad-card mission-card">
            <div className="triad-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <span className="triad-prefix">OUR MISSION</span>
            <h3 className="triad-card-title">Educate &bull; Innovate &bull; Empower</h3>
            <p className="triad-card-text">
              To provide industry-aligned curriculum, state-of-the-art infrastructural ecosystems, and
              collaborative incubation that cultivates impactful innovation and lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
