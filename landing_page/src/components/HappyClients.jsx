
import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('https://it-consultancy.onrender.com/api/user/clients'); // Assuming your backend runs on port 3000
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setClients(data.clients);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading clients...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">Error: {error}</div>;
  }

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
          {clients.map((client) => (
            <TestimonialCard
              key={client._id}
              imageUrl={client.image+'?project=686c4502002a3f8df424&mode=admin'} // Assuming image URL is provided by backend
              description={client.description}
              name={client.name}
              designation={client.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;