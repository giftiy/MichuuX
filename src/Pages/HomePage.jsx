// src/Pages/HomePage.js
import React from 'react';
import Header from './Header';
import HeroFeatures from './HeroFeatures'; // Assuming HerFeatures.js is the correct filename
import About from './About';
import Services from './Services/Services';
import Partners from './Partners';
import Contact from './Contact';
import '../App.css';


const HomePage = () => {
  return (
    <>
      <Header />
      <HeroFeatures />
      <About />
      <Services />
      <Partners />
      <Contact />
      
    </>
  );
};

export default HomePage;