// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/gorakhsawant/portfolio",
    liveDemo: "https://gorakhsawant.vercel.app",
    image: "https://i.imgur.com/QlzJ1Ht.jpg" // Modern portfolio website image
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/gorakhsawant/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
    image: "https://i.imgur.com/8T6Irig.jpg" // E-commerce platform image
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com/gorakhsawant/task-manager",
    liveDemo: "https://task-manager-demo.vercel.app",
    image: "https://i.imgur.com/VOmYR4X.jpg" // Task management app image
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and interactive weather maps.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
    github: "https://github.com/gorakhsawant/weather-app",
    liveDemo: "https://weather-dashboard-demo.vercel.app",
    image: "https://i.imgur.com/GfLWJ66.jpg" // Weather dashboard image
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/gorakhsawant/social-analytics",
    liveDemo: "https://social-analytics-demo.vercel.app",
    image: "https://i.imgur.com/L0rHfJ6.jpg" // Analytics dashboard image
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-responsive fitness tracking application with workout plans and progress monitoring.",
    technologies: ["React Native", "Firebase", "Redux", "Express"],
    github: "https://github.com/gorakhsawant/fitness-tracker",
    liveDemo: "https://fitness-tracker-demo.vercel.app",
    image: "https://i.imgur.com/pz0OJ8F.jpg" // Fitness tracking app image
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden shadow-xl group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 space-x-4 flex justify-end">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <FaGithub className="text-white text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <FaExternalLinkAlt className="text-white text-xl" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors font-orbitron tracking-wide">
          {project.title}
        </h3>
        <p className="text-gray-300 line-clamp-3 font-rajdhani text-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors font-rajdhani font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-4 font-orbitron tracking-wider"
        >
          My Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-300 font-rajdhani"
        >
          Here are some of my recent works
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/gorakhsawant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-rajdhani font-semibold text-lg"
        >
          <FaGithub className="text-xl" />
          <span>View More on GitHub</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
