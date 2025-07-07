import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ 
    image: '', 
    name: '', 
    description: '' 
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/projects`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    formData.append('name', newProject.name);
    formData.append('description', newProject.description);
    if (newProject.image) {
      formData.append('image', newProject.image);
    }

    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/projects/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/projects`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      setNewProject({ image: '', name: '', description: '' });
      setEditingId(null);
      fetchProjects(); // Refresh the list
    } catch (error) {
      console.error('Error adding/updating project:', error);
    }
  };

  const handleEditProject = (project) => {
    setNewProject({
      image: null, // Image will be handled separately
      name: project.name,
      description: project.description
    });
    setEditingId(project._id);
  };

  const handleDeleteProject = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchProjects(); // Refresh the list
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Management</h2>

      <form onSubmit={handleAddProject} className="mb-8 p-6 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setNewProject({ ...newProject, image: e.target.files[0] })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          {editingId ? 'Update Project' : 'Add Project'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setNewProject({ image: '', name: '', description: '' });
              setEditingId(null);
            }}
            className="ml-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Existing Projects</h3>
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{project.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectManagement;