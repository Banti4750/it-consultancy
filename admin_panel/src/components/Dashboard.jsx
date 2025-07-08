import React from 'react';
import { Link } from 'react-router-dom';
import axois from'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Dashboard = () => {
  // Mock data for dashboard stats

  const [data , setdata] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentClients, setRecentClients] = useState([]);

  async function fetchData() {
    try {
      const token = localStorage.getItem('adminToken');
      const dashboardResponse = await axois.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setdata(dashboardResponse.data);

      const projectsResponse = await axois.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/projects`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRecentProjects(projectsResponse.data.projects.slice(0, 3)); // Get top 3 recent projects

      const clientsResponse = await axois.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/clients`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRecentClients(clientsResponse.data.clients.slice(0, 4)); // Get top 3 recent clients

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const stats = [
    { title: 'Total Projects', value: data.projectCount, link: '/admin/projects' },
    { title: 'Total Clients', value:  data.clientCount , link: '/admin/clients' },
    { title: 'Contact Forms', value: data.contactForm ,  link: '/admin/contact-forms' },
    { title: 'Subscribed Users', value: data.userCount, link: '/admin/subscribed-users' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link 
            to={stat.link} 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.title}</h3>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-2 hover:text-blue-500">View details →</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Projects</h2>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project._id} className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src={project.image+'?project=686c4502002a3f8df424&mode=admin'}
                  alt={project.name}
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/admin/projects" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View all projects →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Clients</h2>
          <div className="space-y-4">
            {recentClients.map((client) => (
              <div key={client._id} className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src={client.image+'?project=686c4502002a3f8df424&mode=admin'}
                  alt={client.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/admin/clients" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View all clients →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;