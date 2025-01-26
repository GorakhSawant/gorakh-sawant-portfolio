import React, { useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaDocker } from 'react-icons/fa';

const MatrixRainEffect = lazy(() => import('../components/MatrixRainEffect'));

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: <FaCode className="text-3xl text-blue-400" />, 
      description: 'Building scalable React applications with modern patterns.',
      tech: ['React', 'Redux', 'Next.js', 'TypeScript']
    },
    { 
      name: 'Backend Development', 
      icon: <FaServer className="text-3xl text-green-400" />, 
      description: 'Developing microservices and APIs with Node.js and Python.',
      tech: ['Node.js', 'Python', 'Express', 'FastAPI']
    },
    { 
      name: 'DevOps & CI/CD', 
      icon: <FaDocker className="text-3xl text-purple-400" />, 
      description: 'Managing deployment pipelines and containers.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS']
    },
    { 
      name: 'Test Automation', 
      icon: <FaRobot className="text-3xl text-yellow-400" />, 
      description: 'Creating automated test frameworks.',
      tech: ['Selenium', 'Robot Framework', 'Jest', 'Cypress']
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Docker', 'AWS', 'Kubernetes',
    'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'Jenkins', 'Git'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 pb-16 relative overflow-hidden"
    >
      {/* Hero Section */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6 font-orbitron"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
              A passionate Software Engineer with expertise in full-stack development 
              and automation. I transform complex problems into elegant solutions.
            </p>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12 font-orbitron text-center">
            Core <span className="text-blue-400">Skills</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 p-6 rounded-xl border border-gray-800
                          hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-tech-mono">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300 font-rajdhani mb-4">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1 bg-gray-800 rounded-md text-blue-400 
                                   text-sm font-tech-mono border border-gray-700
                                   hover:border-blue-500/50 transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-12 font-orbitron text-center">
            Tech <span className="text-blue-400">Stack</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <ScrollReveal key={tech} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/80 p-4 rounded-lg text-center
                          border border-gray-800 hover:border-blue-500/50 
                          transition-all duration-300"
              >
                <span className="text-gray-300 font-tech-mono hover:text-blue-400">
                  {tech}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <MatrixRainEffect />
        </div>
      </Suspense>
    </motion.div>
  );
};

export default About;
