import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant';
import './consultants.css'

const Consultants = () => {
    const [consultants, setConsultants] = useState([])
    useEffect(()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setConsultants(data));
    },[])
    return (
        <div>
            <h2 className="text-danger mt-4">Consultants Information</h2>
            <div className="consultants">
            {
                consultants.map(consultant => <Consultant
                key={consultant.id}
                consultant={consultant}
                ></Consultant>)
            }
        </div>
        </div>
    );
};

export default Consultants;