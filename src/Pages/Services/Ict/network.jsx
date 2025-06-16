import React from 'react';
import './network.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation';

const heroImageUrl = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';
const servicesData = [
    { icon: 'fa-solid fa-network-wired', title: 'LAN/WAN Design and Implementation', description: 'Crafting efficient local and wide area networks tailored to your specific operational needs.' },
    { icon: 'fa-solid fa-wave-square', title: 'Fiber Optics and Structured Cabling', description: 'Installing high-speed, reliable physical infrastructure for maximum data throughput and future scalability.' },
    { icon: 'fa-solid fa-wifi', title: 'Wireless Solutions & Optimization', description: 'Deploying secure, high-performance Wi-Fi networks and optimizing connectivity for a seamless user experience.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Network Security & Monitoring', description: 'Implementing next-gen firewalls, IPS/IDS, and 24/7 monitoring to protect your network from all threats.' }
];

const Network = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="network-page">
            <section className="network-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Network Infrastructure</h1>
                    <p className="hero-subtitle">Building robust, secure, and scalable network foundations that power your enterprise and ensure seamless connectivity.</p>
                </div>
            </section>
            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Core Network Services</h2>
                </div>
                <div className="flow-container">
                    {servicesData.map((service, index) => (
                        <div key={index} className={`flow-item animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s`}}>
                            <div className="flow-icon"><i className={service.icon}></i></div>
                            <div className="flow-content">
                                <h3 className="flow-title">{service.title}</h3>
                                <p className="flow-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default Network;