// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const SocialLink = ({ icon, label, value, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 group"
    whileHover={{ x: 10 }}
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 
                  group-hover:bg-blue-500/30 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400 font-tech-mono">{label}</p>
      <p className="text-white font-rajdhani group-hover:text-blue-400 transition-colors">
        {value}
      </p>
    </div>
    <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);

  const socialLinks = [
    {
      icon: <FaEnvelope className="text-xl text-blue-400" />,
      label: 'EMAIL',
      value: 'gorakh.r.sawant@gmail.com',
      link: 'mailto:gorakh.r.sawant@gmail.com'
    },
    {
      icon: <FaGithub className="text-xl text-blue-400" />,
      label: 'GITHUB',
      value: 'github.com/gorakhsawant',
      link: 'https://github.com/gorakhsawant'
    },
    {
      icon: <FaLinkedin className="text-xl text-blue-400" />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/gorakh-sawant',
      link: 'https://linkedin.com/in/gorakh-sawant'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-blue-400" />,
      label: 'LOCATION',
      value: 'Mumbai, India',
      link: 'https://maps.google.com/?q=Mumbai,India'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Section - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-16 bg-gradient-to-br from-gray-900 to-gray-800"
          >
            <div className="sticky top-20">
              <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">
                Let's <span className="text-blue-400">Connect</span>
              </h2>
              <p className="text-gray-400 mb-12 font-rajdhani">
                Feel free to reach out through any of these platforms
              </p>

              <div className="space-y-8">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SocialLink {...link} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-16 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">
              Send a <span className="text-blue-400">Message</span>
            </h2>
            <p className="text-gray-400 mb-12 font-rajdhani">
              Have a question or want to work together?
            </p>

            <form className="space-y-8">
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  className="relative"
                  whileHover={{ scale: 1.01 }}
                >
                  <label 
                    className={`absolute left-4 transition-all duration-300 font-tech-mono
                              ${activeField === field || formData[field] 
                                ? '-top-6 text-sm text-blue-400'
                                : 'top-4 text-gray-400'}`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                      rows="4"
                      className="w-full bg-white/5 border-2 border-white/10 rounded-lg px-4 pt-4
                               text-white focus:border-blue-500/50 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 transition-all duration-300 font-rajdhani resize-none"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                      className="w-full h-14 bg-white/5 border-2 border-white/10 rounded-lg px-4
                               text-white focus:border-blue-500/50 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 transition-all duration-300 font-rajdhani"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg
                         text-white font-rajdhani font-semibold flex items-center justify-center gap-2
                         hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
