import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <div className="logo">EDUcare</div>
                <div>
                    <NavLink className="link" to="/home">Home</NavLink>
                    <NavLink className="link" to="/service">Services</NavLink>
                    <NavLink className="link" to="/about">About Us</NavLink>
                    <NavLink className="link" to="/contact">Contact Us</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;