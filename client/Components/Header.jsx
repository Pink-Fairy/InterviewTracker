import React from 'react';
import { Link } from 'react-router-dom';


export default function Header({ setIsLogin }) {
    
    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
    }
    return (
   
        <div className="Header">
            <Link to='/' onClick={logoutSubmit} className="logout">LOGOUT</Link>     
        </div>
        
    )
}
