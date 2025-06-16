import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to make sections clickable
import './agriculture.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation';


import heroImage from '../../../assets/mining/agriculture.jpg';

// --- DATA: All your Agriculture content ---
const whyUsImageUrl = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80';

const servicesData = [
    { icon: 'fa-solid fa-satellite-dish', title: 'Precision Agriculture', items: ['GPS-guided farm equipment', 'Data-driven farming techniques', 'Soil health monitoring & VRT'] },
    { icon: 'fa-solid fa-seedling', title: 'Sustainable Farming Solutions', items: ['Organic & regenerative methods', 'Soil conservation & water management', 'Sustainable fertilizer alternatives'] },
    { icon: 'fa-solid fa-faucet-drip', title: 'Irrigation & Water Management', items: ['Drip, sprinkler, and surface systems', 'Smart water management with IoT', 'Rainwater harvesting solutions'] },
    { icon: 'fa-solid fa-industry', title: 'Agro-processing Solutions', items: ['Post-harvest handling & processing', 'Grain milling & food packaging', 'Cold storage & supply chain solutions'] },
    { icon: 'fa-solid fa-cow', title: 'Livestock & Poultry Management', items: ['Animal health monitoring systems', 'Smart feeding & water systems', 'Genetic improvement programs'] },
    { icon: 'fa-solid fa-tractor', title: 'Agricultural Equipment Supply', items: ['Sales & maintenance of machinery', 'Smart tractors, harvesters, & planters', 'Equipment leasing & support'] },
    { icon: 'fa-solid fa-chalkboard-user', title: 'Agricultural Consultancy & Training', items: ['Farm management advisory services', 'New technology adoption support', 'Agribusiness development & financing'] }
];

const whyUsData = [
    { icon: 'fa-solid fa-microchip', text: 'Technology-driven solutions for modern farming' },
    { icon: 'fa-solid fa-leaf', text: 'Emphasis on sustainability and environmental impact reduction' },
    { icon: 'fa-solid fa-handshake-angle', text: 'Comprehensive support across crop, livestock, and agro-processing sectors' },
    { icon: 'fa-solid fa-chart-line', text: 'Data-centric approach to improve efficiency and profitability' }
];

// --- The Main Page Component ---
const Agriculture = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="agriculture-page">
            {/* === STEP 2: USE THE IMPORTED `heroImage` VARIABLE === */}
            <Link to="/contact" className="hero-link-wrapper">
                <section className="agriculture-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className="hero-overlay"></div>
                    <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                        <h1 className="hero-title">Michuu Agriculture</h1>
                        <p className="hero-subtitle">
                            Revolutionizing agriculture by integrating technology, sustainability, and efficient practices to empower farmers and ensure a food-secure future.
                        </p>
                    </div>
                </section>
            </Link>

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
                    <h2 className="section-title">Why Choose MichuuX Agriculture?</h2>
                </div>
                <div className="why-us-content">
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImageUrl} alt="Agronomist with modern technology" />
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

export default Agriculture;