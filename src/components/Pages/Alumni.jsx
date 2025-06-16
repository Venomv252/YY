import React, { useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import Alumni from '../Home/Alumni';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function AlumniPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <Alumni />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 