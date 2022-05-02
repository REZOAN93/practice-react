import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/user"> User</a>
                <a href="/details">More Details</a>
            </nav>
        </div>
    );
};

export default Header;