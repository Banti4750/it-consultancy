import React from "react";
const TestimonialCard = ({ imageUrl, description, name, designation }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 md:p-6 w-full max-w-sm flex flex-col  ">
        <div className="flex justify-center items-center">

        <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="w-20 h-20 rounded-full  object-cover mb-4 border-4 border-gray-100"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e2e8f0/4a5568?text=User'; }}
        />
        </div>
      <p className="text-gray-600 italic mb-2 text-start  leading-relaxed">
        "{description.slice(0, 100)}"
      </p>
      <div className="mt-auto">
        <h3 className="text-lg font-semibold text-start text-blue-600">{name}</h3>
        <p className="text-gray-500 text-start text-sm">{designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;