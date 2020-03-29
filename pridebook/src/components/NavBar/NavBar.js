import React from 'react';
import './NavBarStyles.css';
import {Link }from 'react-router-dom';
const NavBar = () =>{
    return( 
    <div className="Nav">
        <h4><Link to="/Home" className="Link">Home</Link></h4>
        <h4><Link to="/chat" className="Link">Chat</Link></h4>
        <h4><Link to="/profile" className="Link">Profile</Link></h4>
    </div>)
};

export default NavBar;