import React from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Switch from "react-switch";

export const Truck = ({ truck }) => {
    const auth = useContext(AuthContext);
    const { request } = useHttp();

    const updateTruckStatusHandler = async () => {
        try {
            truck.assign = !truck.assign;
            const data = await request('/api/trucks?id=' + truck._id, 'PATCH', { "assign": truck.assign }, {
                Authorization: `Bearer ${auth.token}`
            });
        }
        catch (error) {
            console.log('Carch error on creating Truck: ' + error)
        };
    };

    return (
        <div className="truck__item">
            <div className="truck__description">
                <h2 className="truck__maker"><i></i>{truck.brand}</h2>
                <h3 className="truck__model"><i></i>{truck.model}</h3>
                <div className="truck__parameters">
                    <p className="truck__year"><i className="far fa-calendar-times"></i>{truck.year}</p>
                    <p className="truck__colour"><i className="fas fa-paint-brush"></i>{truck.colour}</p>
                    <p className="truck__gearbox"><i className="fas fa-cog"></i>{truck.gearbox}</p>
                    <p className="truck__engine"><i className="fas fa-gas-pump"></i>{truck.engine}</p>
                    <p className="truck__mileage"><i className="fas fa-tachometer-alt"></i>{truck.mileage}</p>
                </div>
                <div className="truck__item">
                    <label className="truck__label">
                        <span>{truck.assign ? 'Reasign' : 'Asign'}</span>
                        <Switch onChange={updateTruckStatusHandler} checked={truck.assign} />
                    </label>
                </div>
                <div className="button__list">
                    <NavLink to="/driver/truck/asign" className="button__link">
                        <button className="truck__button button-asign button">{truck.assign ? 'Reasign' : 'Asign'}</button>
                    </NavLink>
                    <NavLink to={`/driver/truck/update/${truck._id}`} className="button__link" style={{ display: truck.assign ? 'none' : 'block' }}>
                        <button className="truck__button button-update button">Update</button>
                    </NavLink>
                    <NavLink to="/driver/truck/delete" className="button__link" style={{ display: truck.assign ? 'none' : 'block' }}>
                        <button className="truck__button button-delete button">Delete</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};