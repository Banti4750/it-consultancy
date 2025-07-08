import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    designation: '',
    image: null
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  const fetchClients = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/clients`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClients(response.data.clients);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch clients');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      
      setFormData(prev => ({ ...prev, image: file }));
      setError('');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      designation: '',
      image: null
    });
    setEditingId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.description.trim() || !formData.designation.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };

      const data = new FormData();
      data.append('name', formData.name.trim());
      data.append('description', formData.description.trim());
      data.append('designation', formData.designation.trim());
      
      if (formData.image) {
        data.append('image', formData.image);
      }

      let response;
      if (editingId) {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/clients/${editingId}`,
          data,
          config
        );
        setSuccess('Client updated successfully');
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/clients`,
          data,
          config
        );
        setSuccess('Client added successfully');
      }
      
      console.log('Operation successful:', response.data);
      resetForm();
      fetchClients();
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Operation failed';
      setError(errorMessage);
      console.error('Submit error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (client) => {
    setFormData({
      name: client.name,
      description: client.description,
      designation: client.designation,
      image: null
    });
    setEditingId(client._id);
    setError('');
    setSuccess('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this client?')) return;
    
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/clients/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setSuccess('Client deleted successfully');
      fetchClients();
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Failed to delete client';
      setError(errorMessage);
      console.error('Delete error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Client Management</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded border border-green-300">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          {editingId ? 'Edit Client' : 'Add New Client'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Max file size: 5MB. Supported formats: JPG, PNG, GIF, WebP</p>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter client name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Designation *
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter designation"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter client description"
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {isLoading ? 'Processing...' : editingId ? 'Update Client' : 'Add Client'}
          </button>
          
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              disabled={isLoading}
              className="ml-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Existing Clients</h3>
        
        {isLoading && clients.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500">Loading clients...</p>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500">No clients found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Image</th>
                  <th className="py-3 px-4 border-b text-left">Name</th>
                  <th className="py-3 px-4 border-b text-left">Designation</th>
                  <th className="py-3 px-4 border-b text-left">Description</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      {client.image ? (
                        <img 
                          src={client.image+'?project=686c4502002a3f8df424&mode=admin'} 
                          alt={client.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">No Image</span>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 border-b font-medium">{client.name}</td>
                    <td className="py-3 px-4 border-b">{client.designation}</td>
                    <td className="py-3 px-4 border-b">
                      <div className="max-w-xs truncate" title={client.description}>
                        {client.description}
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(client)}
                          disabled={isLoading}
                          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white px-3 py-1 rounded text-sm transition duration-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(client._id)}
                          disabled={isLoading}
                          className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white px-3 py-1 rounded text-sm transition duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientManagement;