import './ChallengeTracks.css';

const ChallengeTracks = () => {
  const tracks = [
    {
      number: '01',
      image: '/tracks/healthcare.webp',
      themeColor: '#1a56db',
      haloColor: 'rgba(26, 86, 219, 0.12)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 9v6m-3-3h6" strokeWidth="2.4" />
        </svg>
      ),
      title: 'AI FOR HEALTHCARE',
      desc: 'Build AI solutions that improve healthcare accessibility, patient support, preventive care, or medical workflows.',
      motto: 'HEALTHIER PEOPLE STRONGER COMMUNITIES',
      mottoColor: '#1a56db',
    },
    {
      number: '02',
      image: '/tracks/agriculture.webp',
      themeColor: '#10b981',
      haloColor: 'rgba(16, 185, 129, 0.12)',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.5 17.5 9.5 12 17 10V8zm0-6C7.5 2 2 7.5 2 17h2c0-7.5 4.5-13 13-13V2z" />
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" opacity="0.3" />
        </svg>
      ),
      title: 'AI FOR AGRICULTURE',
      desc: 'Create AI-powered solutions for smart farming, crop health, agricultural intelligence, food security, or rural communities.',
      motto: 'SMARTER FARMS STRONGER TOMORROW',
      mottoColor: '#059669',
    },
    {
      number: '03',
      image: '/tracks/climate.webp',
      themeColor: '#00b4d8',
      haloColor: 'rgba(0, 180, 216, 0.12)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
          <path d="M12 8v8" strokeWidth="2.5" />
          <path d="M8 12h8" strokeWidth="2.5" />
        </svg>
      ),
      title: 'AI FOR CLIMATE & SUSTAINABILITY',
      desc: 'Use AI to address environmental challenges, energy optimization, waste management, water conservation, or climate-related problems.',
      motto: 'GREENER TODAY BRIGHTER TOMORROW',
      mottoColor: '#0088a8',
    },
    {
      number: '04',
      image: '/tracks/disaster.webp',
      themeColor: '#ea580c',
      haloColor: 'rgba(234, 88, 12, 0.12)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
        </svg>
      ),
      title: 'AI FOR SAFETY & DISASTER RESPONSE',
      desc: 'Develop AI solutions for emergency response, risk detection, cybersecurity, public safety, or disaster management.',
      motto: 'SAFER COMMUNITIES STRONGER SOCIETIES',
      mottoColor: '#c2410c',
    },
    {
      number: '05',
      image: '/tracks/open_future.webp',
      themeColor: '#7c3aed',
      haloColor: 'rgba(124, 58, 237, 0.12)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      title: 'OPEN INNOVATION — AI FOR THE FUTURE',
      desc: 'Build an innovative AI-powered solution for any meaningful real-world problem.',
      motto: 'BOLD IDEAS BRIGHTER POSSIBILITIES',
      mottoColor: '#6d28d9',
    },
  ];

  return (
    <section className="tracks-section" id="challenge-tracks">
      {/* Background Side Buildings & Cityscape */}
      <div className="tracks-bg-buildings-left" aria-hidden="true"></div>
      <div className="tracks-bg-buildings-right" aria-hidden="true"></div>

      {/* Pure Code: Left Floating Vertical Keywords */}
      <div className="tracks-left-keywords" aria-hidden="true">
        <span>BUILD</span>
        <span>INNOVATE</span>
        <span>IMPACT</span>
      </div>

      {/* Pure Code: Right Floating Vertical Keywords */}
      <div className="tracks-right-keywords" aria-hidden="true">
        <span>IDEAS</span>
        <span>PEOPLE</span>
        <span>TECHNOLOGY</span>
        <span>A BRIGHTER</span>
        <span>TOMORROW</span>
      </div>

      {/* Pure Code: Right Cursive Handwriting Script */}
      <div className="tracks-top-cursive" aria-hidden="true">
        <span className="cursive-text">Innovation<br />Has No Borders</span>
        <div className="cursive-underline"></div>
      </div>

      {/* Header Area */}
      <div className="tracks-header">
        <div className="tracks-badge">C H A L L E N G E &nbsp; T R A C K S</div>

        {/* 100% Pure Code 3D Metallic Chrome Title */}
        <div className="tracks-title-3d-wrap">
          {/* 3D Extrusion Depth Layer */}
          <div className="tracks-title-extrusion" aria-hidden="true">
            <span className="ext-num">5</span>
            <span className="ext-text">CHALLENGE TRACKS</span>
          </div>

          {/* Front Chrome Metallic Face */}
          <h2 className="tracks-title-front">
            <span className="chrome-num">5</span>
            <span className="chrome-text">CHALLENGE TRACKS</span>
          </h2>
        </div>

        <div className="tracks-sub-tagline">
          ONE PLANET &nbsp;·&nbsp; ENDLESS POSSIBILITIES
        </div>
        <div className="tracks-tagline-line"></div>

        <p className="tracks-lead-desc">
          Choose one track and build an AI-powered solution for a better tomorrow.
        </p>
      </div>

      {/* 5 Glassmorphic Challenge Track Cards with HD AI Generated Images */}
      <div className="tracks-grid-wrapper">
        <div className="tracks-grid">
          {tracks.map((track, idx) => (
            <div className="track-card" key={idx}>
              {/* Card Top Image Wrap */}
              <div className="track-card-img-wrap">
                <img
                  src={track.image}
                  alt={track.title}
                  className="track-card-img"
                  loading="lazy"
                />
                {/* Number Badge 01 - 05 */}
                <div className="track-number-badge">
                  <span>{track.number}</span>
                </div>
                {/* Gradient vignette overlay */}
                <div className="track-card-img-overlay"></div>
              </div>

              {/* Floating Overlapping Icon Badge */}
              <div
                className="track-floating-badge"
                style={{
                  background: track.haloColor,
                  borderColor: track.themeColor,
                  color: track.themeColor,
                }}
              >
                <div className="track-floating-icon" style={{ color: track.themeColor }}>
                  {track.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="track-card-body">
                <h3 className="track-card-title">{track.title}</h3>
                <p className="track-card-desc">{track.desc}</p>
              </div>

              {/* Card Footer */}
              <div className="track-card-footer">
                <span
                  className="track-card-motto"
                  style={{ color: track.mottoColor }}
                >
                  {track.motto}
                </span>
                <a
                  href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-arrow-circle"
                  aria-label={`Register for ${track.title}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar Container with Hiker & Globe */}
      <div className="tracks-bottom-section">
        {/* Bottom Left Mountain Hiker Artwork */}
        <div className="tracks-hiker-wrap" aria-hidden="true">
          <img
            src="/tracks/mountain_hiker_hd.webp"
            alt=""
            className="hiker-img"
            loading="lazy"
            decoding="async"
          />
          <div className="hiker-cursive">
            <span>Ideas<br />Create Change</span>
          </div>
        </div>

        {/* Bottom Center Pill Banner */}
        <div className="tracks-bottom-pill">
          <div className="tracks-pill-icon-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <div className="tracks-pill-text">
            <span className="tracks-pill-headline">DIFFERENT PROBLEMS</span>
            <span className="tracks-pill-subline">ONE SHARED TOMORROW</span>
          </div>

          <div className="tracks-pill-divider">
            <span className="tracks-pill-event">INNOVA X 2026</span>
            <span className="tracks-pill-motto">BUILD · INNOVATE · IMPACT</span>
          </div>
        </div>

        {/* Bottom Right Dotted World Globe */}
        <div className="tracks-bottom-globe-wrap" aria-hidden="true">
          <img
            src="/tracks/bottom_globe_hd.webp"
            alt=""
            className="bottom-globe-img"
            loading="lazy"
            decoding="async"
          />
          <div className="bottom-globe-text">
            <span>A MORE<br />INNOVATIVE<br />INCLUSIVE<br />SUSTAINABLE<br />WORLD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeTracks;
