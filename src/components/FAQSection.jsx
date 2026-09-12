import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default

  const categories = [
    {
      id: 'General',
      label: 'General',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 'Participation',
      label: 'Participation',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      id: 'Submission',
      label: 'Submission',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: 'Judging',
      label: 'Judging',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
          <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
    },
    {
      id: 'Prizes',
      label: 'Prizes',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a3 3 0 0 0-3-3c-1.4 0-2.6.96-2.91 2.26L12 4.6l-.09-.34C11.6 2.96 10.4 2 9 2a3 3 0 0 0-3 3c0 .35.07.69.18 1H4a2 2 0 0 0-2 2v3c0 .55.45 1 1 1h1v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9h1c.55 0 1-.45 1-1V8a2 2 0 0 0-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 17H6v-9h12v9zm2-11H4V8h16v2z" />
        </svg>
      ),
    },
    {
      id: 'Technical',
      label: 'Technical',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: 'Others',
      label: 'Others',
      count: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  const allFaqs = [
    // General
    {
      category: 'General',
      q: 'Who can participate in Innova X 2026?',
      a: 'Innova X 2026 is open to all university students, college attendees, self-taught developers, and tech innovators worldwide. Both individual creators and squads of 1 to 4 members are warmly welcomed!',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      category: 'General',
      q: 'Is it free to participate in the hackathon?',
      a: 'Registration is just ₹299 per team. This grants full access to all 5 challenge tracks, 1-on-1 industry mentor sessions, masterclasses, certified credentials, and grand awards.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="6" x2="18" y2="6" />
          <line x1="6" y1="10.5" x2="18" y2="10.5" />
          <path d="M6 6h6.5a4.5 4.5 0 0 1 0 9H6" />
          <path d="M9 15l7 6" />
        </svg>
      ),
    },
    {
      category: 'General',
      q: 'What makes Innova X 2026 unique?',
      a: 'Unlike traditional hackathons, Innova X connects participants directly with top industry architects, startup founders, and mentors, offering live feedback, verified internships, and cash rewards.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },

    // Participation
    {
      category: 'Participation',
      q: 'Can I participate as an individual or do I need a squad?',
      a: 'Both individual participation and squads (up to 4 members) are completely allowed! You can also meet talented peers and find squadmates in our official community groups.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      category: 'Participation',
      q: 'How many members can be in a team?',
      a: 'Teams can range from 1 to 4 members. Inter-college, inter-department, and cross-country collaborations are strongly supported and encouraged.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      category: 'Participation',
      q: 'Can teammates be from different colleges or departments?',
      a: 'Yes! Cross-college and multi-disciplinary teams (e.g., computer science students teaming with design or healthcare enthusiasts) are fully eligible and celebrated.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },

    // Submission
    {
      category: 'Submission',
      q: 'When is the project submission deadline?',
      a: 'All project source code repositories, demonstration links, and pitch presentations must be submitted on the Unstop portal before the final round timer concludes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      category: 'Submission',
      q: 'What are the required deliverables for submission?',
      a: 'Every team must submit: (1) A public GitHub/GitLab repository with clean code, (2) A concise 2–3 minute video demo walk-through, and (3) A project presentation slide deck.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="12" y2="16" />
        </svg>
      ),
    },
    {
      category: 'Submission',
      q: 'Can we update our submission before the final deadline?',
      a: 'Yes! You can edit and refine your Unstop submission materials as many times as you like until the final clock reaches zero.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },

    // Judging
    {
      category: 'Judging',
      q: 'How will the projects be evaluated?',
      a: 'Submissions are assessed across 4 equal pillars: Innovation & Novelty (25%), Technical Feasibility (25%), Real-World Scalability (25%), and Presentation Quality (25%).',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      category: 'Judging',
      q: 'Who evaluates the final projects?',
      a: 'The grand jury consists of esteemed software architects, AI researchers, industry mentors, and startup venture leads from global tech firms.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      category: 'Judging',
      q: 'Will there be a live project presentation round?',
      a: 'Yes! Top finalist squads will present live virtually to our jury panel, demo their prototype, and answer brief technical questions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },

    // Prizes
    {
      category: 'Prizes',
      q: 'How will the cash awards be disbursed?',
      a: 'Cash prizes and verified winner certificates will be transferred directly via bank transfer within 14 business days of the grand results declaration.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a3 3 0 0 0-3-3c-1.4 0-2.6.96-2.91 2.26L12 4.6l-.09-.34C11.6 2.96 10.4 2 9 2a3 3 0 0 0-3 3c0 .35.07.69.18 1H4a2 2 0 0 0-2 2v3c0 .55.45 1 1 1h1v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9h1c.55 0 1-.45 1-1V8a2 2 0 0 0-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 17H6v-9h12v9zm2-11H4V8h16v2z" />
        </svg>
      ),
    },
    {
      category: 'Prizes',
      q: 'Will all participants receive certificates?',
      a: 'Yes! Every participant who submits an approved project will be awarded an official verified digital Certificate of Participation. Winners receive Certificates of Excellence.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      category: 'Prizes',
      q: 'What additional perks do winners receive?',
      a: 'Winners gain exclusive internship interview opportunities with Innovation Hacks, cloud computing credits, startup mentorship, and featured spots in global press releases.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },

    // Technical
    {
      category: 'Technical',
      q: 'What are the official challenge tracks?',
      a: 'The 5 challenge tracks are: AI for Healthcare, AI for Agriculture, AI for Climate & Sustainability, AI for Public Safety & Disaster Response, and Open Innovation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      category: 'Technical',
      q: 'Can we use pre-existing open-source libraries or APIs?',
      a: 'Yes! You are encouraged to use open-source frameworks, packages, and public AI APIs (OpenAI, Gemini, Hugging Face, etc.). However, core project logic must be built during the event.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      category: 'Technical',
      q: 'Are specific tech stacks or languages required?',
      a: 'No limitations! You can construct your project in React, Next.js, Python, Flutter, Swift, Node.js, Go, or any tech stack suitable for your solution.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },

    // Others
    {
      category: 'Others',
      q: 'Whom can I contact for urgent queries?',
      a: 'Reach our dedicated 24/7 organizing desk via official WhatsApp groups, email at support@innovax.org, or click "Contact Us" on the right.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      category: 'Others',
      q: 'Is the hackathon fully online or offline?',
      a: 'Innova X 2026 is 100% online, allowing builders from across India and the globe to compete seamlessly from anywhere without travel hassles.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      category: 'Others',
      q: 'Can recent college graduates participate?',
      a: 'Yes! The Open Innovation track warmly invites recent graduates, independent innovators, and budding creators to showcase revolutionary solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
  ];

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenFaq(0); // Open first question of new category
  };

  const currentFaqs = allFaqs.filter((item) => item.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      {/* Background Campus Scenery with Seamless Alpha Feathering and Blend Overlays */}
      <div className="faq-campus-bg-wrap" aria-hidden="true">
        <div className="faq-campus-glow-aura" />
        <img
          src="/contact.webp"
          alt="Shree Venkateshwara Hi-Tech Engineering College Campus"
          className="faq-campus-img"
          loading="lazy"
          decoding="async"
        />
        <div className="faq-campus-blend-overlay" />
      </div>

      {/* Main Container with Expanded Desktop Width */}
      <div className="faq-container">
        {/* LEFT COLUMN: Huge 3D Master Typography + Subtitle + Artistic Motivation */}
        <div className="faq-left-col">
          {/* Top Pill Badge matching Hero & About */}
          <div className="faq-badge">
            <span className="badge-pulse-dot" />
            <span>HELP &amp; SUPPORT CENTER</span>
          </div>

          {/* Huge 3D Metallic Chrome Title */}
          <div className="faq-title-3d-wrap">
            <div className="faq-title-extrusion" aria-hidden="true">
              <span className="faq-ext-line">FREQUENTLY</span>
              <span className="faq-ext-line">ASKED</span>
              <span className="faq-ext-line">QUESTIONS</span>
            </div>

            <h2 className="faq-title-front">
              <span className="faq-chrome-navy">FREQUENTLY</span>
              <span className="faq-chrome-blue">ASKED</span>
              <span className="faq-chrome-cyan">QUESTIONS</span>
            </h2>
          </div>

          {/* Sub-tagline with Cyan Bullet */}
          <div className="faq-sub-tagline">
            <span>GET CLEAR ANSWERS</span>
            <span className="tagline-dot">•</span>
            <span>START WITH CONFIDENCE</span>
          </div>

          {/* High-Readability Lead Description */}
          <p className="faq-lead-desc">
            Find immediate answers on competition tracks, eligibility, submissions, mentorship, and grand prizes.
          </p>

          <div className="faq-accent-line" />

          {/* Artistic Cursive Motivational Callout */}
          <div className="faq-left-cursive">
            <span className="cursive-quote-mark">“</span>
            <span className="cursive-line1">Curious Minds</span>
            <span className="cursive-line2">Build a</span>
            <span className="cursive-line3">Brighter Tomorrow</span>
          </div>
        </div>

        {/* CENTER CATEGORY SIDEBAR */}
        <div className="faq-category-sidebar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`faq-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
                type="button"
              >
                <span className="cat-icon-wrap">{cat.icon}</span>
                <span className="cat-label">{cat.label}</span>
                {isActive && <span className="cat-active-pill" />}
              </button>
            );
          })}
        </div>

        {/* RIGHT FAQ ACCORDION AREA */}
        <div className="faq-accordion-col">
          <div className="faq-accordion-list">
            {currentFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={`${faq.category}-${index}`}
                  className={`faq-card ${isOpen ? 'expanded' : ''}`}
                >
                  <button
                    className="faq-card-header"
                    onClick={() => toggleFaq(index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-left">
                      <div className="faq-icon-bubble">{faq.icon}</div>
                      <span className="faq-question-text">{faq.q}</span>
                    </div>

                    <div className="faq-chevron-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={isOpen ? 'rotate-up' : 'rotate-down'}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-card-body">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE CALLOUT CARD */}
        <div className="faq-right-callout-wrap">
          {/* Top Cursive Text */}
          <div className="callout-cursive-top" aria-hidden="true">
            <span>Questions today.</span>
            <span>Innovations tomorrow.</span>
          </div>

          {/* Dark Navy Glass Card */}
          <div className="faq-callout-card">
            <div className="callout-bulb-halo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                <line x1="12" y1="6" x2="12" y2="10" />
              </svg>
            </div>

            <h3 className="callout-title">
              Still have<br />a question?
            </h3>
            <p className="callout-sub">Our organizing team is here 24/7!</p>

            <a
              href="#contact"
              className="callout-btn"
            >
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Bottom Cursive Text */}
          <div className="callout-cursive-bottom" aria-hidden="true">
            <span>Ideas Create Change</span>
            <div className="callout-underline"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURE STRIP */}
      <div className="faq-bottom-strip-wrap">
        <div className="faq-bottom-strip">
          {/* Item 1 */}
          <div className="faq-strip-item">
            <div className="faq-strip-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="faq-strip-text">
              <span className="strip-title">REAL ANSWERS</span>
              <span className="strip-subtitle">No Confusion</span>
            </div>
          </div>

          <div className="faq-strip-sep"></div>

          {/* Item 2 */}
          <div className="faq-strip-item">
            <div className="faq-strip-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            </div>
            <div className="faq-strip-text">
              <span className="strip-title">QUICK SUPPORT</span>
              <span className="strip-subtitle">We're Here for You</span>
            </div>
          </div>

          <div className="faq-strip-sep"></div>

          {/* Item 3 */}
          <div className="faq-strip-item">
            <div className="faq-strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="faq-strip-text">
              <span className="strip-title">FOCUSED ON YOU</span>
              <span className="strip-subtitle">Your Ideas Matter</span>
            </div>
          </div>

          <div className="faq-strip-sep"></div>

          {/* Item 4 */}
          <div className="faq-strip-item">
            <div className="faq-strip-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="faq-strip-text">
              <span className="strip-title">A BRIGHTER TOMORROW</span>
              <span className="strip-subtitle">Together</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
