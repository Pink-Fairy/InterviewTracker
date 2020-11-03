import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

export default function Header({ setIsLogin }) {
    // header and logout button for design changes: https://material-ui.com/getting-started/usage/
    
    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
    }
    return (
   
        <div className="Header">
            <Link to='/' onClick={logoutSubmit} className="logout">LOGOUT</Link>
            <Avatar alt="Remy Sharp" src="https://freesvg.org/img/pink-fairy.png" />  
        </div>
        
    )
}
