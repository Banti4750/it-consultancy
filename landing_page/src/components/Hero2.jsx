import React from 'react';
import { Home, Award, DollarSign, ChevronRight } from 'lucide-react';
import Ellipse1 from "../assets/Ellipse 11.svg"
import Ellipse2 from "../assets/Ellipse 12.svg"
import Ellipse3 from "../assets/Ellipse 13.svg"

const Hero2 = () => {
  return (
    <section className="bg-gray-50 py-16  px-4">
      <div className="container mx-auto mt-10 max-w-6xl">
        {/* Not Your Average Realtor Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative mb-6">
              <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-2 -left-2"></div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Not Your Average Realtor
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We'll tailor our service to your unique property situation and 
              make selling simple, stress-free and seamless by giving you 
              flexibility with your dollar and timeline.
            </p>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="flex justify-center items-center">
              {/* Main center image */}
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img src={Ellipse1} alt="Main Realtor" className="w-72 h-72 rounded-full object-cover" />
                </div>
                
                {/* Top right image */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img src={Ellipse2} alt="Couple" className="w-32 h-32 rounded-full object-cover" />
                </div>
                
                {/* Bottom right image */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img src={Ellipse3} alt="Person" className="w-32 h-32 rounded-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            {/* <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-500 rounded-full"></div> */}
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Hero2;