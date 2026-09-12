import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Right Side Futuristic Illustration — Seamlessly Blended UHD Artwork */}
      <div className="hero-artwork-container" aria-hidden="true">
        <div className="hero-artwork-frame">
          <img
            src="/hero_workspace_uhd.webp"
            alt="INNOVA X Global Hackathon Innovation Environment"
            className="hero-artwork-image"
            decoding="async"
          />

          {/* Holographic Glowing Earth Overlay Text */}
          <div className="hero-globe-hologram-text">
            <span>IDEAS</span>
            <span>TECHNOLOGY</span>
            <span>PEOPLE</span>
            <span className="glow-bright">A BRIGHTER</span>
            <span className="glow-bright">TOMORROW</span>
          </div>

          {/* Top Right Sky Badge */}
          <div className="hero-sky-badge">
            <span>INNOVATION</span>
            <span>HAS NO</span>
            <span>BORDERS</span>
            <div className="sky-badge-line"></div>
          </div>

          {/* Ambient Right Text */}
          <div className="hero-ambient-badge">
            <span>IDEAS</span>
            <span>PEOPLE</span>
            <span>TECHNOLOGY</span>
            <span>IMPACT</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Container */}
      <div className="hero-wrapper">
        <div className="hero-left-column">
          {/* Top category badge */}
          <div className="hero-badge">A GLOBAL PLATFORM FOR BOLD IDEAS</div>

          {/* Exact 3D Metallic Chrome & Neon Title */}
          <div className="hero-title-container">
            <div className="hero-title-crop-box">
              <img
                src="/iinovaxxx.webp"
                alt="INNOVA X 2026"
                className="hero-title-artwork"
                decoding="async"
              />
            </div>
            <h1 className="sr-only">INNOVA X 2026 - Global Online Hackathon</h1>
          </div>

          {/* Subtitles matching the exact typography */}
          <h2 className="hero-subhead">GLOBAL ONLINE HACKATHON</h2>
          <div className="hero-tagline">
            BUILD &nbsp;<span className="tagline-dot">•</span>&nbsp; INNOVATE &nbsp;<span className="tagline-dot">•</span>&nbsp; IMPACT
          </div>

          {/* Description */}
          <p className="hero-desc">
            Join a global community of students, developers, AI enthusiasts and innovators
            to create real-world solutions using AI and emerging technologies.
          </p>

          {/* Dual CTAs */}
          <div className="hero-button-group">
            <a
              href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register-main"
            >
              <span className="btn-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <span className="btn-text">Register on Unstop</span>
              <svg className="btn-diag-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>

            <a
              href="https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-main"
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Join WhatsApp Community</span>
            </a>
          </div>

          {/* Four Information Stats */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-glyph">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </span>
              <div className="stat-content">
                <span className="stat-val">₹299</span>
                <span className="stat-sub">per Team</span>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-glyph">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
              <div className="stat-content">
                <span className="stat-val">1 – 4</span>
                <span className="stat-sub">Members</span>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-glyph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </span>
              <div className="stat-content">
                <span className="stat-val">100%</span>
                <span className="stat-sub">Online</span>
              </div>
            </div>

            <div className="stat-item">
              <span className="stat-glyph">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              <div className="stat-content">
                <span className="stat-val">Global</span>
                <span className="stat-sub">Participation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
