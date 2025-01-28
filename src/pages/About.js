import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaDocker } from 'react-icons/fa';

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="backdrop-blur-xl bg-white/10 p-8 rounded-xl border border-white/20
              hover:border-blue-500/50 transition-all duration-300 shadow-xl
              hover:shadow-blue-500/10"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-500/20 rounded-lg">
        {skill.icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3 font-tech-mono">
          {skill.name}
        </h3>
        <p className="text-gray-200 font-rajdhani mb-4 leading-relaxed">
          {skill.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skill.tech.map((item) => (
            <span 
              key={item}
              className="px-3 py-1.5 bg-blue-500/20 rounded-full text-blue-300 text-sm font-tech-mono
                       border border-blue-500/30 hover:border-blue-400 transition-all duration-300
                       hover:bg-blue-500/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TechBadge = ({ tech }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="backdrop-blur-xl bg-white/10 px-4 py-3 rounded-lg border border-white/20
              hover:border-blue-500/50 transition-all duration-300 shadow-lg
              hover:shadow-blue-500/10"
  >
    <span className="text-gray-200 font-tech-mono hover:text-blue-400 transition-colors">
      {tech}
    </span>
  </motion.div>
);

const About = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: <FaCode className="text-3xl text-blue-400" />, 
      description: 'Building scalable React applications with modern patterns and best practices.',
      tech: ['React', 'Redux', 'Next.js', 'TypeScript']
    },
    { 
      name: 'Backend Development', 
      icon: <FaServer className="text-3xl text-green-400" />, 
      description: 'Developing robust microservices and RESTful APIs.',
      tech: ['Node.js', 'Python', 'Express', 'FastAPI']
    },
    { 
      name: 'DevOps & CI/CD', 
      icon: <FaDocker className="text-3xl text-purple-400" />, 
      description: 'Managing deployment pipelines and containerized applications.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS']
    },
    { 
      name: 'Test Automation', 
      icon: <FaRobot className="text-3xl text-yellow-400" />, 
      description: 'Creating comprehensive automated testing frameworks.',
      tech: ['Selenium', 'Robot Framework', 'Jest', 'Cypress']
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Docker', 'AWS', 'Kubernetes',
    'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'Jenkins', 'Git'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30" />
      <div className="fixed inset-0 grid-pattern opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <motion.h1 
              className="text-6xl font-bold text-white mb-8 font-orbitron"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About <span className="text-blue-400 drop-shadow-lg">Me</span>
            </motion.h1>
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl text-gray-200 font-rajdhani leading-relaxed">
                A passionate Software Engineer with expertise in full-stack development 
                and automation. I transform complex problems into elegant solutions.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <div className="mb-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-12 font-orbitron text-center">
              Core <span className="text-blue-400 drop-shadow-lg">Skills</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 0.1}>
                <SkillCard skill={skill} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-24">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-12 font-orbitron text-center">
              Tech <span className="text-blue-400 drop-shadow-lg">Stack</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <ScrollReveal key={tech} delay={index * 0.05}>
                <TechBadge tech={tech} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
