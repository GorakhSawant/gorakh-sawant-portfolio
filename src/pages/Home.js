// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gorakhsawant',
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gorakh-sawant',
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      name: 'Email',
      url: 'mailto:gorakh.r.sawant@gmail.com',
      icon: <FaEnvelope className="text-2xl" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(147, 51, 234, 0.3)'
              } 0%, transparent 70%)`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center max-w-4xl relative z-10"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gorakh Sawant
        </motion.h1>

        <motion.div 
          className="text-2xl md:text-3xl text-blue-400 mb-8 font-tech-mono h-20"
          variants={itemVariants}
        >
          <Typewriter
            options={{
              strings: [
                'Software Engineer',
                'Automation Specialist',
                'Full Stack Developer',
                'Tech Enthusiast'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName: "inline-block"
            }}
          />
        </motion.div>

        <motion.p 
          className="text-xl text-gray-300 mb-12 font-rajdhani leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Welcome to my digital space! I specialize in automation testing and full-stack development,
          crafting efficient solutions and implementing robust testing strategies.
          Let's build something amazing together!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-rajdhani text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg font-rajdhani text-lg font-semibold hover:bg-blue-400/10 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;