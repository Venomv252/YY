import React from 'react';
import Navbar from '../Layout/Navbar';
import Services from '../Home/Services';
import Analytics from '../Home/Analytics';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function ProgramsPage() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <Services />
          <Analytics />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 