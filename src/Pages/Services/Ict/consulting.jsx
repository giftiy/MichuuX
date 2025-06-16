
import React from 'react';

import './consulting.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your ICT Consulting content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { title: 'IT Infrastructure Assessment and Planning', description: 'A comprehensive analysis of your current systems with an actionable roadmap for improvement, scalability, and cost-efficiency.' },
    { title: 'Cloud Strategy and Migration Consulting', description: 'Expert guidance on adopting private, public, or hybrid cloud solutions tailored to your specific business objectives and security requirements.' },
    { title: 'Network Design and Optimization', description: 'Designing secure, scalable, and high-performance network architectures to ensure seamless connectivity and reliability.' },
    { title: 'Cybersecurity Consulting', description: 'Developing robust security frameworks through risk assessments, policy development, and best-practice implementations.' },
    { title: 'Digital Transformation Strategy', description: 'Helping your organization leverage modern technologies like AI, IoT, and automation to drive innovation and gain a competitive edge.' },
    { title: 'Business Continuity & Disaster Recovery Planning', description: 'Creating and implementing strategies to ensure your business can withstand and quickly recover from unexpected disruptions.' },
    { title: 'IT Project Management', description: 'Providing end-to-end management of your IT projects, ensuring they are delivered on time, within budget, and to scope.' },
    { title: 'Technology Roadmaps & IT Budgeting', description: 'Strategic, long-term planning for your IT investments, perfectly aligned with your business growth and future goals.' }
];

// --- The Main Page Component ---
const Consulting = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    
    return (
        <div className="consulting-page">
            <section className="consulting-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">ICT Consulting & Strategy</h1>
                    <p className="hero-subtitle">
                        We work closely with you to align your IT strategies with your business goals, ensuring smarter investments and better outcomes.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our ICT Consulting Services</h2>
                </div>
                <div className="services-list-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-item animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="service-item-number">{String(index + 1).padStart(2, '0')}</div>
                            <div className="service-item-content">
                                <h3 className="service-item-title">{service.title}</h3>
                                <p className="service-item-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          
        </div>
    );
};

export default Consulting;