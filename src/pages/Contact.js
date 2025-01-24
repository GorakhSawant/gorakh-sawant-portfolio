// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h2 className="text-5xl font-bold text-white mb-12 text-center">
        Get In Touch
      </h2>
      
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 text-white group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FaEnvelope className="text-2xl" />
                </div>
                <a 
                  href="mailto:gorakh.r.sawant@gmail.com" 
                  className="text-lg hover:text-blue-300 transition-colors"
                >
                  gorakh.r.sawant@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 text-white group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FaPhone className="text-2xl" />
                </div>
                <a 
                  href="tel:+919834522841" 
                  className="text-lg hover:text-blue-300 transition-colors"
                >
                  +91 983-452-2841
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 text-white group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </div>
                <a 
                  href="https://linkedin.com/in/gorakh-sawant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-300 transition-colors"
                >
                  Gorakh Sawant
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 text-white group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <FaGithub className="text-2xl" />
                </div>
                <a 
                  href="https://github.com/gorakhsawant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-300 transition-colors"
                >
                  gorakhsawant
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-3 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-8">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 px-8 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold transition-colors shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
