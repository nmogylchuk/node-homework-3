import React from "react";
// import shipper_photo from './../../images/shipper/shipper_photo.png';
import { NavLink } from 'react-router-dom';

const ProfileShipper = () => {
    return (
        <div>
            <div className="block">
                <div className="shipper">
                    <div className="shipper__container isSmall">
                        <div className="image-wrapper">
                            {/* <img className="shipper__image" src={shipper_photo} alt="person" /> */}
                            <img className="shipper__image" alt="person" />
                        </div>
                    </div>
                    <div className="shipper__container isBig">
                        <div className="shipper__info">
                            <p className="shipper__characteristic">
                                <span className="driver__name">Name:</span>
                                {/* {name} */}
                            </p>
                            <p className="shipper__characteristic">
                                <span className="driver__age">Age:</span>
                                {/* {props.age} years */}
                            </p>
                            <p className="shipper__characteristic">
                                <span className="driver__sex">Sex:</span>
                                {/* {props.sex} */}
                            </p>
                            <p className="shipper__characteristic">
                                <span className="driver__languages">Languages:</span>
                                {/* {props.languages} */}
                            </p>
                            <p className="shipper__characteristic">
                                <span className="driver__experience">Experience:</span>
                                {/* {props.experience} years */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileShipper;