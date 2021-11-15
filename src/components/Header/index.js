import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './index.scss';
import DropdownMenu from './DropdowMenu';

const Header = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <header>
            <div className="position-relative">
                <a href="https://"><img src={logo} alt="logo" /></a>
                <nav>
                    <ul>
                        <li>Ocassions</li>
                        <li>All Categories</li>
                        <li>Gifts & Bundles</li>
                        <li><a href="https://">Our Brands</a></li>
                        <li><a href="https://">About Us</a></li>
                    </ul>
                </nav>
                <div className="icons-nav">
                    <button><FaSearch /></button>
                    <button><FaUser /></button>
                    <button><FaShoppingBag /></button>
                </div>
                <div className="icon" onClick={ () => setDropdown(!dropdown)}>
                    { dropdown === false ? <FaBars /> : <FaTimes /> } 
                </div>
                { dropdown === true ? <DropdownMenu /> : '' }
            </div>
        </header>
    )
}

export default Header;
