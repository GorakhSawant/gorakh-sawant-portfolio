// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AnimatedRings, BackgroundGrid } from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const RingEffect = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="fixed inset-0 pointer-events-none"
          style={{
            border: `${(index + 1) * 1}px solid rgba(96, 165, 250, ${0.1 - index * 0.02})`,
            borderRadius: '50%',
            scale: scaleX,
            opacity: scrollYProgress
          }}
        />
      ))}
    </>
  );
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <BackgroundGrid />
        <AnimatedRings />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 py-8 pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
