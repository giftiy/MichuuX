import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import img5 from '../assets/img/img5.png'; // Path to your image
// Import your custom CSS (make sure you have the CSS imported here)

const About = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">About MichuuX</h2>
        <div className="row align-items-center">
          {/* Text and Image Equal Height */}
          <div className="col-md-6 d-flex align-items-stretch">
            <div className={`image-container ${isClicked ? 'animate' : ''}`} onClick={handleImageClick}>
              <img 
                src={img5} 
                alt="MichuuX Team"
                className="img-fluid rounded" 
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p>
                Founded on April 10, 2025, by a team of 5 senior engineers and managers from diverse domains, 
                MichuuX aims to bridge innovation and impact. We are committed to building a better, smarter, 
                and more sustainable world by leveraging advanced technology and strategic collaboration.
                The “X” in MichuuX symbolizes our cross-sectoral expertise and integrated approach to development, 
                representing our core service areas including Data Centers, Smart Campus Solutions, Software 
                & System Development, Construction, Renewable Energy, Agriculture, Manufacturing, Import & 
                Export, Media, Education, and AID Projects. 
                <strong> Our Motto: “Xpertise that Transforms. Innovation that Empowers.”</strong> 
                This belief guides us in our efforts to transform industries and uplift communities.
              </p>
              {/* Updated button class for primary styling */}
              <a href="/more-about-michuux" className="btn btn-primary mt-3">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;