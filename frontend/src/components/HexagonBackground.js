import React from 'react';
import { motion } from 'framer-motion';

const HexagonBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-10">
      <div className="relative w-full h-full">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute clip-hex bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HexagonBackground; 