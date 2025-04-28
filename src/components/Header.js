import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep if Bootstrap styling is used elsewhere
import '../App.css'; // Make sure App.css is imported

// Import only the image needed
import img1 from '../assets/img/img1.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Define the content directly or take from the first item
const heroContent = {
  title: 'Perfect Design for Your Website',
  description: 'Crafting visually stunning and highly functional websites tailored to your brand\'s unique identity and goals.',
  link: '#services/ict'
};

const Header = () => {
  return (
    // Add a class to apply the background image via CSS
    // Use inline style for simplicity here, or use the class 'hero-block-bg' in CSS
    <section
      id="home"
      className="hero-block hero-block-static" // Add a specific class for static version
      style={{ backgroundImage: `url(${img1})` }} // Apply background image directly
    >
      {/* Overlay for darkening the image */}
      <div className="hero-overlay"></div>

      {/* Content container - reuse styling class */}
      {/* Ensure this container is centered using flexbox on parent or other methods */}
      <div className="hero-caption-custom">
        {/* Removed typing-effect class as animation is not desired */}
        <h2>{heroContent.title}</h2>
        <p>{heroContent.description}</p>
      </div>
    </section>
  );
}

export default Header;