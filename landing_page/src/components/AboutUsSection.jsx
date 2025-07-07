import React from 'react';
import img1 from '../assets/pexels-andres-ayrton-6578391.svg'
import img2 from '../assets/pexels-fauxels-3182834.svg'
import img3 from '../assets/pexels-brett-sayles-2881232.svg'


const AboutUsSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
      <div className="absolute top-20 right-10 w-16 h-16 bg-blue-600 rounded-sm opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400 rounded-full opacity-15"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-10 translate-x-20 translate-y-20"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-16 right-32 w-12 h-12 bg-blue-500 opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-32 right-16 w-8 h-20 bg-blue-600 opacity-25"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Image - Business Meeting */}
          <div className="relative group">
            <div className="bg-orange-400 p-1 rounded-lg transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <img
                src={img3}
                alt="Business professionals having a meeting outdoors"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Second Image - Team Presentation */}
          <div className="relative group">
            <div className="bg-white p-1 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
              <img
               src={img1}
                alt="Team members collaborating in modern office"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Third Image - Diverse Team */}
          <div className="relative group">
            <div className="bg-orange-300 p-1 rounded-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
              <img
               src={img2}
                alt="Diverse team of professionals working together"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* About Us Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 relative">
            About Us
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h2>
          
          {/* Optional description text */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic team of professionals dedicated to delivering exceptional results. 
            Our collaborative approach and innovative solutions help businesses thrive in today's competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;