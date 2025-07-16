// src/components/ProjectCard.js
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
