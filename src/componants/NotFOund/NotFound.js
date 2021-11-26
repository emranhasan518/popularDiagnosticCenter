import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/NotFound/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{width:'40%'}} src={notfound} alt="" />
            <h1 className="text-danger">Error! Page Not Found</h1>
            <Link to="home">
                <button className=" btn btn-warning">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;