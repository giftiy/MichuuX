// src/Pages/Services/ict/Ict.jsx (New "Alternating" Style)
import React from 'react';
import { Link } from 'react-router-dom';
import './ict.css'; // We will create a new, dedicated CSS file for this
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import cardImg1 from '../../../assets/img/cards/card1.jpg';
import cardImg2 from '../../../assets/img/cards/card2.jpg';
import cardImg3 from '../../../assets/img/cards/card3.jpg';
import cardImg4 from '../../../assets/img/cards/card4.jpg';
import cardImg5 from '../../../assets/img/cards/card5.jpg';
import cardImg6 from '../../../assets/img/cards/card6.jpg';
import cardImg7 from '../../../assets/img/cards/card7.jpg';
import cardImg8 from '../../../assets/img/cards/card8.jpg';
import cardImg9 from '../../../assets/img/cards/card9.jpg';
import cardImg10 from '../../../assets/img/cards/card10.jpg';

// === NEW HERO IMAGE LINK ===
import heroImageUrl from '../../../assets/mining/ict2.jpg'

// Your existing cardData array
const cardData = [
  { id: 1, title: "Data Center Solutions", image: cardImg1, description: "Design, build, and manage state-of-the-art data centers.", path: "/services/ict/datacenter" },
  { id: 2, title: "Network Infrastructure", image: cardImg2, description: "Robust LAN/WAN, fiber optics, and wireless solutions.", path: "/services/ict/network" },
  { id: 3, title: "Software Development", image: cardImg3, description: "Custom web, mobile, and enterprise application development.", path: "/services/ict/software" },
  { id: 4, title: "Smart City", image: cardImg4, description: "Implementing IoT and automation for smarter urban environments.", path: "/services/ict/smart-city" },
  { id: 5, title: "Cybersecurity", image: cardImg5, description: "Protecting your digital assets with advanced security measures.", path: "/services/ict/cybersecurity" },
  { id: 6, title: "Cloud Services", image: cardImg6, description: "Migration, hosting, and management on leading cloud platforms.", path: "/services/ict/cloud" },
  { id: 7, title: "Managed IT Support", image: cardImg7, description: "Comprehensive 24/7 technical support and system maintenance.", path: "/services/ict/support" },
  { id: 8, title: "Collaboration Tools", image: cardImg8, description: "Unified communications and modern collaboration platforms.", path: "/services/ict/collaboration" },
  { id: 9, title: "ICT Consulting", image: cardImg9, description: "Strategic guidance for digital transformation and optimization.", path: "/services/ict/consulting" },
  { id: 10, title: "Capacity Building", image: cardImg10, description: "Empowering teams with essential ICT training and skills.", path: "/services/ict/building" },
];


// --- Sub-Component for a single service row ---
const ICTFeatureRow = ({ service, index }) => {
    const { ref, inView } = useScrollAnimation({ triggerOnce: true, threshold: 0.25 });
    const isReversed = index % 2 !== 0;

    return (
        <div ref={ref} className={`ict-feature-row ${isReversed ? 'reversed' : ''}`}>
            <div className={`feature-image-container animate-on-scroll ${inView ? 'is-visible' : ''} ${isReversed ? 'fade-in-left' : 'fade-in-right'}`}>
                <img src={service.image} alt={service.title} />
            </div>
            <div className={`feature-content animate-on-scroll ${inView ? 'is-visible' : ''} ${isReversed ? 'fade-in-right' : 'fade-in-left'}`}>
                <h3 className="feature-title">{service.title}</h3>
                <p className="feature-description">{service.description}</p>
                <Link to={service.path} className="feature-button">
                    Learn More
                </Link>
                
            </div>
        </div>
    );
};


// --- The Main Page Component ---
const Ict = () => {
    const heroTitle = "Michuu ICT";
    const heroDescription = `Welcome to Michuu ICT, where innovation meets technology. We provide cutting-edge solutions tailored for your success.`;

    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="ict-page-new">
            <section
                className="ict-hero-new"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="hero-overlay-new"></div>
                <div ref={heroRef} className={`hero-content-new animate-on-scroll ${heroInView ? 'fade-in-up is-visible' : 'fade-in-up'}`}>
                    <h1 className="hero-title-new">{heroTitle}</h1>
                    <p className="hero-subtitle-new">{heroDescription}</p>
                </div>
            </section>

            <section ref={servicesRef} className="ict-services-section">
                <div className={`section-header animate-on-scroll ${servicesInView ? 'fade-in-down is-visible' : 'fade-in-down'}`}>
                    <h2 className="section-title">Our ICT Focus Areas</h2>
                </div>
                <div className="features-wrapper">
                    {cardData.map((service, index) => (
                        <ICTFeatureRow key={service.id} service={service} index={index} />
                    ))}
                </div>
                 <div className={`text-center mt-5 animate-on-scroll ${servicesInView ? 'fade-in-up is-visible' : 'fade-in-up'}`} style={{transitionDelay: '0.5s'}}>
                    <Link to="/#services" className="back-to-services-button">
                      Back to All Services
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Ict;