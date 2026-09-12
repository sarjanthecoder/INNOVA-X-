import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      ),
      line1: 'GLOBAL',
      line2: 'COMMUNITY',
      caption: 'INNOVATORS BEYOND BORDERS',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
        </svg>
      ),
      line1: 'REAL-WORLD',
      line2: 'PROBLEMS',
      caption: 'TURN IDEAS INTO IMPACT',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      line1: 'PREMIUM',
      line2: 'REWARDS',
      caption: 'TOOLS · INTERNSHIP · DOMAIN',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      line1: 'BRIGHTER',
      line2: 'TOMORROW',
      caption: 'PEOPLE · TECHNOLOGY · IMPACT',
    },
  ];

  return (
    <section className="features-floating-section" id="about">
      <div className="features-bar-container">
        <div className="features-pill-bar">
          {/* 4 Feature Items */}
          <div className="features-columns">
            {featureList.map((item, idx) => (
              <div className="feature-cell" key={idx}>
                <div className="feature-icon-wrapper">{item.icon}</div>
                <div className="feature-cell-text">
                  <div className="feature-cell-header">
                    <span className="feature-h1">{item.line1}</span>
                    <span className="feature-h2">{item.line2}</span>
                  </div>
                  <span className="feature-cell-sub">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navy Quote Pill */}
          <div className="features-quote-pill">
            <span className="quote-mark">“</span>
            <div className="quote-content">
              <span className="quote-line1">Anyone. Anywhere.</span>
              <span className="quote-line2">Can Innovate.”</span>
            </div>
          </div>
        </div>

        {/* Lower Organized By / Sponsored By / Mountain CTA Banner Row */}
        <div className="home-sponsors-row">
          {/* Left: Organized by College */}
          <div className="home-sponsor-college">
            <img
              src="/college_building_hd.webp"
              alt="Shree Venkateshwara College Campus"
              className="home-college-thumb"
              loading="lazy"
              decoding="async"
            />
            <div className="home-college-info">
              <img
                src="/logos/college-logo-clean.webp"
                alt="College Crest"
                className="home-crest-thumb"
                loading="lazy"
                decoding="async"
              />
              <div className="home-org-text">
                <span className="home-org-label">Organized by</span>
                <span className="home-org-title">Shree Venkateshwara</span>
                <span className="home-org-subtitle">Hi-Tech Engineering College</span>
                <span className="home-org-place">Erode, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div className="home-sponsor-divider" aria-hidden="true"></div>

          {/* Middle: Powered & Sponsored by Innovation Hacks */}
          <div className="home-sponsor-ih">
            <span className="home-ih-label">Powered &amp; Sponsored by</span>
            <div className="home-ih-wrapper">
              <img
                src="/logos/ih-logo-clean.webp"
                alt="Innovation Hacks Logo"
                className="home-ih-logo"
                loading="lazy"
                decoding="async"
              />
              <div className="home-ih-text">
                <span className="home-ih-title">Innovation Hacks</span>
                <span className="home-ih-motto">BUILD &nbsp;·&nbsp; INNOVATE &nbsp;·&nbsp; IMPACT</span>
              </div>
            </div>
          </div>

          {/* Right: Mountain Panoramic CTA Banner */}
          <a
            href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta-mountain-card"
          >
            <img
              src="/banner_mountain_uhd.webp"
              alt="Mountain Peaks"
              className="home-mountain-bg"
              loading="lazy"
              decoding="async"
            />
            <div className="home-mountain-overlay"></div>
            <div className="home-mountain-content">
              <div className="mountain-tag-top">BE PART OF</div>
              <div className="mountain-main-title">A BRIGHTER TOMORROW</div>
              <div className="mountain-tagline">BUILD &nbsp;·&nbsp; INNOVATE &nbsp;·&nbsp; IMPACT</div>
            </div>
            <div className="mountain-arrow-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="mountain-cursive-text">
              <span>Ideas for a better tomorrow</span>
              <div className="cursive-underline"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
