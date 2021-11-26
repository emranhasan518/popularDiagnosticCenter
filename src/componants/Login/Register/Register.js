import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    return (
        <div className="register">
            <h2>Please Register</h2>
            
            <form>
                <input type="email" placeholder="Enter your email"/><br />
                <input type="password" placeholder="Password"/><br />
                <input type="phone" placeholder="Phone"/><br />
                <input type="address" placeholder="Address" /><br />
                <input className="my-2" type="submit" value="Submit" /><br />
            </form>

            <button className="btn btn-warning">Google Sign in</button><br />

            <Link to="/login">
            Alreadly Registered?
            </Link>
        </div>
    );
};

export default Register;