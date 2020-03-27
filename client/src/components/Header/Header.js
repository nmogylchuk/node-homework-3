import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from './../images/logo';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__container block">
                <div className="header__logo logo">
                    <NavLink to="/" className="logo__link">
                        <img alt="Logo" className="logo__image"></img>
                    </NavLink>
                </div>
                <div className="header__spacer"></div>
                <div className="header__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">Welcome</NavLink>
                        </li>  

                        {/* <li className="nav__item">
                            <NavLink to="/logout" className="nav__link">Logout</NavLink>
                        </li> */}
                        <li className="nav__item">
                            <NavLink to="/driver" className="nav__link">Driver</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
