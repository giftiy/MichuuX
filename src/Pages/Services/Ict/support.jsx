import React from 'react';

import './support.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Managed IT Support content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { icon: 'fa-solid fa-headset', title: '24/7 Monitoring & Helpdesk', description: 'Real-time monitoring and expert support to resolve issues before they impact your business.' },
    { icon: 'fa-solid fa-cogs', title: 'Proactive Maintenance & Updates', description: 'Regular system updates, patch management, and preventive maintenance to ensure optimal performance.' },
    { icon: 'fa-solid fa-users-cog', title: 'End-User Support', description: 'Fast, friendly assistance for your employees’ hardware, software, and network needs.' },
    { icon: 'fa-solid fa-network-wired', title: 'Network Management', description: 'Management and optimization of your wired and wireless networks for maximum uptime and performance.' },
    { icon: 'fa-solid fa-server', title: 'Server & Infrastructure Management', description: 'Monitoring and maintenance of servers, storage, and critical business applications.' },
    { icon: 'fa-solid fa-lightbulb', title: 'IT Strategy & Consulting', description: 'Guidance on IT planning, budgeting, and technology roadmaps to align IT with your business goals.' }
];

// --- The Main Page Component ---
const Support = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
  

    return (
        <div className="support-page">
            <section className="support-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Managed IT Support</h1>
                    <p className="hero-subtitle">
                        Our team acts as an extension of your business, delivering proactive monitoring, maintenance, and support across your entire IT environment.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our Managed IT Services</h2>
                </div>
                <div className="services-scroll-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card animate-on-scroll zoom-in ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="service-card-icon"><i className={service.icon}></i></div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

           
        </div>
    );
};

export default Support;