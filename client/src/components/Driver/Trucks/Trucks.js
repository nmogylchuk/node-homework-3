import React from "react";
import { NavLink } from 'react-router-dom';

const Trucks = (props) => {
    return (
        <div className="truck">
            <h2 className="truck__title title">Available Trucks</h2>
            <div className="button__list">
                <NavLink to="/driver/truck/create" class="button__link">
                    <button className="truck__button button-create button">Create Truck</button>
                </NavLink>
            </div>
            <div className="truck__list">
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                        <div className="button__list">
                            <NavLink to="/driver/truck/asign" class="button__link">
                                <button className="truck__button button-asign button">Asign</button>
                            </NavLink>
                            <NavLink to="/driver/truck/update" class="button__link">
                                <button className="truck__button button-update button">Update</button>
                            </NavLink>
                            <NavLink to="/driver/truck/delete" class="button__link">
                                <button className="truck__button button-delete button">Delete</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                        <div className="button__list">
                            <NavLink to="/driver/truck/asign" class="button__link">
                                <button className="truck__button button-asign button">Asign</button>
                            </NavLink>
                            <NavLink to="/driver/truck/update" class="button__link">
                                <button className="truck__button button-update button">Update</button>
                            </NavLink>
                            <NavLink to="/driver/truck/delete" class="button__link">
                                <button className="truck__button button-delete button">Delete</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                        <div className="button__list">
                            <NavLink to="/driver/truck/asign" class="button__link">
                                <button className="truck__button button-asign button">Asign</button>
                            </NavLink>
                            <NavLink to="/driver/truck/update" class="button__link">
                                <button className="truck__button button-update button">Update</button>
                            </NavLink>
                            <NavLink to="/driver/truck/delete" class="button__link">
                                <button className="truck__button button-delete button">Delete</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trucks;