import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const News = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: 'YugaYatra is Mass Hiring - Join Our Growing Team!',
      date: 'June 8, 2025',
      excerpt: 'We\'re expanding rapidly and looking for talented individuals across multiple departments including HR, Marketing, Business Development, and Tech Support.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1284&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'YugaYatra Now Live on LinkedIn - Apply Directly!',
      date: 'June 5, 2025',
      excerpt: 'Connect with us on LinkedIn to explore internship opportunities, company updates, and apply directly through our official page for faster processing.',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      link: '#'
    },
    {
      id: 3,
      title: 'New Partnership with 50+ Companies for Student Internships',
      date: 'May 28, 2025',
      excerpt: 'YugaYatra has successfully partnered with over 50 leading companies across various industries to provide diverse internship opportunities for students.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: '#'
    },
    {
      id: 4,
      title: 'YugaYatra Launches Virtual Career Fair 2025',
      date: 'May 15, 2025',
      excerpt: 'Our first virtual career fair connects 1000+ students with top employers, featuring live interviews, skill assessments, and instant job offers.',
      image: 'data:image/jpeg;base64,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',
      link: '#'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#FFF8E1]/80 to-[#E7CBA9]/80" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-rich-black">
            Latest <span className="text-gradient">News</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-rich-black/80">
            Stay updated with the latest happenings and announcements from YugaYatra.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-rich-black/60 mb-3">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-rich-black">{item.title}</h3>
                <p className="text-sm text-rich-black/80 mb-4 flex-1">{item.excerpt}</p>
                <a 
                  href={item.link}
                  className="text-lavish-gold font-medium hover:underline flex items-center mt-auto self-start"
                >
                  Read More
                  <FaArrowRight className="ml-2 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;