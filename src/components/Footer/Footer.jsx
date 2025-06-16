import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGithub, FaCode } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gradient-to-b from-rich-black to-black text-white border-t border-lavish-gold/30">
      {/* Decorative top border with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-lavish-gold to-secondary animate-gradient-x"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">YugaYatra</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering retail excellence through innovative solutions and comprehensive training programs.
              Building the future of retail, one professional at a time.
            </p>
            <div className="flex space-x-5 pt-4">
              {[
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/debashish-kumar-sah-6b3b51312/" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaFacebook, href: "#" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rich-black p-2.5 rounded-full text-gray-300 hover:text-lavish-gold hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 md:mt-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Programs', href: '/programs' },
                { name: 'News & Blog', href: '/news' },
                { name: 'Alumni', href: '/alumni' },
                { name: 'Achievements', href: '/achievements' },
                { name: 'Quiz', href: '/quiz' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy-policy' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-lavish-gold transition-colors duration-300 text-sm flex items-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="mr-2">→</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: HiLocationMarker, text: 'Electronic City, Phase 1, Bengaluru, Karnataka, India' },
                { icon: HiPhone, text: '+91 8757728679' },
                { icon: HiMail, text: 'yugayatra@gmail.com' }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm group hover:text-lavish-gold transition-colors duration-300">
                  <item.icon size={20} className="mt-0.5 flex-shrink-0 group-hover:text-lavish-gold transition-colors duration-300" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-gradient">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-5">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-rich-black/50 border border-lavish-gold/30 rounded-lg focus:outline-none focus:border-lavish-gold text-sm transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="modern-button w-full"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Developer Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-lavish-gold/20 mt-10 pt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-secondary to-lavish-gold p-0.5 rounded-full mr-4">
                <div className="bg-rich-black p-2 rounded-full">
                  <FaCode size={24} className="text-lavish-gold" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gradient">Developer Contact</h4>
                <p className="text-gray-300 text-sm">Ganesh Lagad</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="mailto:ganeshlagad2005@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-lavish-gold transition-colors duration-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiMail size={18} />
                <span>ganeshlagad2005@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ganesh-lagad" 
                className="flex items-center space-x-2 text-gray-300 hover:text-lavish-gold transition-colors duration-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Ganeshh2005" 
                className="flex items-center space-x-2 text-gray-300 hover:text-lavish-gold transition-colors duration-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-lavish-gold/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-gradient">YugaYatra Retail Pvt Ltd</span>. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-lavish-gold transition-colors duration-300 text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-400 hover:text-lavish-gold transition-colors duration-300 text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Terms of Service
              </Link>
              <Link 
                to="/disclaimer" 
                className="text-gray-400 hover:text-lavish-gold transition-colors duration-300 text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Disclaimer
              </Link>
              <Link 
                to="/site-map" 
                className="text-gray-400 hover:text-lavish-gold transition-colors duration-300 text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;