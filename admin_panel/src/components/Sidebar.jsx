import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="w-64 fixed bg-gray-800 text-white h-screen p-4 flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-6 p-2">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link 
                to="/admin/dashboard" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/projects" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Project Management
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/clients" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Client Management
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/contact-forms" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Contact Form Details
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/admin/subscribed-users" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Subscribed Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-auto mb-4">
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-bold transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;