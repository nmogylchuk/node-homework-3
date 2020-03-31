import React, { useContext, useState, useEffect, useCallback } from "react";
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import driver_avatar from '../../images/driver/driver_avatar.png';

const ProfileDriver = () => {

    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [profile, setProfile] = useState([]);

    const getProfile = useCallback(async () => {
        try {
            const data = await request('/api/user', 'GET', null,
                { Authorization: `Bearer ${auth.token}` }
            );
            setProfile(data);
        } catch (e) { }
    }, [auth.token, request]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return (
            <div className="block">
                <div className="driver-profile">
                    <div className="driver-profile__container isSmall">
                        <div className="driver-profile__image-wrapper">
                            <img className="driver-profile__image" src={driver_avatar} alt="person" />
                        </div>
                    </div>
                    <div className="driver-profile__container isBig">
                    <div className="driver-profile__title title">Your details</div>
                        <div className="driver-profile__description">Here you can check your personal details. Please note that providing up-to-date information is mandatory</div>
                        <div className="driver-profile__info">
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__name">Name:</span>
                                {profile.fistName}
                            </p>
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__lastname">Last Name:</span>
                                {profile.lastName}
                            </p>
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__age">Age:</span>
                                {/* {props.age} years */}
                            </p>
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__sex">Email:</span>
                                {profile.email}
                            </p>
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__languages">Languages:</span>
                                {/* {props.languages} */}
                            </p>
                            <p className="driver-profile__characteristic">
                                <span className="driver-profile__experience">Experience:</span>
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