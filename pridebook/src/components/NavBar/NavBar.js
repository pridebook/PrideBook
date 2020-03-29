import React from 'react';
import './NavBarStyles.css';

const NavBar = () =>{
    return( 
    <div className="Nav">
        <h4><a href="/">Home</a></h4>
        <h4><a href="chat">Chat</a></h4>
        <h4><a href="profile">Profile</a></h4>
    </div>)
};

export default NavBar;