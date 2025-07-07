import React from 'react';
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <nav className="container mx-auto flex justify-around items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium"></a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About Projects</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Testimonial</a></li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;