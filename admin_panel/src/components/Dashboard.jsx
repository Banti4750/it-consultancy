import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  // Mock data for dashboard stats
  const stats = [
    { title: 'Total Projects', value: 12, link: '/admin/projects' },
    { title: 'Total Clients', value: 8, link: '/admin/clients' },
    { title: 'Contact Forms', value: 24, link: '/admin/contact-forms' },
    { title: 'Subscribed Users', value: 56, link: '/admin/subscribed-users' }
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="https://via.placeholder.com/60" 
                  alt="Project" 
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">Project {item}</h3>
                  <p className="text-sm text-gray-500">Short description of project {item}</p>
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`} 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">Client {item}</h3>
                  <p className="text-sm text-gray-500">Designation {item}</p>
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