// src/pages/Projects.js
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "Built a portfolio website using React, Tailwind, and Flask.",
      imageUrl: "/assets/portfolio-project.png",
    },
    {
      title: "E-Commerce Platform",
      description: "Developed a full-stack e-commerce web app using MERN stack.",
      imageUrl: "/assets/ecommerce-project.png",
    },
    {
      title: "Chat Application",
      description: "Created a real-time chat app using WebSockets and Node.js.",
      imageUrl: "/assets/chat-app.png",
    },
    {
      title: "API Automation",
      description: "Automated API tests using Robot Framework for a financial system.",
      imageUrl: "/assets/api-automation.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
