import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className="about">
            <div className="about-child">
                <h2 className="text-primary">About Us</h2>
                <p>Popular Diagnostic center is one of the leading Health Care survices of Bangladesh. We have branches About All over in the country</p>
            </div>

            <div className="about-child">
                <h2 className="text-primary">About Our Doctor</h2>
                <p>We have the most Expert Doctor all over the country, Our Doctor is well educated from most valuable Medical university in the world, we have the most experenced doctor</p>
            </div>

            <div className="about-child">
                <h2 className="text-primary">Our Services</h2>
                <p>We Giving consulting and diagonostic service all over the country by our many of branch, we sell all authentic medicine came from abroad in our farmacy </p>
            </div>
        </div>
    );
};

export default About;