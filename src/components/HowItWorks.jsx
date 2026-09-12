import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Register',
      desc: 'Sign up on our platform and complete your profile to get started.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="12" cy="14" r="2" />
          <path d="M9 18a3 3 0 0 1 6 0" />
          <circle cx="18" cy="18" r="3" fill="#1a56db" stroke="none" />
          <line x1="18" y1="16.5" x2="18" y2="19.5" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="16.5" y1="18" x2="19.5" y2="18" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Form Your Team',
      desc: 'Team up with 2–5 members or participate solo. Find peers, brainstorm and get ready!',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          <circle cx="19" cy="17" r="3" fill="#1a56db" />
          <line x1="19" y1="15.5" x2="19" y2="18.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17.5" y1="17" x2="20.5" y2="17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Choose a Challenge',
      desc: 'Explore real-world problem statements and pick the one that excites you.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
          <line x1="12" y1="5" x2="12" y2="9" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Build & Innovate',
      desc: 'Develop your solution with guidance, resources and mentorship from experts.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Submit & Showcase',
      desc: 'Submit your project and present it to a global audience. Get a chance to win exciting prizes and opportunities!',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="hiw-section" id="how-it-works">
      {/* 1. Left Handwritten Cursive Script */}
      <div className="hiw-left-cursive" aria-hidden="true">
        <span className="cursive-from">From</span>
        <span className="cursive-ideas">Ideas to</span>
        <span className="cursive-impact">Impact</span>
        <div className="cursive-underline-left"></div>
      </div>

      {/* 2. Right Handwritten Cursive Script */}
      <div className="hiw-right-cursive" aria-hidden="true">
        <span>Innovate</span>
        <span>Collaborate</span>
        <span>Create Change</span>
      </div>

      {/* 3. Hero Heading Area */}
      <div className="hiw-header">
        {/* 100% Pure Code 3D Metallic Chrome Title 'HOW IT WORKS' */}
        <div className="hiw-title-3d-wrap">
          {/* Layer 1: 3D Extrusion Shadow */}
          <div className="hiw-title-extrusion" aria-hidden="true">
            <span className="ext-howit">HOW IT</span>
            <span className="ext-works">WORKS</span>
          </div>

          {/* Layer 2: Front Metallic Chrome Face */}
          <h2 className="hiw-title-front">
            <span className="chrome-howit">HOW IT</span>
            <span className="chrome-works">WORKS</span>
          </h2>
        </div>

        <div className="hiw-sub-tagline">
          SIMPLE STEPS. &nbsp;BIGGER POSSIBILITIES.
        </div>

        <p className="hiw-lead-desc">
          Turn your ideas into real solutions. Here's how you can be a part of Innova X 2026.
        </p>
      </div>

      {/* 4. Process Cards Flow with Connecting Chevrons */}
      <div className="hiw-cards-flow-wrap">
        <div className="hiw-cards-flow">
          {steps.map((step, idx) => (
            <div className="hiw-card-group" key={idx}>
              {/* Process Card */}
              <div className="hiw-card">
                {/* Large Overlapping Electric Blue Circular Icon */}
                <div className="hiw-icon-halo">
                  <div className="hiw-icon-circle">
                    {step.icon}
                  </div>
                </div>

                {/* Step Number */}
                <div className="hiw-step-num">{step.number}</div>

                {/* Step Title */}
                <h3 className="hiw-step-title">{step.title}</h3>

                {/* Step Description */}
                <p className="hiw-step-desc">{step.desc}</p>
              </div>

              {/* Connecting Blue Chevron (between cards only) */}
              {idx < steps.length - 1 && (
                <div className="hiw-connector-chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 5. Photographic Panorama Campus Lower Section */}
      <div className="hiw-campus-lower-section">
        {/* Soft top gradient blend transition from cards */}
        <div className="hiw-campus-top-blend" aria-hidden="true"></div>

        {/* Real Panoramic Campus Image — 100% Clean Ultra-HD svhechd.webp */}
        <img
          src="/svhechd.webp"
          alt="Shree Venkateshwara Hi-Tech Engineering College Campus"
          className="hiw-campus-bg-img"
          loading="lazy"
          decoding="async"
        />

        {/* Interactive Floating Pill CTA in Center */}
        <div className="hiw-cta-center-wrap">
          <a
            href="https://unstop.com/p/innova-x-2k26-global-online-hackathon-shree-venkateshwara-hi-tech-engineering-college-1754160"
            target="_blank"
            rel="noopener noreferrer"
            className="hiw-btn-cta"
          >
            <span>Be a Part of Something Bigger</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Bottom Feature Strip & Footer Branding */}
        <div className="hiw-bottom-strip-wrap">
          <div className="hiw-bottom-strip">
            {/* Item 1 */}
            <div className="strip-item">
              <div className="strip-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-main">LEARN</span>
                <span className="strip-sub">NEW SKILLS</span>
              </div>
            </div>

            <div className="strip-divider"></div>

            {/* Item 2 */}
            <div className="strip-item">
              <div className="strip-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-main">SOLVE</span>
                <span className="strip-sub">REAL PROBLEMS</span>
              </div>
            </div>

            <div className="strip-divider"></div>

            {/* Item 3 */}
            <div className="strip-item">
              <div className="strip-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-main">MEET</span>
                <span className="strip-sub">AMAZING PEOPLE</span>
              </div>
            </div>

            <div className="strip-divider"></div>

            {/* Item 4 */}
            <div className="strip-item">
              <div className="strip-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.13 2.86a2.44 2.44 0 0 0-2.26 0L4 6.74v5.48c0 4.97 3.39 9.61 8 10.78 4.61-1.17 8-5.81 8-10.78V6.74l-6.87-3.88zM12 11.99h5c-.47 3.7-2.67 6.94-5 8v-8z" />
                </svg>
              </div>
              <div className="strip-text">
                <span className="strip-main">CREATE</span>
                <span className="strip-sub">LASTING IMPACT</span>
              </div>
            </div>

            <div className="strip-divider"></div>

            {/* Branding */}
            <div className="strip-branding">
              <span className="strip-brand-title">INNOVA X 2026</span>
              <span className="strip-brand-motto">BUILD · INNOVATE · IMPACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
