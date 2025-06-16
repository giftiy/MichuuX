// src/Pages/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import heroBgVideo from '../assets/img/video.mp4';
import useScrollAnimation from '../hooks/useScrollAnimation';

const heroContent = {
  title: 'MichuuX',
  description: 'Xpertise that Transforms. Innovation that Empowers.',
};

const Header = () => {
  const { ref: captionRef, inView: captionInView } = useScrollAnimation({ threshold: 0.3, triggerOnce: false }); // Animate every time it's in view

  return (
    <section id="home" className="hero-block hero-block-video">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div ref={captionRef} className="container hero-caption-custom">
        <h2 className={`animate-on-scroll ${captionInView ? 'fade-in-down is-visible' : 'fade-in-down'}`}>
            {heroContent.title}
        </h2>
        <p className={`animate-on-scroll ${captionInView ? 'fade-in-up is-visible' : 'fade-in-up'}`} style={{transitionDelay: captionInView ? '0.2s': '0s'}}>
            {heroContent.description}
        </p>
      </div>
    </section>
  );
}

export default Header;