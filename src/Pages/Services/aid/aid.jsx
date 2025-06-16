import React from 'react';
import './aid.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation';

// --- DATA: All your AID Projects content ---

import heroImageUrl from '../../../assets/mining/aid.jpg'
const whyUsImageUrl = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { icon: 'fa-solid fa-people-roof', title: 'Humanitarian Infrastructure Development', items: ['Construction of schools, health centers, and community shelters', 'Rural & urban housing projects for vulnerable populations', 'Water, sanitation, and hygiene (WASH) infrastructure'] },
    { icon: 'fa-solid fa-truck-medical', title: 'Emergency & Disaster Response', items: ['Deployment of mobile shelters and water purification units', 'Technology for emergency communication & coordination', 'Logistics support for food & medicine delivery'] },
    { icon: 'fa-solid fa-graduation-cap', title: 'Education & Youth Empowerment', items: ['Establishment of learning centers & mobile classrooms', 'Digital education tools for underserved areas', 'Skills training programs for youth and women'] },
    { icon: 'fa-solid fa-hand-holding-seedling', title: 'Agricultural Support & Food Security', items: ['Distribution of farming tools, seeds, and input kits', 'Setup of community gardens & food production units', 'Farmer training on climate-resilient agriculture'] },
    { icon: 'fa-solid fa-heart-pulse', title: 'Health & Wellness Projects', items: ['Mobile clinics & digital health solutions for remote communities', 'Deployment of telemedicine & health data systems', 'Awareness campaigns on nutrition & hygiene'] },
    { icon: 'fa-solid fa-wifi', title: 'Digital Inclusion & Connectivity', items: ['Low-cost Wi-Fi & device access for rural communities', 'ICT hubs and computer labs in schools', 'Basic digital skills training & tech bootcamps'] }
];

const whyUsData = [
    { icon: 'fa-solid fa-layer-group', text: 'Proven experience in multi-sector development initiatives' },
    { icon: 'fa-solid fa-brain', text: 'Blending technology, infrastructure, and local knowledge' },
    { icon: 'fa-solid fa-handshake', text: 'Deep partnerships with NGOs, governments, and donors' },
    { icon: 'fa-solid fa-people-group', text: 'Focus on sustainability, impact, and community empowerment' }
];

// --- The Main Page Component ---
const Aid = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="aid-page">
            <section className="aid-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu AID Projects</h1>
                    <p className="hero-subtitle">
                        We are committed to making a lasting difference by combining innovation, infrastructure, and human-centered design to uplift lives and empower communities.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="services-section">
                <div className={`section-header animate-on-scroll fade-in-down ${servicesInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                <div className="services-list-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-item animate-on-scroll fade-in-up ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.07}s` : '0s' }}
                        >
                            <div className="service-item-icon">
                                <i className={service.icon}></i>
                            </div>
                            <div className="service-item-content">
                                <h3 className="service-item-title">{service.title}</h3>
                                <ul className="service-item-details">
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
                        <img src={whyUsImageUrl} alt="Community empowerment" />
                    </div>
                    <div className={`why-us-list-container animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
                        <h2 className="section-title">Why Choose MichuuX for AID Projects?</h2>
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

export default Aid;