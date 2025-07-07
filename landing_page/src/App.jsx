import React from 'react';
import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurProjects from './components/OurProjects';
import HappyClients from './components/HappyClients';
import Footer from './components/Footer';
import Hero2 from './components/Hero2';
import AboutUsSection from './components/AboutUsSection';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2/>
      <WhyChooseUs />
      <AboutUsSection/>
      <OurProjects />
      <HappyClients />
      <Footer />
    </>
  );
}

export default App;
