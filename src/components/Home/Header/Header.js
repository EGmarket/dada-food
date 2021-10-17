import React from 'react';
import Background from '../../../images/bannerbackground.png';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <img src={Background} alt="" srcset="" />
            <div className="header-content">
                <h1>Best Food For Your Body</h1>
                <div className="search-field">
                    <input type="text" placeholder="search food" />
                    <button>Search</button>
                </div>
            </div>
        </header>
    );
};

export default Header;