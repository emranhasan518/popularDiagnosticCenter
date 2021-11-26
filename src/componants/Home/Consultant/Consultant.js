import React from 'react';
import { Link } from 'react-router-dom';
import './consultant.css'

const Consultant = ({consultant}) => {
    const {id, name, consultantSector, appointmentCost, img, Description} = consultant;
    return (
        <div className="consultant pb-3">
            <img src={img} alt="" />
            <h4>Doctor's id: 10{id}</h4>
            <h3 className="text-primary">{name}</h3>
            <h4>Consulting Sector: {consultantSector}</h4>
            <h5>Appointment Fee: {appointmentCost}</h5>
            <p className="px-3">{Description}</p>
            <Link to={`/appointment/${id}`}>
            <button className="btn btn-warning">Book Appointment</button>
            </Link>
        </div>
    );
};

export default Consultant;