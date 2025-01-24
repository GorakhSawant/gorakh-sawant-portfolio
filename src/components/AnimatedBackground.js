import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedRings = () => {
  const { scrollYProgress } = useScroll();
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      
      <div className="fixed inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              rotate,
              scale,
              opacity,
              border: `${1 + i}px solid rgba(96, 165, 250, ${0.15 - i * 0.02})`,
              borderRadius: '50%',
              boxShadow: `0 0 ${15 + i * 5}px rgba(96, 165, 250, ${0.1 - i * 0.01})`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0">
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
      </div>

      <div className="fixed inset-0">
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
    </div>
  );
};

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 -z-20">
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