import React from 'react';
import './construction.css'; // We will create this file next
import useScrollAnimation from '../../../hooks/useScrollAnimation'; // Assuming the hook is here

// --- Data for easy updates ---

// Replace with your actual image URL
const heroImageUrl = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

const servicesData = [
    { icon: 'fa-solid fa-hard-hat', title: 'General Contracting', description: 'We manage every phase of construction with full responsibility, ensuring quality, safety, and timeline compliance.' },
    { icon: 'fa-solid fa-drafting-compass', title: 'Design & Build', description: 'An integrated approach offering a one-stop solution, reducing costs and accelerating project delivery.' },
    { icon: 'fa-solid fa-road-bridge', title: 'Civil & Infrastructure', description: 'Executing critical projects like roads, bridges, and public utilities to shape cities and connect communities.' },
    { icon: 'fa-solid fa-building', title: 'Commercial & Industrial', description: 'Building functional and modern offices, factories, and warehouses tailored to your operational needs.' },
    { icon: 'fa-solid fa-house-chimney-user', title: 'Residential Construction', description: 'Crafting smart, efficient, and lasting residential spaces from high-rises to private villas.' },
    { icon: 'fa-solid fa-paint-roller', title: 'Interior Fit-Out & Renovation', description: 'Breathing new life into existing spaces with beautiful, functional interiors for offices, retail, and homes.' },
    { icon: 'fa-solid fa-clipboard-check', title: 'Project Management', description: 'Ensuring your project is delivered on time, within budget, and to the highest quality and safety standards.' },
    { icon: 'fa-solid fa-plug-circle-bolt', title: 'MEP Works', description: 'Delivering complete Mechanical, Electrical & Plumbing solutions fully integrated with your building design.' },
    { icon: 'fa-solid fa-leaf', title: 'Smart & Sustainable', description: 'Incorporating smart tech, energy-efficient systems, and renewables to future-proof your investment.' },
    { icon: 'fa-solid fa-key', title: 'Turnkey Solutions', description: 'From land development to full execution, we deliver projects that are completely ready for use.' }
];

const whyUsData = [
    { icon: 'fa-solid fa-star', text: 'Multi-disciplinary expertise across sectors' },
    { icon: 'fa-solid fa-lightbulb', text: 'Emphasis on innovation and smart technology' },
    { icon: 'fa-solid fa-shield-halved', text: 'Strong project management and quality assurance' },
    { icon: 'fa-solid fa-coins', text: 'Commitment to sustainable and cost-effective building' }
];

// --- The Main Component ---

const Construction = () => {
    // Hooks for animating different sections
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: featuresRef, inView: featuresInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
    const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="construction-page">
            {/* 1. Hero Section with Cover Image */}
            <section
                ref={heroRef}
                className="construction-hero"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            >
                <div className="hero-overlay"></div>
                <div className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Michuu Construction</h1>
                    <p className="hero-subtitle">
                        At MichuuX, we build with purpose. Our construction division combines modern engineering,
                        smart technology, and sustainable practices to deliver infrastructure that stands the test of time.
                    </p>
                </div>
            </section>

            {/* 2. What We Offer Section (Services Grid) */}
            <section ref={featuresRef} className="construction-section features-section">
                <div className={`section-header animate-on-scroll fade-in-down ${featuresInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-intro">From concept to completion, we handle projects of every scale with precision and care.</p>
                </div>
                <div className="features-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`feature-card animate-on-scroll fade-in-up ${featuresInView ? 'is-visible' : ''}`}
                            style={{ transitionDelay: featuresInView ? `${index * 0.05}s` : '0s' }}
                        >
                            <div className="feature-card__icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="feature-card__title">{service.title}</h3>
                            <p className="feature-card__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Why Choose Us Section */}
            <section ref={whyUsRef} className="construction-section why-us-section">
                <div className={`section-header animate-on-scroll fade-in-down ${whyUsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Why MichuuX Construction?</h2>
                </div>
                <div className="why-us-content">
                    <div className={`why-us-image animate-on-scroll fade-in-left ${whyUsInView ? 'is-visible' : ''}`}>
                        {/* You can replace this with a real image of your team or a project */}
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=853&q=80" alt="Modern building architecture" />
                    </div>
                    <ul className={`why-us-list animate-on-scroll fade-in-right ${whyUsInView ? 'is-visible' : ''}`}>
                        {whyUsData.map((item, index) => (
                             <li key={index} style={{ transitionDelay: whyUsInView ? `${0.2 + index * 0.1}s` : '0s' }}>
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Construction;