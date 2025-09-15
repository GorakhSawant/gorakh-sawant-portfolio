// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/images/gorakh1.jpg';

const AnimatedRings = () => {

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            border: `${1 + i}px solid rgba(96, 165, 250, ${0.15 - i * 0.02})`,
            borderRadius: '50%',
            boxShadow: `0 0 ${15 + i * 5}px rgba(96, 165, 250, ${0.1 - i * 0.01})`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: i % 2 === 0 ? '#60A5FA' : '#8B5CF6',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-2xl mix-blend-overlay"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            left: `${25 + i * 25}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 -z-20">
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gorakhsawant',
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gorakhsawant/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
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
      <BackgroundGrid />
      <AnimatedRings />
      
      {/* Main Content */}
      <motion.div 
        className="text-center max-w-4xl relative z-10"
        variants={itemVariants}
      >
        <motion.div 
          className="mb-12 relative w-56 h-56 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-2xl" />
          
          {/* Main container */}
          <div className="relative h-full w-full">
            {/* Rotating gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full p-[4px]"
              style={{
                background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #3B82F6)',
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Image container */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-gray-900">
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Gorakh Sawant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/15 to-purple-500/15" />
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Gorakh
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
          Transforming ideas into reality through code. Currently working as a Software Engineer at Indexnine Technologies, 
          specializing in automation testing & front-end development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <Link
            to="/about"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-rajdhani text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg font-rajdhani text-lg font-semibold hover:bg-blue-400/10 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
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

      {/* Tech Stack Section */}
      <motion.section
        className="w-full max-w-4xl mx-auto mt-32 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Python', 'Java', 'React', 'MongoDB', 'Robot Framework', 'Pytest', 'API Automation','UI Automation'].map((tech, index) => (
            <motion.div
              key={tech}
              className="backdrop-blur-lg bg-white/10 p-4 rounded-xl text-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-white font-tech-mono">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Work Preview */}
      <motion.section
        className="w-full max-w-4xl mx-auto mt-32 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-white mb-2 font-tech-mono">
              Automation Framework
            </h3>
            <p className="text-gray-300 font-rajdhani">
              Developed robust testing solutions using Robot Framework and Python
            </p>
          </motion.div>
          <motion.div
            className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-white mb-2 font-tech-mono">
              Portfolio Website
            </h3>
            <p className="text-gray-300 font-rajdhani">
              Modern web application built with React and Framer Motion
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;