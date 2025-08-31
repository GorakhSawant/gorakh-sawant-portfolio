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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        console.error('Error details:', data);
      }
    } catch (error) {
      console.error('Error details:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      link: 'https://www.linkedin.com/in/gorakhsawant/'
      
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-blue-400" />,
      label: 'LOCATION',
      value: 'Pune, MH, India',
      link: 'https://maps.google.com/?q=Mumbai,India'
    }
  ];

  // Success Modal Component
  const SuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl 
                 border border-blue-500/20 max-w-md w-full backdrop-blur-xl"
      >
        <div className="text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <svg 
              className="w-8 h-8 text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
            Thank You for Reaching Out!
          </h3>
          
          <p className="text-gray-300 mb-6 font-rajdhani">
            I appreciate you taking the time to contact me. I'll get back to you as soon as possible!
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowSuccessModal(false)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-rajdhani
                     hover:bg-blue-600 transition-colors duration-300"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-20">
      {showSuccessModal && <SuccessModal />}
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

            <form onSubmit={handleSubmit} className="space-y-8">
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  className="relative"
                  whileHover={{ scale: 1.01 }}
                >
                  <label 
                    className={`absolute left-4 transition-all duration-300 font-tech-mono
                              ${formData[field] 
                                ? '-top-6 text-sm text-blue-400'
                                : 'top-4 text-gray-400'}`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      rows="4"
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-lg px-4 pt-4
                               text-white focus:border-blue-500/50 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 transition-all duration-300 font-rajdhani resize-none"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      required
                      className="w-full h-14 bg-white/5 border-2 border-white/10 rounded-lg px-4
                               text-white focus:border-blue-500/50 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 transition-all duration-300 font-rajdhani"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg
                         text-white font-rajdhani font-semibold flex items-center justify-center gap-2
                         transition-all duration-300 ${
                           isSubmitting 
                             ? 'opacity-70 cursor-not-allowed' 
                             : 'hover:from-blue-600 hover:to-blue-700'
                         }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
