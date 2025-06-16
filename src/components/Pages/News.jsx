import React from 'react';
import Navbar from '../Layout/Navbar';
import News from '../Home/News';
import Blog from '../Home/Blog';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function NewsPage() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <News />
          <Blog />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 