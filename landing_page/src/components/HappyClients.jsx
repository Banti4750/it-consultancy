import React from 'react';
import TestimonialCard from './TestimonialCard';

const HappyClients = () => {
 const testimonials = [
 
  {
    imageUrl: 'https://placehold.co/100x100/e2e8f0/4a5568?text=SK',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    name: 'Shayne Kopec',
    designation: 'Art Director',
  },
  {
    imageUrl: 'https://placehold.co/100x100/e2e8f0/4a5568?text=JL',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
    name: 'John Lapone',
    designation: 'Lead Developer',
  },
  {
    imageUrl: 'https://placehold.co/100x100/e2e8f0/4a5568?text=MF',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    name: 'Marry Freeman',
    designation: 'Marketing Manager',
  },
  {
    imageUrl: 'https://placehold.co/100x100/e2e8f0/4a5568?text=L',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    name: 'Lucy',
    designation: 'Sales Associate',
  },
];


  return (
       <div className="bg-gray-50 min-h-screen w-full font-sans py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Happy Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here's what our valued clients have to say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imageUrl={testimonial.imageUrl}
              description={testimonial.description}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;