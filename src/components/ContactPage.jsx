import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim()) {
      setFormStatus('error');
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setFormStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setFormStatus('error');
      setErrorMsg('Please enter a subject.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setFormStatus('error');
      setErrorMsg('Please enter your message (at least 5 characters).');
      return;
    }

    // Simulate submission
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  const contactCards = [
    {
      id: 'email',
      title: 'Email Us',
      value: 'innovax@svhce.ac.in',
      sub: 'We typically respond within 24 hours.',
      link: 'mailto:innovax@svhce.ac.in',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      id: 'phone',
      title: 'Call Us',
      value: '+91 98765 43210',
      sub: 'Mon – Sat, 9:00 AM – 6:00 PM (IST)',
      link: 'tel:+919876543210',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.52.59 3.68a1 1 0 01-.24 1.02l-2.23 2.09z" />
        </svg>
      ),
    },
    {
      id: 'college',
      title: 'Our College',
      value: 'Shree Venkateshwara Hi-Tech Engineering College',
      sub: 'Erode, Tamil Nadu, India – 638 057',
      link: 'https://maps.google.com/?q=Shree+Venkateshwara+Hi-Tech+Engineering+College+Erode',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: 'community',
      title: 'Community Support',
      value: 'Join our WhatsApp / Discord community',
      sub: 'Get updates, support and connect with fellow innovators.',
      link: 'https://chat.whatsapp.com/CExCZ2IY1ikElmZkulddTq',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="contact-section" id="contact">
      {/* Background Campus Scenery (Right-Aligned UHD Campus with Smooth Alpha Feathering) */}
      <div className="contact-campus-bg-layer" aria-hidden="true">
        <div className="contact-campus-glow-aura" />
        <img
          src="/contact.webp"
          alt="Shree Venkateshwara Hi-Tech Engineering College Campus"
          className="contact-campus-image"
          loading="lazy"
          decoding="async"
        />
        <div className="contact-campus-blend-overlay" />
      </div>

      {/* Top Section Header */}
      <div className="contact-top-sub-header">
        <div className="contact-header-center">
          <div className="contact-accent-line"></div>
          <span className="contact-event-name">I N N O V A &nbsp; X &nbsp; 2 0 2 6</span>
          <div className="contact-accent-line"></div>
        </div>
        <div className="contact-hackathon-sub">A GLOBAL ONLINE HACKATHON</div>
      </div>

      {/* Main Container */}
      <div className="contact-main-container">
        {/* Title Area with Ultra-Vivid Contrast & 3D Typography */}
        <div className="contact-title-area">
          <div className="contact-badge">
            <span className="badge-pulse-dot" />
            <span>24/7 ORGANIZING HELPDESK</span>
          </div>

          <h2 className="contact-main-heading">
            <span className="heading-dark">GET IN </span>
            <span className="heading-touch-3d">TOUCH</span>
          </h2>
          <p className="contact-sub-text-line1">Have questions, ideas, or need immediate support?</p>
          <p className="contact-sub-text-line2">We're here for you 24/7. Let's build a brighter tomorrow together.</p>
          <div className="contact-heading-accent-bar" aria-hidden="true"></div>
        </div>

        {/* Two-Column Layout: Left Cards + Center Message Form */}
        <div className="contact-content-grid">
          {/* Left Column: 4 Dark Navy Contact Cards */}
          <div className="contact-cards-stack">
            {contactCards.map((card) => (
              <a
                key={card.id}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-navy-card"
              >
                <div className="contact-card-icon-halo">
                  {card.icon}
                </div>
                <div className="contact-card-text">
                  <h4 className="card-title">{card.title}</h4>
                  <div className="card-value">{card.value}</div>
                  <p className="card-sub">{card.sub}</p>
                </div>
                <div className="contact-card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Center Column: Translucent Frosted Glass Message Form */}
          <div className="contact-form-panel">
            <div className="form-header-row">
              <div className="form-plane-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
              <div className="form-header-text">
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">We'd love to hear from you.</p>
              </div>
            </div>

            {formStatus === 'success' ? (
              <div className="form-success-message">
                <div className="success-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Our organizing team will respond within 24 hours.</p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => setFormStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form" noValidate>
                {formStatus === 'error' && (
                  <div className="form-error-banner" role="alert">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Row 1: Name and Email */}
                <div className="form-row-two-col">
                  <div className="form-field-group">
                    <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
                    <div className="input-with-icon">
                      <span className="field-svg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
                    <div className="input-with-icon">
                      <span className="field-svg-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="form-field-group">
                  <label htmlFor="contact-subject" className="visually-hidden">Subject</label>
                  <div className="input-with-icon">
                    <span className="field-svg-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="form-field-group">
                  <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
                  <div className="input-with-icon textarea-wrap">
                    <span className="field-svg-icon textarea-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </span>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message&#10;Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Row 4: Submit CTA */}
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <span className="btn-loading">
                      <span className="btn-spinner"></span>
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <svg className="btn-plane-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                      <span className="btn-text">Send Message</span>
                      <svg className="btn-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Frosted Feature Strip */}
      <div className="contact-bottom-strip-wrap">
        <div className="contact-bottom-strip">
          {/* Feature 1 */}
          <div className="contact-strip-item">
            <div className="contact-strip-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="contact-strip-text">
              <span className="strip-bold">SUPPORTIVE COMMUNITY</span>
              <span className="strip-light">You're not alone</span>
            </div>
          </div>

          <div className="contact-strip-divider"></div>

          {/* Feature 2 */}
          <div className="contact-strip-item">
            <div className="contact-strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
              </svg>
            </div>
            <div className="contact-strip-text">
              <span className="strip-bold">REAL SOLUTIONS</span>
              <span className="strip-light">For real problems</span>
            </div>
          </div>

          <div className="contact-strip-divider"></div>

          {/* Feature 3 */}
          <div className="contact-strip-item">
            <div className="contact-strip-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-2.22l2.36-2.36a1 1 0 0 1 1.41 1.41L14.41 15.7A1 1 0 0 1 13 16.5zm-2-2.22V16.5a1 1 0 0 1-1.41-.71l-2.36-2.36a1 1 0 1 1 1.41-1.41L11 14.28zM12 4c2.08 0 3.96.8 5.38 2.11L14.7 8.8a1 1 0 0 0-1.41 0L12 10.09 10.71 8.8a1 1 0 0 0-1.41 0L6.62 6.11A7.94 7.94 0 0 1 12 4z" />
                <path d="M7 11h2v2H7zm8 0h2v2h-2z" />
              </svg>
            </div>
            <div className="contact-strip-text">
              <span className="strip-bold">OPEN COLLABORATION</span>
              <span className="strip-light">Across the globe</span>
            </div>
          </div>

          <div className="contact-strip-divider"></div>

          {/* Feature 4 */}
          <div className="contact-strip-item">
            <div className="contact-strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="contact-strip-text">
              <span className="strip-bold">A BRIGHTER TOMORROW</span>
              <span className="strip-light">Starts with you</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Row */}
      <div className="contact-sub-footer-row">
        {/* Left Branding */}
        <div className="contact-footer-left">
          <span className="foot-brand-title">INNOVA X 2026</span>
          <span className="foot-brand-motto">BUILD · INNOVATE · IMPACT</span>
        </div>

        {/* Center Socials */}
        <div className="contact-footer-center">
          <div className="foot-social-line"></div>
          <div className="foot-social-icons">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Discord */}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
          <span className="foot-stay-connected">Let's Stay Connected</span>
          <div className="foot-social-line"></div>
        </div>

        {/* Right Tagline */}
        <div className="contact-footer-right">
          <div className="foot-right-line"></div>
          <div className="foot-right-texts">
            <span className="foot-right-line1">From Erode</span>
            <span className="foot-right-line2">To a Brighter World</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
