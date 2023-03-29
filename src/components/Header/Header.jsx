import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='main-header'>
            <nav className='menu'>
                <a href="#"><img src={Logo} alt="Logo" /></a>
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order review</a></li>
                    <li><a href="#">Manage inventory</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;