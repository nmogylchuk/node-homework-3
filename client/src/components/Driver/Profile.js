import React from "react";
import driver_photo from '../../images/driver/driver_photo.png';

const ProfileDriver = () => {
    return (
            <div className="block">
                <div className="driver">
                    <div className="driver__container isSmall">
                        <div className="driver__image-wrapper">
                            <img className="driver__image" src={driver_photo} alt="person" />
                        </div>
                    </div>
                    <div className="driver__container isBig">
                        <div className="driver__info">
                            <p className="driver__characteristic">
                                <span className="driver__name">Name:</span>
                                {/* {name} */}
                            </p>
                            <p className="driver__characteristic">
                                <span className="driver__lastname">Last Name:</span>
                                {/* {name} */}
                            </p>
                            <p className="driver__characteristic">
                                <span className="driver__age">Age:</span>
                                {/* {props.age} years */}
                            </p>
                            <p className="driver__characteristic">
                                <span className="driver__sex">Sex:</span>
                                {/* {props.sex} */}
                            </p>
                            <p className="driver__characteristic">
                                <span className="driver__languages">Languages:</span>
                                {/* {props.languages} */}
                            </p>
                            <p className="driver__characteristic">
                                <span className="driver__experience">Experience:</span>
                                {/* {props.experience} years */}
                            </p>
                            <div className="submit__item">
                            <button className="password-change__button button">Change Password</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProfileDriver;