import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-primary to-soft-champagne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-rich-black">
            About YugaYatra Retail <span className="text-gradient">(OPC) Pvt Ltd</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="prose prose-lg max-w-none text-rich-black/90">
            <p className="text-lg leading-relaxed mb-6">
              At YugaYatra Retail (OPC) Pvt Ltd, we are committed to transforming businesses through cutting-edge digital solutions. Our mission is to empower organizations with innovative technology and strategic digital services that drive growth and success in the modern digital landscape.
            </p>
          </div>
        </motion.div>

        {/* Our Purpose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-rich-black">
            Our <span className="text-gradient">Purpose</span>
          </h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <p className="text-lg leading-relaxed text-rich-black/90">
              At YugaYatra Retail (OPC) Pvt Ltd, we are committed to transforming businesses through cutting-edge digital solutions. Our mission is to empower organizations with innovative technology and strategic digital services that drive growth and success in the modern digital landscape.
            </p>
          </div>
        </motion.div>

        {/* Company Details - Subtle Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 inline-flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-rich-black/60">
            <span>PAN: AABCY8389C</span>
            <span>UDYAM: KR-03-0421327</span>
            <span>CIN: U47912KA2024OPC188603</span>
            <span>FSSAI: 21224007001166</span>
            <span>TM Application No: 6508313</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-lavish-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;