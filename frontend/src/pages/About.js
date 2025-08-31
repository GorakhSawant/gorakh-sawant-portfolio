import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaDocker } from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import ResumeSection from '../components/ResumeSection';

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
              hover:shadow-blue-500/10 h-full"
  >
    <div className="flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-500/20 rounded-lg">
          {skill.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2 font-tech-mono">
            {skill.name}
          </h3>
          <p className="text-gray-200 font-rajdhani leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
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
  </motion.div>
);

const TechStackItem = ({ tech, IconComponent }) => {
  console.log('Tech item link:', tech.link);
  return (
    <motion.a
      href={tech.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-xl bg-white/10 p-4 rounded-xl border border-white/20
                hover:border-blue-500/50 transition-all duration-300 shadow-xl
                hover:shadow-blue-500/10 text-center block cursor-pointer
                group"
      onClick={(e) => {
        console.log('Clicked link:', tech.link);
      }}
    >
      {IconComponent && (
        <div className="p-2 bg-blue-500/20 rounded-lg inline-block mb-2
                      group-hover:bg-blue-500/30 transition-colors">
          <IconComponent className="text-2xl text-blue-400" />
        </div>
      )}
      <h3 className="text-base font-bold text-white font-tech-mono mb-1.5
                   group-hover:text-blue-400 transition-colors">
        {tech.name}
      </h3>
      <span className="text-xs text-blue-400 font-tech-mono px-2 py-0.5 
                     bg-blue-500/10 rounded-full inline-block
                     group-hover:bg-blue-500/20 transition-colors">
        {tech.category}
      </span>
    </motion.a>
  );
};

const About = () => {
  const [techStack, setTechStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/tech-stack');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched tech stack (detailed):', JSON.stringify(data, null, 2));
          setTechStack(data);
        } else {
          console.error('Failed to fetch tech stack');
        }
      } catch (error) {
        console.error('Error fetching tech stack:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechStack();
  }, []);

  // Function to dynamically get icon component
  const getIconComponent = (iconName) => {
    return SiIcons[iconName] || null;
  };

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
          <div className="tech-stack-section max-w-6xl mx-auto px-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech) => {
                  const IconComponent = getIconComponent(tech.icon);
                  return (
                    <ScrollReveal key={tech._id} delay={0.1}>
                      <TechStackItem tech={tech} IconComponent={IconComponent} />
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <ScrollReveal>
          <ResumeSection />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
