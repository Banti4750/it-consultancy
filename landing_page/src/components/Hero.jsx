import React from 'react';
import hero from '../assets/hero.svg'
import { useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:3000/api/user/contact-form', {
        fullName: name,
        email,
        mobileNumber: phone,
        city: location,
      });

      if (response.status === 201) {
        alert('Message sent successfully!');
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setLocation('');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form submission error:', err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section 
      className=" bg-cover bg-center bg-no-repeat text-white "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 flex  md:flex-row items-center justify-center md:justify-arround gap-12 h-full min-h-screen container mx-auto">
        <div className="text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
            Consultation,
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
            Design,
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            & Marketing
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Your trusted partner for all your real estate needs.
          </p>
          
        </div>
        
          
         
      <div className="relative   bg-blue-500/30 backdrop-invert backdrop-opacity-95 p-8 rounded-lg  w-full max-w-md md:w-1/4 md:max-w-[400px]">
          <h3 className="relative z-10 text-2xl font-bold text-white mb-4 text-center">
            Get a Free<br />Consultation
          </h3>
          <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-4 bg-transparent border-2 border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-slate-300"
      required
    />
    <input
      type="email"
      placeholder="Enter Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-4 bg-transparent border-2 border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-slate-300"
      required
    />
    <input
      type="tel"
      placeholder="Mobile Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full p-4 bg-transparent border-2 border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-slate-300"
      required
    />
    <input
      type="text"
      placeholder="Area, City"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full p-4 bg-transparent border-2 border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-slate-300"
      required
    />
    <button
      type="submit"
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg mt-8"
      disabled={loading}
    >
      {loading ? 'Sending...' : 'Get Quick Quote'}
    </button>
    {success && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
    {error && <p className="text-red-400 text-center mt-4">{error}</p>}
  </form>
</div>
      </div>
    </section>
  );
};

export default Hero;