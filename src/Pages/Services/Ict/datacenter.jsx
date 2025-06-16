import React from 'react';

import './datacenter.css'; // This line correctly imports your CSS stylesheet
import useScrollAnimation from '../../../hooks/useScrollAnimation';

// --- DATA: All your Data Center content ---

import heroImageUrl from '../../../assets/img/imgg.jpg';

const servicesData = [
    { icon: 'fa-solid fa-server', title: 'Installation and Integration Design' },
    { icon: 'fa-solid fa-wrench', title: 'Maintenance Services' },
    { icon: 'fa-solid fa-tasks', title: 'Management Services' },
    { icon: 'fa-solid fa-shield-halved', title: 'Disaster Recovery and Backup Solutions' },
    { icon: 'fa-solid fa-cloud', title: 'Cloud and Hybrid Cloud Integration' },
    { icon: 'fa-solid fa-headset', title: '24/7 Monitoring and Support' }
];

// --- The Main Page Component ---
const DataCenter = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
  

    return (
        <div className="datacenter-page">
            <section className="datacenter-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Data Center Services</h1>
                    <p className="hero-subtitle">
                        At Michuu ICT, we provide comprehensive Data Center solutions to ensure your infrastructure runs smoothly and securely.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our Data Center Services Include:</h2>
                </div>
                <div className="services-list-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-item-card animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.07}s` : '0s' }}
                        >
                            <div className="service-item-icon"><i className={service.icon}></i></div>
                            <h3 className="service-item-title">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default DataCenter;