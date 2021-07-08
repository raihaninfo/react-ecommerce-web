import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='text-center'>
            <img className="img-fluid logo" src={logo} alt="" />
            <Navbar></Navbar>
        </div>
    );
};

export default Header;