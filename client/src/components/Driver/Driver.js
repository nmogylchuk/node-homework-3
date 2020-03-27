import React from "react";
import Trucks from "../Trucks/Trucks";

const Driver = (props) => {
    return (
        <div>
            <div>
                <button className='button'>Profile Info</button>
                <button className='button'>Change Account Password</button>
                <button className='button'>Available Trucks</button>
                <button className='button'>Add trucks</button>
                <button className='button'>Assign truck</button>
            </div>
            <Trucks />
        </div>
    );
};

export default Driver;