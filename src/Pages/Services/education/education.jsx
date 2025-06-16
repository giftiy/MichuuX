import React, { useState } from 'react';
import './education.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Smart Education content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';
const whyUsImageUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { 
        icon: 'fa-solid fa-chalkboard-user', 
        title: 'Smart Classroom Solutions', 
        items: ['Design & construction of fully digital classrooms', 'Interactive whiteboards & smart displays', 'Classroom management systems', 'Audio-visual systems for collaboration'] 
    },
    { 
        icon: 'fa-solid fa-flask-vial', 
        title: 'Virtual Science Labs', 
        items: ['Immersive labs for Chemistry, Physics, & Biology', 'Interactive simulations & experiments', 'Safe & cost-effective alternative to physical labs', 'Accessible on desktops, tablets, & VR'] 
    },
    { 
        icon: 'fa-solid fa-laptop-house', 
        title: 'Remote & Hybrid Learning Platforms', 
        items: ['Virtual Learning Environments (VLEs) & LMS', 'Video conferencing & class recording', 'Real-time student interaction tools', 'Mobile learning & cloud-based content'] 
    },
    { 
        icon: 'fa-solid fa-book-open-reader', 
        title: 'Digital Curriculum Development', 
        items: ['Custom e-learning content creation', 'Gamified learning & interactive quizzes', 'Curriculum digitization for all levels', 'Multimedia-enhanced lessons'] 
    },
    { 
        icon: 'fa-solid fa-database', 
        title: 'E-Library & Resource Centers', 
        items: ['Digital library solutions with integrated access', 'Centralized cloud storage & smart search', 'User-friendly portals for students & teachers'] 
    },
    { 
        icon: 'fa-solid fa-network-wired', 
        title: 'EdTech Infrastructure Setup', 
        items: ['Smart school network infrastructure', 'Smart ID systems & student tracking', 'Integration with school ERP platforms'] 
    }
];

const whyUsData = [
    { icon: 'fa-solid fa-puzzle-piece', text: 'Comprehensive solutions from infrastructure to content' },
    { icon: 'fa-solid fa-rocket', text: 'Scalable and future-ready technologies' },
    { icon: 'fa-solid fa-graduation-cap', text: 'Expertise in both academic and vocational digital learning' },
    { icon: 'fa-solid fa-mouse-pointer', text: 'Focus on accessibility, engagement, and interactive learning' }
];

// --- The Main Page Component ---
const Education = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    
    // State to keep track of the open accordion item (starts with the first tab, index 0)
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        // If the clicked item is already open, close it. Otherwise, open it.
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="education-page">
            <section className="education-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Smart Education</h1>
                    <p className="hero-subtitle">
                        We believe in the power of technology to revolutionize education. Our services enhance teaching and learning through digital tools, intelligent infrastructure, and virtual platforms.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                
                <div className="accordion-container">
                    {servicesData.map((service, index) => (
                        <div key={index} className="accordion-item">
                            <button
                                className={`accordion-header ${openAccordion === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <i className={`accordion-icon ${service.icon}`}></i>
                                <span className="accordion-title">{service.title}</span>
                                <i className="fa-solid fa-chevron-down accordion-chevron"></i>
                            </button>
                            <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                                <ul className="accordion-list">
                                    {service.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={whyUsRef} className="why-us-section">
                <div className="why-us-content">
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImageUrl} alt="Students collaborating with technology" />
                    </div>
                    <div className={`why-us-list-container animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
                        <h2 className="section-title">Why MichuuX for Smart Education?</h2>
                        {whyUsData.map((item, index) => (
                            <div key={index} className="why-us-item">
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;