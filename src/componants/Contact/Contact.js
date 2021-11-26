import React from 'react';
import contact from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div>
            <h1 className="text-primary">Contact Us </h1>
            <img className="my-5" style={{width:'75%'}} src={contact} alt="" />
        </div>
    );
};

export default Contact;