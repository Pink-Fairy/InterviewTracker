import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

export default function Header({ setIsLogin }) {
    
    const logoutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
    }
    return (
   
        <div className="Header">
            <Link to='/' onClick={logoutSubmit} className="logout">LOGOUT</Link> 
            <Avatar alt="Remy Sharp" src="https://freesvg.org/img/pink-fairy.png" />
            {/* <div>
                <img src="https://freesvg.org/img/pink-fairy.png" alt="Pink Fairy logo"/>     
            </div> */}
        </div>
        
    )
}
