import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const LoginPage = ()=>{
    return(
        <div>
           <Header/> 
        <div className='LoginPage'>
            <h4><Link to="/" className="Link">Login</Link></h4>
            <h4><Link to="/signup" className="Link">Signup</Link></h4>
        </div>
        </div>
    )
};
export default LoginPage;