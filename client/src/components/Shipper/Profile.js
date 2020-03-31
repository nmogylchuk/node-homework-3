import React from "react";
import shipper_avatar from '../../images/shipper/shipper_avatar.png';

const ProfileShipper = () => {
    return (
        <div className="block">
            <div className="shipper-profile">
                <div className="shipper-profile__container isSmall">
                    <div className="shipper-profile__image-wrapper">
                        <img className="shipper-profile__image" src={shipper_avatar} alt="person" />
                    </div>
                </div>
                <div className="shipper-profile__container isBig">
                    <div className="shipper-profile__info">
                        <div className="shipper-profile__title title">Your details</div>
                        <div className="shipper-profile__description">Here you can check your personal details. Please note that providing up-to-date information is mandatory</div>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__name">Name:</span>
                            {/* {name} */}
                        </p>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__lastname">Last Name:</span>
                            {/* {name} */}
                        </p>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__age">Age:</span>
                            {/* {props.age} years */}
                        </p>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__sex">Sex:</span>
                            {/* {props.sex} */}
                        </p>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__languages">Languages:</span>
                            {/* {props.languages} */}
                        </p>
                        <p className="shipper-profile__characteristic">
                            <span className="shipper-profile__experience">Experience:</span>
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

export default ProfileShipper;