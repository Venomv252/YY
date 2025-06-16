import React from 'react';
import Navbar from '../Layout/Navbar';
import AchievementsSection from '../Home/AchievementsSection';
import ProjectsSection from '../Home/ProjectsSection';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function AchievementsPage() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <AchievementsSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 