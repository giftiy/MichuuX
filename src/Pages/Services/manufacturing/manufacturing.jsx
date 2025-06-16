import React from 'react';
import './manufacturing.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- LOCAL IMAGE IMPORT ---
import heroImage from '../../../assets/mining/mining9.jpg';

// --- DATA: All your Manufacturing content ---
import whyUsImageUrl from '../../../assets/mining/mining10.jpg';

const servicesData = [
    { icon: 'fa-solid fa-cogs', title: 'Machine Manufacturing', items: ['Custom machines for various industries', 'Precision engineering & fabrication', 'Assembly line & robotic automation'] },
    { icon: 'fa-solid fa-wheat-awn', title: 'Agro-Processing Equipment', items: ['Machinery for food processing & milling', 'Custom fruit & vegetable processing equipment', 'Dairy processing solutions'] },
    { icon: 'fa-solid fa-microchip', title: 'Technology Equipment', items: ['IoT devices, sensors, & automation tools', 'Manufacturing of electronic components', 'Smart agriculture technologies'] },
    { icon: 'fa-solid fa-robot', title: 'Industrial Automation & Robotics', items: ['Automation for manufacturing plants', 'Robotic arms and automated conveyors', 'Custom packaging & sorting systems'] },
    { icon: 'fa-solid fa-recycle', title: 'Sustainable Manufacturing', items: ['Eco-friendly machinery development', 'Renewable energy in production', 'Waste reduction & recycling tech'] },
    { icon: 'fa-solid fa-industry', title: 'Custom Machinery Solutions', items: ['Tailored machines for specific industries', 'Modular and scalable designs', 'Low-volume, high-complexity expertise'] }
];

const whyUsData = [
    { icon: 'fa-solid fa-drafting-compass', text: 'Expertise in custom machine and equipment design' },
    { icon: 'fa-solid fa-gears', text: 'Focus on precision engineering and advanced technologies' },
    { icon: 'fa-solid fa-leaf', text: 'Commitment to sustainable and eco-friendly solutions' },
    { icon: 'fa-solid fa-handshake-angle', text: 'End-to-end support from design to installation' }
];

// --- The Main Page Component ---
const Manufacturing = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="manufacturing-page">
            <section className="manufacturing-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Manufacturing</h1>
                    <p className="hero-subtitle">
                        Specializing in the design, production, and supply of high-quality industrial machinery, agro-processing equipment, and advanced technology solutions.
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
                            className={`service-card animate-on-scroll zoom-in ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="service-card-header">
                                <i className={service.icon}></i>
                                <h3 className="service-card-title">{service.title}</h3>
                            </div>
                            <ul className="service-card-items">
                                {service.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={whyUsRef} className="why-us-section">
                <div className={`section-header animate-on-scroll fade-in-down ${whyUsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Why Choose MichuuX Manufacturing?</h2>
                </div>
                <div className="why-us-content">
                    <div className={`why-us-image-container animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        <img src={whyUsImageUrl} alt="Advanced industrial robotics" />
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

export default Manufacturing;