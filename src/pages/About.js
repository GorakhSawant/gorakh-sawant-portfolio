import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDocker } from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import profileImage from '../assets/images/profile.jpg'

const About = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isStatementOpen, setIsStatementOpen] = useState(false);

  const skills = [
    { name: "React & JavaScript", proficiency: 85, icon: <FaReact size={30} className="text-blue-400" /> },
    { name: "Tailwind CSS", proficiency: 80, icon: <div className="bg-blue-400 rounded-full h-8 w-8"></div> },
    { name: "Python & Flask", proficiency: 90, icon: <FaPython size={30} className="text-yellow-500" /> },
    { name: "Docker & AWS", proficiency: 75, icon: <FaDocker size={30} className="text-blue-600" /> },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-10">
          <img
            src= {profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg mb-4"
          />
          <h1 className="text-5xl font-bold mb-2">Your Name</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            A Software Engineer passionate about crafting efficient solutions for real-world problems.
          </p>
        </div>

        {/* Grid Layout for Skills, Experience, Personal Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Skills Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-2">
                    {skill.icon}
                    <h4 className="text-lg font-semibold text-gray-200">{skill.name}</h4>
                  </div>
                  <div className="w-20 h-20">
                    <CircularProgressbar value={skill.proficiency} text={`${skill.proficiency}%`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">Experience</h3>
            <p className="text-lg text-gray-300">
              I have 9+ months of experience as a Quality Automation Engineer, specializing in UI and API automation testing.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              I have hands-on experience developing dynamic web applications using React and Flask.
            </p>
          </motion.div>

          {/* Personal Statement Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">Personal Statement</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              "I believe in continuous learning and improvement. I enjoy tackling new challenges and pushing the boundaries of technology."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
