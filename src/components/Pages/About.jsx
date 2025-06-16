import React from 'react';
import Navbar from '../Layout/Navbar';
import About from '../Home/About';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function AboutPage() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <About />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 