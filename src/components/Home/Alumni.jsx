import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Alumni = () => {
  const controls = useAnimation();

  // Trigger animations when component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Alumni data with the provided LinkedIn profiles
  const alumniData = [
    {
      id: 1,
      name: 'Ganesh Lagad',
      role: 'Former Intern',
      batch: '2025',
      testimonial: 'My internship at YugaYatra was a transformative experience that helped me develop both technical and soft skills essential for my career.',
      linkedin: 'https://www.linkedin.com/in/ganesh-lagad',
      email: 'ganeshlagad2005@gmail.com',
      bgColor: '#4A90E2' // Blue background color
    },
    {
      id: 2,
      name: 'Aashritha Reddy',
      role: 'Former Intern',
      batch: '2025',
      testimonial: 'The mentorship and hands-on experience I received at YugaYatra gave me the confidence to pursue my career goals with clarity and purpose.',
      linkedin: 'https://www.linkedin.com/in/aashritha-reddy-177446296/',
      email: 'aashritha@example.com',
      bgColor: '#50C878' // Emerald green background color
    },
    {
      id: 3,
      name: 'Samyuktha Nakirikanti',
      role: 'Former Intern',
      batch: '2025',
      testimonial: 'Working at YugaYatra exposed me to real-world challenges and innovative solutions that have been invaluable in my professional journey.',
      linkedin: 'https://www.linkedin.com/in/samyukthanakirikanti/',
      email: 'samyuktha@example.com',
      bgColor: '#9370DB' // Medium purple background color
    }
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#FFF8E1]/60 to-[#E7CBA9]/60" id="alumni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={headerAnimation}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-rich-black">
            Our <span className="text-gradient">Outstanding</span> Alumni
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-rich-black/80">
            Meet the brilliant minds who have shaped their careers through YugaYatra's transformative programs and continue to inspire the next generation.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {alumniData.map((alumni) => (
            <motion.div
              key={alumni.id}
              variants={fadeInUp}
              className="card overflow-hidden flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-64" style={{ backgroundColor: alumni.bgColor }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-8xl font-bold">{getInitials(alumni.name)}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{alumni.name}</h3>
                    <p className="text-lavish-gold">{alumni.role} - {alumni.batch}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 flex-1">
                  <p className="text-rich-black/80 italic">"{alumni.testimonial}"</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={alumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rich-black/70 hover:text-lavish-gold transition-colors duration-300"
                      aria-label={`${alumni.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${alumni.email}`}
                      className="text-rich-black/70 hover:text-lavish-gold transition-colors duration-300"
                      aria-label={`Email ${alumni.name}`}
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                  <span className="flex items-center text-sm text-rich-black/60">
                    <FaGraduationCap className="mr-1" />
                    Alumni
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="modern-button inline-block"
          >
            Join Our Alumni Network
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;