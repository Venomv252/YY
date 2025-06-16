import React from 'react';
import Navbar from '../Layout/Navbar';
import QuizSection from '../Home/QuizSection';
import Footer from '../Footer/Footer';
import ChatWidget from '../Chat/ChatWidget';

export default function QuizPage() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="pt-20">
          <QuizSection />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
} 