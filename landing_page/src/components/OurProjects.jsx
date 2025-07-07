import React from 'react';
import ProjectCard from './ProjectCard';

const OurProjects = () => {
 // Sample backend data structure
  const projectsData = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      name: "Consultation",
      description: "Professional real estate consultation services to help you make informed decisions about your property investments and sales strategies."
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      name: "Design",
      description: "Expert interior design services to enhance your home's appeal and market value with modern, functional design solutions."
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      name: "Marketing & Design",
      description: "Comprehensive marketing strategies combined with professional design services to maximize your property's market exposure and appeal."
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      name: "Consultation & Marketing",
      description: "Combined consultation and marketing services to provide end-to-end support for your real estate transactions and investment decisions."
    },
    
  ];

  

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              name={project.name}
              description={project.description}
              
            />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default OurProjects;