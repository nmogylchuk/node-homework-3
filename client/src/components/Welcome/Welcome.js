import React from 'react';
import { NavLink } from 'react-router-dom';

const Welcome = (props) => {
    return (
        <div className="welcome">
            <div className="welcome__title title">Welcome to Uber!</div>
            <div className="welcome__description">We sell high-quality, used commercial vehicles covering all brands and models in over 30 countries from our total of 36 TopUsed centres. Search for and find your used truck or bus easily using our unique vehicle finder and benefit from the high quality of our vehicles. We will be happy to supplement your desired vehicle with bespoke service offers such as Europe-wide used vehicle warranties, individual financing solutions, bespoke repair and maintenance contracts as well as customer-specific vehicle adaptations. Our MAN TopUsed experts in our TopUsed sites will be happy to provide you with more details. </div>
            <div className="welcome__list">
                <div className="welcome__item item">
                    <div className="item__type">Driver</div>
                    <div className='welcome__links'>
                        <button className="welcome__button button">
                            <NavLink to={{pathname: '/login', userType: 'driver'}} className="button__link">Sign In</NavLink>
                        </button>
                        <button className="welcome__button button">
                            <NavLink to={{pathname: '/signup', userType: 'driver'}} className="button__link">Sign Up</NavLink>
                        </button>
                    </div>
                </div>
                <div className="welcome__item">
                    <div className="item__type">Shipper</div>
                    <div className='welcome__links'>
                        <button className="welcome__button button">
                            <NavLink to={{pathname: '/login', userType: 'shipper'}} className="button__link" >Sign In</NavLink>
                        </button>
                        <button className="welcome__button button">
                            <NavLink to={{pathname: '/signup', userType: 'shipper'}} className="button__link" >Sign Up</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;