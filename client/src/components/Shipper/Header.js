import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from './../images/logo';

const HeaderShipper = (props) => {
    return (
        <div className="header">
            <div className="header__container block">
                <div className="header__logo logo">
                    <NavLink to="/shipper" className="logo__link">
                        <img alt="Logo" className="logo__image"></img>
                    </NavLink>
                </div>
                <div className="header__spacer"></div>
                <div className="header__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/shipper/profile" className="nav__link">Profile</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/shipper/loads" className="nav__link">Loads</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/shipper/shipping" className="nav__link">My Shipping</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderShipper;
