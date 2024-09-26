// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center text-white p-10 space-y-6">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Aryan
        </motion.h1>
        
        <motion.p
          className="text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Software Engineer | Problem Solver | Technology Enthusiast
        </motion.p>
        
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Link to="/projects">
            <button className="bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
              View My Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;