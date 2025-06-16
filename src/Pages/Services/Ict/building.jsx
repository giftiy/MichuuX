import React from 'react';
import './building.css'; 
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Make sure this path is correct

// --- DATA: All your Capacity Building content ---

const heroImageUrl = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { 
        icon: 'fa-solid fa-certificate', 
        title: 'Technical Training & Certification Programs', 
        description: 'Hands-on training for IT staff on networking, cybersecurity, and cloud, leading to certifications from Fortinet, Huawei, and Microsoft.' 
    },
    { 
        icon: 'fa-solid fa-users', 
        title: 'End-User Training Programs', 
        description: 'Workshops to help employees master collaboration tools, cloud platforms, and cybersecurity best practices.' 
    },
    { 
        icon: 'fa-solid fa-tools', 
        title: 'IT Skills Development Workshops', 
        description: 'Customized technical workshops to upgrade internal IT capabilities in server management, virtualization, and backup solutions.' 
    },
    { 
        icon: 'fa-solid fa-shield-virus', 
        title: 'Cybersecurity Awareness Training', 
        description: 'Educating your entire workforce on identifying phishing attempts, securing data, and following safe online practices.' 
    },
    { 
        icon: 'fa-solid fa-sync-alt', 
        title: 'Change Management Support', 
        description: 'Helping teams adapt smoothly to new systems and digital transformations through structured training and communication.' 
    },
    { 
        icon: 'fa-solid fa-brain', 
        title: 'Leadership & Strategic IT Training', 
        description: 'Equipping managers and business leaders with the knowledge to drive innovation and lead technology initiatives.' 
    }
];

// --- The Main Page Component ---
const Building = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: timelineRef, inView: timelineInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="capacity-page">
            <section className="capacity-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Capacity Building</h1>
                    <p className="hero-subtitle">
                        At Michuu ICT, we believe that technology success starts with people. Our services are designed to empower your teams with the knowledge and skills they need to maximize your IT investments.
                    </p>
                </div>
            </section>

            <section ref={timelineRef} className="timeline-section">
                <div className={`section-header animate-on-scroll fade-in-down ${timelineInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Our Capacity Building Services</h2>
                </div>
                <div className="timeline-container">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll ${timelineInView ? 'is-visible' : ''} ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}
                            style={{ transitionDelay: timelineInView ? `${index * 0.1}s` : '0s' }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon"><i className={service.icon}></i></div>
                                <h3 className="timeline-title">{service.title}</h3>
                                <p className="timeline-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Building;