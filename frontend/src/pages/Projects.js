// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiFirebase, SiPython, SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';
import { useProjects } from '../hooks/useProjects';

const ProjectCard = ({ project }) => {
  // Function to get the icon component based on the technology name
  const getIconComponent = (tech) => {
    const icons = {
      'React': SiReact,
      'Next.js': SiNextdotjs,
      'TailwindCSS': SiTailwindcss,
      'Firebase': SiFirebase,
      'Python': SiPython,
      'PHP': SiPhp,
      'MySQL': SiMysql,
      'Bootstrap': SiBootstrap
    };
    const IconComponent = icons[tech];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      className="backdrop-blur-xl bg-white/10 rounded-xl p-8 border border-white/20
                hover:border-blue-500/50 transition-all duration-300 shadow-xl
                hover:shadow-blue-500/10"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-blue-400 font-tech-mono text-sm tracking-wider">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white font-orbitron mt-2">
            {project.name}
          </h3>
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-200 font-rajdhani leading-relaxed mb-6 text-lg">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 text-sm font-tech-mono
                     border border-blue-500/30 hover:border-blue-400 transition-all duration-300
                     hover:bg-blue-500/30 flex items-center gap-2"
          >
            {getIconComponent(tech)}
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-blue-400">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30" />
      <div className="fixed inset-0 grid-pattern opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl font-bold text-white mb-8 font-orbitron">
            Featured <span className="text-blue-400 drop-shadow-lg">Projects</span>
          </h1>
          <p className="text-xl text-gray-200 font-rajdhani max-w-2xl mx-auto leading-relaxed">
            A collection of my work that showcases my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {projects.map((project) => (
            <ProjectCard 
              key={project._id} 
              project={project} 
            />
          ))}
        </div>

        <motion.div 
          className="text-center pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/GorakhSawant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 transition-all duration-300 font-rajdhani text-lg font-semibold
                     shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
          >
            <FaGithub className="text-2xl" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
