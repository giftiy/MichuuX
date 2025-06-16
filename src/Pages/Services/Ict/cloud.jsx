import React from 'react';
import './cloud.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Cloud Services content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { 
        icon: 'fa-solid fa-server', 
        title: 'Private Cloud Solutions', 
        description: 'Secure, high-performance private environments with full control for your critical workloads.',
        items: ['Hyperconverged Infrastructure (HCI)', 'Virtual Desktop Infrastructure (VDI)', 'Private Storage & Backup', 'Kubernetes Platforms'] 
    },
    { 
        icon: 'fa-solid fa-cloud', 
        title: 'Public Cloud Solutions', 
        description: 'Harness the power of leading platforms like AWS, Azure, and Huawei Cloud for ultimate scalability.',
        items: ['Cloud Migration & IaaS', 'Public VDI & Cloud Backup', 'SaaS Integration', 'Serverless Computing'] 
    },
    { 
        icon: 'fa-solid fa-handshake-angle', 
        title: 'Cloud Consulting & Managed Services', 
        description: 'Expert guidance across your entire cloud journey, from architecture design to security and cost optimization.',
        items: ['Cloud Architecture Design', 'Migration Planning', 'Cloud Security & Optimization', 'Full-Service Cloud Management'] 
    }
];

// --- The Main Page Component ---
const Cloud = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="cloud-page">
            <section className="cloud-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Cloud Services</h1>
                    <p className="hero-subtitle">
                        At Michuu ICT, we deliver end-to-end cloud solutions tailored to your business needs, whether private, public, or hybrid.
                    </p>
                </div>
            </section>

            <section ref={servicesRef} className="cloud-services-section">
                <div className="cloud-services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card animate-on-scroll zoom-in ${servicesInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: servicesInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="service-card-icon-container">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                            <ul className="service-card-items">
                                {service.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Cloud;