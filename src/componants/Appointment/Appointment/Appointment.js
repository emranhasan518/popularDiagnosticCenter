import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Appointment = () => {
    const {serviceId} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    // console.log(serviceDetails)

    useEffect(()=>{
        fetch('/doctor.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))

    },[])

    const abc = serviceDetails.filter(service => service.id == serviceId);
    // console.log(abc[0].name)


    return (
        <div>
            <div class="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="details my-5 mx-5 justify-content-center">
                        <h2 className="text-primary">{abc[0]?.name}</h2>
                        <h3><img style={{width:'40%', borderRadius:'10px'}} src={abc[0]?.img} /></h3>
                        <h2 className="text-danger">Consultant: {abc[0]?.consultantSector}</h2>
                        <h3>Consulting Fee: {abc[0]?.appointmentCost}</h3>
                        <p>{abc[0]?.Description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Appointment;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import './Service.css'
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// const Service = () => {
//     // Geting Data
//     const { serviceId } = useParams();
//     const [details, setDetails] = useState([]);
//     useEffect(() => {
//         fetch('/data.json')
//             .then(res => res.json())
//             .then(data => setDetails(data))
//     }, [details]);

//     const EaxctItem = details?.filter(td => td.id == serviceId);
//     // DisStruchering
//     // const { name, id, img } = EaxctItem[0]
//     console.log(EaxctItem[0])
//     return (
//         <div className="container">


//             <div class="row">
//                 <div className="col-lg-7 col-sm-12">
//                     <div className="details my-5  justify-content-center">

//                         <h2 className="text-info">{EaxctItem[0]?.name}</h2>
//                         <hr />
//                         <h3><img className="img-fluid" src={EaxctItem[0]?.img} /></h3>
//                         <p>{EaxctItem[0]?.discription}</p>
//                     </div>
//                 </div>
//                 <div className="col-lg-5 col-sm-12 my-5" >
//                     <Link to="/home" > <Button className="btn-waring">Go Home</Button></Link>
//                     <Link to="/register" > <Button className="btn-waring">Register</Button></Link>
//                     <Link to="/about" > <Button className="btn-waring">About-Us</Button></Link>
//                 </div>


//             </div>



//         </div>
//     );
// };

// export default Service;