import React from 'react';
import { motion } from 'framer-motion';

const MatrixRainEffect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(0,255,0,0.1))',
        maskImage: 'linear-gradient(to bottom, transparent, black)',
      }}
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500 font-mono text-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
          }}
          animate={{
            y: window.innerHeight + 100,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MatrixRainEffect; 