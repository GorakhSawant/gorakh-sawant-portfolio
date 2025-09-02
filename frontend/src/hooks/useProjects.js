import { useState, useEffect, useCallback } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../api/projects';
import { useDebounce } from './useDebounce';

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

  const [refreshKey, setRefreshKey] = useState(0);
  const debouncedRefreshKey = useDebounce(refreshKey, 1000);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects(controller.signal);
        if (mounted) {
          setProjects(data.sort((a, b) => a.order - b.order));
        }
      } catch (err) {
        if (mounted && err.name !== 'AbortError') {
          setError(err.message);
          console.error('Error fetching projects:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
      controller.abort();
    };
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