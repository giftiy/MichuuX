import React from 'react';
import './software.css';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

import heroImageUrl from '../../../assets/mining/software.jpg';
const services = [
    { icon: 'fa-solid fa-code', title: 'Custom Software Development', text: 'Bespoke solutions for web, mobile, and desktop tailored to your unique business processes.' },
    { icon: 'fa-solid fa-building', title: 'ERP & CRM Systems', text: 'Developing and integrating enterprise-level systems to streamline your operations.' },
    { icon: 'fa-solid fa-puzzle-piece', title: 'API Integration & Middleware', text: 'Connecting disparate systems and services to create a seamless, unified digital ecosystem.' },
    { icon: 'fa-solid fa-brain', title: 'Automation & AI/ML Systems', text: 'Leveraging artificial intelligence and machine learning to build smart, data-driven systems.' }
];

const Software = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="software-page">
            <section className="software-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Software & System Development</h1>
                    <p className="hero-subtitle">From concept to deployment, we build powerful, scalable, and intuitive software solutions that drive business growth and innovation.</p>
                </div>
            </section>
            <section ref={servicesRef} className="services-section">
                <div className="services-container">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s`}}>
                            <div className="service-icon"><i className={service.icon}></i></div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-text">{service.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Software;