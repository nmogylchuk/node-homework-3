import React from "react";
//import Trucks from "../Trucks/Trucks";
import driver_photo from '../../images/driver_photo.png';

const Driver = () => {
    return (
        <div>
            <div>
                <button className='button'>Profile Info</button>
                <button className='button'>Change Account Password</button>
                <button className='button'>Available Trucks</button>
                <button className='button'>Add trucks</button>
                <button className='button'>Assign truck</button>
            </div>
            <div className="block">
                <div className="driver">
                    <div className="driver__container isSmall">
                        <div className="image-wrapper">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




// <div>
//     <div>
//         <button className='button'>Profile Info</button>
//         <button className='button'>Change Account Password</button>
//         <button className='button'>Available Trucks</button>
//         <button className='button'>Add trucks</button>
//         <button className='button'>Assign truck</button>
//     </div>
//     <Trucks />
// </div>


export default Driver;