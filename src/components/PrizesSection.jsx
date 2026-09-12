import React from 'react';
import './PrizesSection.css';

const PrizesSection = () => {
  const prizes = [
    {
      id: '2nd-prize',
      rank: '2ND PRIZE',
      tier: 'silver',
      imgSrc: '/prize_2nd_silver_uhd.webp',
      alt: 'INNOVA X 2026 — 2nd Prize Silver Trophy and Rewards',
      badgeText: '🥈 2ND PRIZE',
      headline: 'ChatGPT Plus & Internship',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      borderColor: '#38bdf8',
    },
    {
      id: '1st-prize',
      rank: '1ST PRIZE',
      tier: 'gold',
      isChampion: true,
      imgSrc: '/prize_1st_gold_uhd.webp',
      alt: 'INNOVA X 2026 — 1st Prize Gold Trophy and Rewards Champion',
      badgeText: '👑 1ST PRIZE · CHAMPION',
      headline: 'Claude Pro & Internship',
      glowColor: 'rgba(245, 158, 11, 0.65)',
      borderColor: '#fbbf24',
    },
    {
      id: '3rd-prize',
      rank: '3RD PRIZE',
      tier: 'bronze',
      imgSrc: '/prize_3rd_bronze_uhd.webp',
      alt: 'INNOVA X 2026 — 3rd Prize Bronze Trophy and Rewards',
      badgeText: '🥉 3RD PRIZE',
      headline: 'emergent.sh & Internship',
      glowColor: 'rgba(217, 119, 6, 0.45)',
      borderColor: '#f59e0b',
    },
  ];

  return (
    <section className="prizes-section" id="prizes">
      {/* 1. Background Cyber Tech Dot Grid Pattern */}
      <div className="prizes-bg-grid" aria-hidden="true" />

      {/* 2. Ambient Colorful Auroras & Glow Lighting (Optimized Without GPU Lag) */}
      <div className="prizes-ambient-glow" aria-hidden="true">
        <div className="prizes-glow-orb glow-gold-center" />
        <div className="prizes-glow-orb glow-cyan-left" />
        <div className="prizes-glow-orb glow-amber-right" />
        <div className="prizes-concentric-rings" />
      </div>

      {/* 3. Subtle Atmospheric Watermark in Upper Background */}
      <div className="prizes-bg-typography" aria-hidden="true">
        <span className="bg-watermark-title">CHAMPIONS</span>
      </div>

      {/* 4. Left & Right Atmospheric Flank Panels (Unified Flex Columns — Zero Overlaps) */}
      <aside className="prizes-flank-panel flank-left" aria-hidden="true">
        <div className="prizes-cursive-callout">
          <span className="cursive-quote">“</span>
          <span className="cursive-phrase">Hard Work Deserves</span>
          <span className="cursive-highlight">Grand Celebrations</span>
          <div className="cursive-accent-bar" />
        </div>

        <div className="prizes-strip-card">
          <div className="strip-header-row">
            <span className="strip-pulse-dot dot-cyan" />
            <span className="strip-header-title">GLOBAL PODIUM</span>
          </div>
          <div className="strip-divider-line" />
          <div className="strip-tags-col">
            <span>GOLD &bull; SILVER &bull; BRONZE</span>
            <span>TOP 3 SQUADS HONORED</span>
            <span>GLOBAL INTERNSHIPS</span>
          </div>
        </div>
      </aside>

      <aside className="prizes-flank-panel flank-right" aria-hidden="true">
        <div className="prizes-cursive-callout">
          <span className="cursive-quote">“</span>
          <span className="cursive-phrase">Top 3 Innovators</span>
          <span className="cursive-highlight">Take the Spotlight</span>
          <div className="cursive-accent-bar" />
        </div>

        <div className="prizes-strip-card">
          <div className="strip-header-row">
            <span className="strip-pulse-dot dot-gold" />
            <span className="strip-header-title">INNOVATOR AWARDS</span>
          </div>
          <div className="strip-divider-line" />
          <div className="strip-tags-col">
            <span>CLAUDE PRO SUBSCRIPTION</span>
            <span>CHATGPT PLUS ACCESS</span>
            <span>EMERGENT.SH CREDITS</span>
          </div>
        </div>
      </aside>

      {/* 6. Floating Sparkle Stars */}
      <div className="prizes-bg-sparkles" aria-hidden="true">
        <span className="sparkle-glyph sp-1">✦</span>
        <span className="sparkle-glyph sp-2">★</span>
        <span className="sparkle-glyph sp-3">✦</span>
        <span className="sparkle-glyph sp-4">✧</span>
        <span className="sparkle-glyph sp-5">✦</span>
        <span className="sparkle-glyph sp-6">★</span>
      </div>

      {/* Main Responsive Stage */}
      <div className="prizes-container">
        {/* Header Block Matching Hero Page Scale & Color Theme */}
        <div className="prizes-header">
          <div className="prizes-category-badge">
            <span className="badge-pulse-dot" />
            <span>A GLOBAL PLATFORM FOR BOLD REWARDS</span>
          </div>

          <h2 className="prizes-master-title">
            <span className="prizes-title-main">PRIZES</span>
            <span className="prizes-title-amp">&amp;</span>
            <span className="prizes-title-accent">REWARDS</span>
          </h2>

          <div className="prizes-tagline">
            RECOGNIZING IDEAS THAT CREATE REAL IMPACT
          </div>

          <p className="prizes-lead">
            Win subscriptions, global opportunities and more &mdash; because{' '}
            <strong>great ideas deserve greater support</strong>.
          </p>
        </div>

        {/* 3 Podiums Showcase Cards with 100% Full Uncropped Trophy Artwork */}
        <div className="prizes-cards-grid">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className={`prize-card-col tier-${prize.tier} ${
                prize.isChampion ? 'card-champion' : ''
              }`}
            >
              {/* Floating Top Rank Pill */}
              <div className="prize-rank-pill">
                <span className="rank-pill-text">{prize.badgeText}</span>
              </div>

              {/* Luxury Beveled Frame Housing the Complete Uncropped Image */}
              <div className="prize-showcase-frame">
                <div className="prize-frame-sheen" />

                {/* Trophy Canvas: 100% Complete Trophy Visible without Cropping */}
                <div className="prize-img-canvas">
                  <img
                    src={prize.imgSrc}
                    alt={prize.alt}
                    className="prize-showcase-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Interactive Action Dock: Placed Cleanly Below Trophy Artwork */}
                <div className="prize-interactive-footer">
                  <div className="prize-quick-summary">
                    <span className="summary-headline">{prize.headline}</span>
                    <span className="summary-sub">Global Remote Internship + .com Domain</span>
                  </div>
                  <a
                    href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prize-claim-btn"
                    title={`Compete for ${prize.rank} on Unstop`}
                  >
                    <span>Register to Win</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stepped Stage Plinth Rim with Inscription */}
        <div className="prizes-stage-plinth-rim" aria-hidden="true">
          <div className="plinth-neon-line" />
          <span className="plinth-motto">
            INNOVATE &nbsp;&bull;&nbsp; COMPETE &nbsp;&bull;&nbsp; MAKE AN IMPACT
          </span>
          <div className="plinth-neon-line" />
        </div>

        {/* Floating Bottom Feature Strip */}
        <div className="prizes-feature-strip-wrap">
          <div className="prizes-feature-strip">
            <div className="strip-item">
              <div className="strip-icon-pod">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-title">GLOBAL OPPORTUNITIES</span>
                <span className="strip-desc">Exposure Beyond Boundaries</span>
              </div>
            </div>

            <div className="strip-divider" />

            <div className="strip-item">
              <div className="strip-icon-pod">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-title">INDUSTRY RECOGNITION</span>
                <span className="strip-desc">Get Noticed by Experts</span>
              </div>
            </div>

            <div className="strip-divider" />

            <div className="strip-item">
              <div className="strip-icon-pod">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
                  <path d="M14 2h7v7l-3-3-4.5 4.5-2.8-2.8L17 3.4z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-title">REAL-WORLD IMPACT</span>
                <span className="strip-desc">Turn Ideas into Reality</span>
              </div>
            </div>

            <div className="strip-divider" />

            <div className="strip-item">
              <div className="strip-icon-pod">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-title">A BRIGHTER TOMORROW</span>
                <span className="strip-desc">Starts with You</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
