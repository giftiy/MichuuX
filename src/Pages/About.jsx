// src/Pages/About.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img5 from '../assets/img/cards/card2.jpg';
import '../App.css'; // Ensure custom CSS is imported
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Button } from 'react-bootstrap'; // Import Button for consistency
import { Link } from 'react-router-dom'; // For "Read More" if it goes to a new page

const About = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation();
  const { ref: imageRef, inView: imageInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonRef, inView: buttonInView } = useScrollAnimation({ threshold: 0.1 });


  const handleImageClick = () => {
    setIsClicked(!isClicked);
    // Reset after a short duration to allow re-click
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <section id="about" ref={sectionRef} className="about-section py-5 page-section">
      <div className="container">
        <div className={`title-holder mb-5 animate-on-scroll fade-in-down ${sectionInView ? 'is-visible' : ''}`}>
            <h2 className="text-center">About MichuuX</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-stretch">
            <div
              ref={imageRef}
              className={`image-container w-100 animate-on-scroll ${imageInView ? 'zoom-in is-visible' : 'zoom-in'} ${isClicked ? 'animate' : ''}`}
              onClick={handleImageClick}
            >
              <img
                src={img5}
                alt="MichuuX Team"
                className="img-fluid rounded shadow-lg" // Added shadow
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div ref={textRef} className={`animate-on-scroll ${textInView ? 'fade-in-right is-visible' : 'fade-in-right'}`}>
              <p>
                Founded in 2025 by a team of expertise from diverse domains,
                MichuuX aims to bridge innovation and impact. We are committed to building a better, smarter,
                and more sustainable world by leveraging advanced technology and strategic collaboration.
              </p>
              <p>
                The “X” in MichuuX symbolizes our cross-sectoral expertise and integrated approach to development,
                representing our core service areas including Data Centers, Smart Campus Solutions, Software
                & System Development, Construction, Renewable Energy, Agriculture, Manufacturing, Import &
                Export, Media, Education, and AID Projects.
              </p>
              <p>
                <strong> Our Motto: “Xpertise that Transforms. Innovation that Empowers.”</strong>
                This belief guides us in our efforts to transform industries and uplift communities.
              </p>
              {/* Updated button using React Bootstrap and Link for potential routing */}
              <div ref={buttonRef} className={`mt-4 animate-on-scroll fade-in-up ${buttonInView ? 'is-visible' : ''}`} style={{transitionDelay: buttonInView ? '0.2s' : '0s'}}>
                <Button
                  as={Link} // Assuming /more-about-michuux is a route for a more detailed page
                  to="/Aboutread" // Replace with actual path or use href for external
                  variant="primary" // Uses Bootstrap styling, .btn class for custom theme
                  className="btn btn-lg" // btn-lg for larger size
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;