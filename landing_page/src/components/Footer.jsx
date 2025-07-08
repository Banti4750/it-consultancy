import React from 'react';
import logo from "../assets/logo.svg"
import Reactangle from "../assets/Rectangle.svg"
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';


const Footer = () => {
  const navLinks = ["Home", "Services", "Projects", "Testimonials", "Connect"];
  const [email , setemail] = useState('')

  async function handleSuscribeEmail() {
    try {
      const response = await axios.post('http://localhost:3000/api/user/subscribe-email', {
        email: email
      });
      if (response.status === 201) {
        alert('Thank you for subscribing!');
        setemail('');
      }
    } catch(error) {
      console.error('Subscription error:', error);
      alert('Subscription failed. Please try again.');
    }
  }

  return (
    <footer className="w-full bg-white">
      {/* --- Top Section: Call to Action --- */}
      <div className="relative bg-cover bg-center text-white py-20" style={{ backgroundImage: `url(${Reactangle})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 max-w-2xl mx-auto">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* --- Middle Section: Links & Subscription --- */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Subscription Form */}
            <div className="flex-1 flex justify-center md:justify-end items-center space-x-3 w-full md:w-auto">
              <span className="text-sm font-semibold whitespace-nowrap">Subscribe Us</span>
              <div className="flex bg-white rounded-md p-1 max-w-xs w-full">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  onChange={(e) => setemail(e.target.value)}
                  className="bg-transparent text-gray-700 text-sm focus:outline-none px-2 w-full"
                />
                <button className="bg-white text-blue-600 text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                onClick={handleSuscribeEmail}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Copyright, Logo & Socials --- */}
      <div className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <img className="color-white" src={logo} alt="" />
              {/* <span className="text-white font-bold text-xl">RealTrust</span> */}
            </div>

            {/* Social Icons */}
             <div className="flex space-x-4">
              <a href="#" aria-label="Twitter"><Twitter className="w-6 h-6 text-white hover:text-blue-400 transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-6 h-6 text-white hover:text-pink-500 transition-colors" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="w-6 h-6 text-white hover:text-blue-600 transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6 text-white hover:text-blue-500 transition-colors" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
