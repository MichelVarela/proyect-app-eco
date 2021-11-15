import React from 'react';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import './index.scss';

const DropdownMenu = () => {
    return (
        <>
            <ul className='dropdown-menu'>
                <button><FaSearch /> Search</button>
                <button><FaUser /> Profile</button>
                <button><FaShoppingBag /> Cart</button>
                <li>Ocassions</li>
                <li>All Categories</li>
                <li>Gifts & Bundles</li>
                <li><a href="https://">Our Brands</a></li>
                <li><a href="https://">About Us</a></li>
            </ul>
        </>
    )
}

export default DropdownMenu;
