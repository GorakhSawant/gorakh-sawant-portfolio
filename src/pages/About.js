import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJava, FaAws, FaDocker, FaGitAlt, FaApple, FaLinux, FaGraduationCap, FaLaptopCode, FaBrain, FaServer } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiFlask, SiMongodb, SiHtml5, SiCss3, SiRobotframework, SiJira } from 'react-icons/si';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import profileImage from '../assets/images/profile.jpg';
import { useRef } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Backend Development",
      icon: <FaServer className="text-4xl text-blue-400" />,
      technologies: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Machine Learning",
      icon: <FaBrain className="text-4xl text-blue-400" />,
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
    }
  ];

  const education = [
    {
      degree: "Master of Technology",
      field: "Computer Science",
      institution: "Your University Name",
      year: "2022-2024",
      description: "Specialization in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Your College Name",
      year: "2018-2022",
      description: "First Class with Distinction"
    }
  ];

  const languages = [
    { name: "Python", proficiency: 90, icon: <FaPython size={30} className="text-yellow-400" /> },
    { name: "Java", proficiency: 80, icon: <FaJava size={30} className="text-red-500" /> },
    { name: "C++", proficiency: 75, icon: <SiCplusplus size={30} className="text-blue-400" /> },
    { name: "JavaScript", proficiency: 85, icon: <SiJavascript size={30} className="text-yellow-400" /> },
    { name: "Flask", proficiency: 80, icon: <SiFlask size={30} className="text-white" /> },
    { name: "MySQL", proficiency: 70, icon: <SiMongodb size={30} className="text-green-400" /> },
    { name: "HTML/CSS", proficiency: 90, icon: <SiHtml5 size={30} className="text-orange-400" /> },
    { name: "Bootstrap", proficiency: 80, icon: <SiCss3 size={30} className="text-purple-400" /> },
  ];

  const tools = [
    { name: "AWS", proficiency: 80, icon: <FaAws size={30} className="text-orange-400" /> },
    { name: "Docker", proficiency: 85, icon: <FaDocker size={30} className="text-blue-600" /> },
    { name: "Robot Framework", proficiency: 80, icon: <SiRobotframework size={30} className="text-red-400" /> },
    { name: "JIRA", proficiency: 85, icon: <SiJira size={30} className="text-blue-600" /> },
    { name: "Git & GitHub", proficiency: 90, icon: <FaGitAlt size={30} className="text-orange-400" /> },
    { name: "UI Automation", proficiency: 80, icon: <FaApple size={30} className="text-gray-300" /> },
    { name: "Operating Systems", proficiency: 85, icon: <FaLinux size={30} className="text-white" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      {/* Professional Summary */}
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-6 font-orbitron tracking-wider text-center">
          Professional Journey
        </h2>
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl">
          <p className="text-xl text-gray-200 font-rajdhani leading-relaxed">
            With over 2 years of experience in the tech industry, I've developed a strong foundation in software development
            and automation testing. My journey began at Wipro Technologies where I gained valuable experience in IT infrastructure
            and system administration. Currently at Indexnine Technologies, I'm focused on developing automated testing solutions
            and improving the quality of the applications.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron tracking-wide text-center">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
                className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-tech-mono">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-rajdhani"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron tracking-wide text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl flex items-start space-x-4"
            >
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <FaGraduationCap className="text-3xl text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white font-tech-mono">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-blue-300 font-rajdhani">
                  {edu.institution}
                </p>
                <p className="text-gray-400 font-rajdhani">
                  {edu.year}
                </p>
                <p className="text-gray-300 mt-2 font-rajdhani">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron tracking-wide text-center">
          Programming Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gray-800/50 rounded-full">
                    {lang.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white font-tech-mono">
                    {lang.name}
                  </h3>
                  <div className="w-24 h-24">
                    <CircularProgressbar
                      value={0}
                      text={`${lang.proficiency}%`}
                      styles={{
                        path: { 
                          stroke: `rgba(59, 130, 246, ${lang.proficiency / 100})`,
                          transition: 'stroke-dashoffset 1.5s ease-in-out',
                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                        trail: { stroke: '#1f2937' },
                        text: { 
                          fill: '#fff', 
                          fontSize: '1.5rem', 
                          fontFamily: 'Rajdhani',
                          transform: 'rotate(-0.25turn)' 
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron tracking-wide text-center">
          Technologies & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-800/50 rounded-full">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white font-tech-mono">
                      {tool.name}
                    </h3>
                  </div>
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={0}
                      text={`${tool.proficiency}%`}
                      styles={{
                        path: { 
                          stroke: `rgba(59, 130, 246, ${tool.proficiency / 100})`,
                          transition: 'stroke-dashoffset 1.5s ease-in-out',
                          transform: 'rotate(0.25turn)',
                          transformOrigin: 'center center',
                        },
                        trail: { stroke: '#1f2937' },
                        text: { 
                          fill: '#fff', 
                          fontSize: '1.5rem', 
                          fontFamily: 'Rajdhani',
                          transform: 'rotate(-0.25turn)' 
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron tracking-wide text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-400 font-tech-mono mb-2">
              Software Engineer
            </h3>
            <p className="text-xl text-gray-300 font-rajdhani mb-2">
              Indexnine Technologies Pvt. Ltd., Pune
            </p>
            <p className="text-lg text-gray-400 font-rajdhani mb-4">
              December 2023 - Present
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 font-rajdhani">
              <li>Specialized in automation testing using Robot Framework with Python</li>
              <li>Reduced manual testing effort by 70% through UI automation improvements</li>
              <li>Implemented CI/CD pipelines for automated testing workflows</li>
              <li>Collaborated with cross-functional teams to improve test coverage</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-400 font-tech-mono mb-2">
              Administrator L1
            </h3>
            <p className="text-xl text-gray-300 font-rajdhani mb-2">
              Wipro Technologies Pvt. Ltd., Pune
            </p>
            <p className="text-lg text-gray-400 font-rajdhani mb-4">
              January 2022 - December 2023
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 font-rajdhani">
              <li>Managed and maintained IT infrastructure and network systems</li>
              <li>Implemented monitoring solutions for improved system reliability</li>
              <li>Collaborated with technical teams for project implementations</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
