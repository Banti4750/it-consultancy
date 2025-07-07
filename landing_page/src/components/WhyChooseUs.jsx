import React from 'react';
import { Home, Award, DollarSign, ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50  px-4">
       <div className="container mx-auto max-w-6xl">

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            {/* <div className="absolute -top-4 -right-8 w-3 h-3 bg-blue-500 rounded-full"></div> */}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Potential ROI */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Potential ROI
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you are looking to buy or sell a home, we're 
              here to help you get the most out of your investment 
              and your number one choice when it comes to advice.
            </p>
          </div>

          {/* Design */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Design
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our knowledge and experience will help you make the perfect 
              adjustments to your design approach and presentation to 
              achieve the best possible results for your home.
            </p>
          </div>

          {/* Marketing */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Marketing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ongoing and timely marketing using our premium and 
              extensive network of top marketing plans and competitive 
              pricing & flexible package options is our forte.
            </p>
          </div>
        </div>

         {/* Navigation Arrow */}
        <div className="flex justify-end">
          <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default WhyChooseUs;