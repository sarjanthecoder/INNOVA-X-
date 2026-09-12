import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import AboutPage from './components/AboutPage.jsx';
import WhyInnovaX from './components/WhyInnovaX.jsx';
import ChallengeTracks from './components/ChallengeTracks.jsx';
import PrizesSection from './components/PrizesSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FAQSection from './components/FAQSection.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Section 1: Hero — INNOVA X 2026 */}
        <Hero />

        {/* Section 2: Features Bar */}
        <Features />

        {/* Section 3: About College */}
        <AboutPage />

        {/* Section 4: Why INNOVA X? */}
        <WhyInnovaX />

        {/* Section 5: 5 Challenge Tracks */}
        <ChallengeTracks />

        {/* Section 6: Prizes & Rewards */}
        <PrizesSection />

        {/* Section 7: How It Works */}
        <HowItWorks />

        {/* Section 8: FAQ */}
        <FAQSection />

        {/* Section 9: Contact Page */}
        <ContactPage />

        {/* Section 10: Footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;
