import React from 'react';
import Navbar from '../components/Layout/Navbar';
import About from '../components/Home/About';
import Footer from '../components/Footer/Footer';

const AboutPage = () => (
  <>
    <Navbar />
    <main>
      <About />
    </main>
    <Footer />
  </>
);

export default AboutPage;
