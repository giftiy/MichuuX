import React from 'react';
import './smart-city.css';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

import heroImageUrl from '../../../assets/mining/smart.jpg';
const solutions = [
    { icon: 'fa-solid fa-traffic-light', title: 'Smart Traffic Management' },
    { icon: 'fa-solid fa-broadcast-tower', title: 'Connected Public Safety' },
    { icon: 'fa-solid fa-solar-panel', title: 'Sustainable Energy Systems' },
    { icon: 'fa-solid fa-recycle', title: 'Intelligent Waste Management' },
    { icon: 'fa-solid fa-building-shield', title: 'Urban Infrastructure Monitoring' },
    { icon: 'fa-solid fa-users', title: 'Citizen Engagement Platforms' }
];

const SmartCity = () => {
    const { ref: heroRef, inView: heroInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.3 });
    const { ref: solutionsRef, inView: solutionsInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="smart-city-page">
            <section className="smart-city-hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
                <div className="hero-overlay"></div>
                <div ref={heroRef} className={`hero-content animate-on-scroll fade-in-up ${heroInView ? 'is-visible' : ''}`}>
                    <h1 className="hero-title">Smart City Solutions</h1>
                    <p className="hero-subtitle">We offer innovative solutions that leverage IoT, data analytics, and automation to enhance the efficiency of city services, infrastructure, and citizen engagement.</p>
                </div>
            </section>
            <section ref={solutionsRef} className="solutions-section">
                <div className={`section-header animate-on-scroll fade-in-down ${solutionsInView ? 'is-visible' : ''}`}>
                    <h2 className="section-title">Key Smart City Solutions</h2>
                </div>
                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <div key={index} className={`solution-panel animate-on-scroll zoom-in ${solutionsInView ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 0.05}s` }}>
                            <div className="panel-icon"><i className={item.icon}></i></div>
                            <h3 className="panel-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default SmartCity;