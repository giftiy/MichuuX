import React from 'react';

import './renewable.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation';

// === ALL IMPORTS ARE NOW GROUPED AT THE TOP ===
import whyUsImage from '../../../assets/mining/mining5.png';

// --- DATA & VARIABLES ---
// All 'const' declarations now come after all 'import' statements.
const heroImageUrl = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { icon: 'fa-solid fa-solar-panel', title: 'Solar Energy Solutions', items: ['On-grid, off-grid, and hybrid systems', 'Solar farms and rooftop installations', 'Battery storage integration'] },
    { icon: 'fa-solid fa-wind', title: 'Wind Energy Systems', items: ['Small to medium wind turbine solutions', 'Site assessment & feasibility studies', 'Hybrid wind-solar system integration'] },
    { icon: 'fa-solid fa-car-battery', title: 'Energy Storage Solutions', items: ['Lithium-ion & deep cycle battery systems', 'Smart energy management & backup', 'Off-grid and microgrid architecture'] },
    { icon: 'fa-solid fa-sitemap', title: 'Mini-Grids & Rural Electrification', items: ['Off-grid solutions for remote communities', 'Clean, decentralized energy systems', 'Community engagement & training'] },
    { icon: 'fa-solid fa-hand-holding-droplet', title: 'Solar-Powered Water Solutions', items: ['Solar water pumps for agriculture', 'Solar-powered purification systems', 'Clean water access projects'] },
    { icon: 'fa-solid fa-house-chimney-medical', title: 'Green Building Integration', items: ['Energy systems for homes, schools, & offices', 'Building-integrated PV (BIPV)', 'Smart energy control & automation'] },
    { icon: 'fa-solid fa-clipboard-list', title: 'Energy Auditing & Consulting', items: ['Energy efficiency audits & site evaluations', 'Project feasibility & ROI planning', 'Renewable energy policy consulting'] }
];

const whyUsData = [
    { icon: 'fa-solid fa-gears', text: 'Tech-driven, community-focused clean energy solutions' },
    { icon: 'fa-solid fa-expand', text: 'Scalable systems for residential, commercial, and rural sectors' },
    { icon: 'fa-solid fa-certificate', text: 'Proven expertise in solar, wind, and hybrid energy design' },
    { icon: 'fa-solid fa-seedling', text: 'Commitment to sustainability and SDG-aligned development' }
];

// --- The Main Page Component ---
const Renewable = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="renewable-page">
            <section className="renewable-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Renewable Energy</h1>
                    <p className="hero-subtitle">
                        Powering the future through clean, sustainable, and smart energy solutions.
                    </p>
                    
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="service-card-icon"><i className={service.icon}></i></div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <ul className="service-card-items">
                                {service.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={whyUsRef} className="why-us-section">
                <div className={`section-header animate-on-scroll fade-in-down ${whyUsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Why Choose MichuuX Renewable?</h2>
                </div>
                <div className="why-us-content">
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImage} alt="Clean energy technology" />
                    </div>
                    <div className={`why-us-list-container animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
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

export default Renewable;