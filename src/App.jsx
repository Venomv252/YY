import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Analytics from './components/Home/Analytics';
import Blog from './components/Home/Blog';
import FAQ from './components/Home/FAQ';
import News from './components/Home/News';
import Alumni from './components/Home/Alumni';
import Footer from './components/Footer/Footer';
import ChatWidget from './components/Chat/ChatWidget';
import AchievementsSection from './components/Home/AchievementsSection';
import ProjectsSection from './components/Home/ProjectsSection';
import QuizSection from './components/Home/QuizSection';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import TermsOfService from './components/Pages/TermsOfService';
import Disclaimer from './components/Pages/Disclaimer';
import SiteMap from './components/Pages/SiteMap';
import AchievementDetail from './components/Pages/AchievementDetail';
import './App.css';
// import TimelineSection from './components/Home/TimelineSection';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div className="main-container">
            <Navbar />
            <main>
              <section className="section">
                <div className="grid-container">
                  <Hero />
                </div>
              </section>
              
              <About />
              <Services />
              <Analytics />
              <Blog />
              {/* <TimelineSection/> */}
              <News />
              <Alumni />
              <AchievementsSection/>
              <ProjectsSection/>
              <QuizSection/>
              <FAQ />
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />

        {/* Footer Link Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/site-map" element={<SiteMap />} />

        {/* Achievement Detail Page */}
        <Route path="/achievement/:id" element={<AchievementDetail />} />
      </Routes>
    </Router>
  );
}

export default App;