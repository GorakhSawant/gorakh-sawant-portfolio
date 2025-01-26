// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiFirebase, SiPython, SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';
import StarryBackground from '../components/StarryBackground';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 transition-transform duration-300 hover:scale-105 mb-6"
    >
      {/* Project Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-blue-400 font-tech-mono text-sm">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white font-orbitron mt-1 
                       transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 font-rajdhani leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="text-sm text-gray-500 bg-gray-700 rounded-full px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Amazon Clone",
      category: "E-COMMERCE",
      description: "A full-featured Amazon clone with user authentication, product catalog, cart functionality, and order processing.",
      technologies: [<SiReact />, <SiNextdotjs />, <SiTailwindcss />, <SiFirebase />],
      github: "https://github.com/GorakhSawant/Amzon-Clone"
    },
    {
      name: "Portfolio Website",
      category: "WEB DEVELOPMENT",
      description: "Modern portfolio website showcasing projects and skills, built with React and TailwindCSS.",
      technologies: [<SiReact />, <SiTailwindcss />],
      github: "https://github.com/GorakhSawant/GorakhSawant.github.io",
      live: "https://gorakhsawant.github.io"
    },
    {
      name: "Snake Game",
      category: "GAME DEVELOPMENT",
      description: "Classic Snake game with modern features including score tracking and difficulty levels.",
      technologies: [<SiPython />],
      github: "https://github.com/GorakhSawant/Snake-Game"
    },
    {
      name: "Superfine Agro",
      category: "BUSINESS",
      description: "Agriculture business platform with inventory management and order processing system.",
      technologies: [<SiPhp />, <SiMysql />, <SiBootstrap />],
      github: "https://github.com/GorakhSawant/Superfine-Agro"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 pt-20">
      <StarryBackground />
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-blue-400 font-tech-mono text-sm tracking-wider">03.</span>
            <span className="text-blue-400/60 font-tech-mono text-sm">MY WORK</span>
            <div className="h-[1px] w-24 bg-blue-400/20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-orbitron">
            Featured Projects
          </h1>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0">
        <div className="decorative-line vertical-line"></div> {/* Vertical Line */}
        <div className="decorative-line horizontal-line"></div> {/* Horizontal Line */}
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="max-w-7xl mx-auto px-4 text-center pb-20">
        <a
          href="https://github.com/GorakhSawant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 text-gray-300 
                   bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/50
                   hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 
                   font-tech-mono text-sm group"
        >
          <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
          <span>View More on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
