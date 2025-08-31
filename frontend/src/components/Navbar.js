// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Blogs', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-xl py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl font-extrabold text-white font-orbitron tracking-wider">
                Gorakh<span className="text-blue-400 text-glow">.S</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative text-lg font-bold transition-all duration-300 font-tech-mono tracking-wider
                    ${isActive(link.path) 
                      ? 'text-blue-400 scale-105' 
                      : 'text-white hover:text-blue-400'
                    }
                    hover:scale-105 transform`}
                >
                  {link.title}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 
                               bottom-[-6px] rounded-full shadow-glow"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg 
                       transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-7 w-7" />
              ) : (
                <FaBars className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden absolute left-0 right-0 top-full bg-gray-900/95 backdrop-blur-lg shadow-lg border-t border-gray-800"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-center py-3 text-lg font-bold transition-all duration-300
                  ${isActive(link.path) 
                    ? 'text-blue-400 bg-gray-800/50' 
                    : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
