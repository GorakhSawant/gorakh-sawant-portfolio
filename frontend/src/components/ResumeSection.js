import React from 'react';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

const ResumeSection = () => {
  // Resume URL
  const resumeUrl = '/resume/Gorakh_Sawant_Resume_9309824107.pdf';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold text-white mb-8 font-tech-mono text-center">
        Resume
      </h2>
      
      <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/10 p-8 rounded-xl border border-white/20
                    hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
        <div className="text-center">
          <p className="text-gray-300 mb-6 font-rajdhani text-lg">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
          
          <div className="flex justify-center">
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg
                       hover:bg-gray-600 transition-colors duration-300 font-tech-mono"
            >
              <FaEye className="mr-2" />
              View Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeSection;
