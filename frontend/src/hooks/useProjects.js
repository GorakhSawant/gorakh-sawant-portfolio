import { useState, useEffect } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../api/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (projectData) => {
    try {
      setError(null);
      const newProject = await createProject(projectData);
      setProjects(prev => [...prev, newProject]);
      return newProject;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const editProject = async (id, projectData) => {
    try {
      setError(null);
      const updatedProject = await updateProject(id, projectData);
      setProjects(prev => 
        prev.map(project => 
          project._id === id ? updatedProject : project
        )
      );
      return updatedProject;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeProject = async (id) => {
    try {
      setError(null);
      await deleteProject(id);
      setProjects(prev => prev.filter(project => project._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    loadProjects,
    addProject,
    editProject,
    removeProject
  };
}; 