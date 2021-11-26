import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="login">
            <h2>Please Log in </h2>
            <form>
                <input type="email" placeholder="Enter your email"/><br />
                <input type="password" placeholder="Password"/><br />
                <input className="my-2" type="submit" value="Submit" /><br />
            </form>

            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button><br />

            <Link to="/register">
            New User?
            </Link>
        </div>
    );
};

export default Login;