import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturesSection.css'; // Optional: Add custom styles if needed

import React from 'react';
import { assest } from '../../assest/assest';

const FeaturesSection = () => {
    const features = [
        {
            icon: 'bi-geo-alt',
            title: 'Various Adventures',
            text: 'Embark on thrilling hikes, boat rides, and cultural excursions to explore Sri Lanka\'s hidden gems. From mountains to beaches, we offer a variety of outdoor activities to suit all preferences.',
        },
        {
            icon: 'bi-map',
            title: 'Adventurous Trails',
            text: 'Discover off-the-beaten-path trails with scenic views of tea plantations, waterfalls, and wildlife. Perfect for those who enjoy exploring nature on foot or bike.',
        },
        {
            icon: 'bi-person-check',
            title: 'Trained Guides',
            text: 'Our expert guides are knowledgeable about the local history, culture, and wildlife. They ensure a safe, informative, and unforgettable experience on every tour.',
        },
        {
            icon: 'bi-people',
            title: 'Family-Friendly Trips',
            text: 'We offer family-friendly tours with activities suited for all ages. From relaxing beach days to cultural explorations, your family will have a memorable experience.',
        },
        {
            icon: 'bi-box',
            title: 'Custom Packages',
            text: 'Personalize your travel experience with our custom packages. Whether you want a luxury getaway or a budget-friendly trip, we cater to your specific needs.',
        },
        {
            icon: 'bi-file-earmark-text',
            title: 'Complete Guide',
            text: 'Receive a comprehensive guide with all the information you need for your trip. From itineraries to travel tips, we provide you with everything to plan the perfect vacation.',
        },
    ];

    return (
        <div 
            className="features-section" 
            style={{ 
                backgroundImage: `url(${assest.g1})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center', 
                backgroundAttachment: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for contrast
                padding: 0, // Remove any padding from this div to avoid extra spacing
            }}
        >
            <div className="container-fluid py-5 text-center"> {/* Use container-fluid for full width */}
                <h4 className="text-light mb-3">Value before business</h4>
                <h2 className="text-light font-weight-bold mb-5">We Offer the Best</h2>
                <div className="row justify-content-center">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="feature-card p-4 rounded-3 shadow-lg h-100 d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center mb-3">
                                    <i className={`bi ${feature.icon} text-primary me-3`} style={{ fontSize: '36px' }}></i>
                                    <div>
                                        <h5 className="mb-1 text-light font-weight-bold">{feature.title}</h5>
                                        <p className="text-muted small">{feature.text}</p>
                                    </div>
                                </div>
                                <button className="btn btn-light mt-3 align-self-start">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
