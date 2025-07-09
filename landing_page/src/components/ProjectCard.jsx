import React from "react";

const ProjectCard = ({ imageUrl, name, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=No+Image';
            }}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
            {name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
