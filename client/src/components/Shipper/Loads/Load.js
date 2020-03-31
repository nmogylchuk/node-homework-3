import React, { useContext, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const Load = ({ load }) => {
    return (
        <div className="load">
            <div className="load__description">
                <h2 className="load__name">{load.name}</h2>
                {/* <h3 className="load__description">{load.description}</h3> */}
                <div className="load__list">
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Load Name</div>
                            <div className="load__element">{load.loadName}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Country From</div>
                            <div className="load__element">{load.countryFrom}</div>
                        </div>
                        <div className="load__subitem">
                            <div className="load__subname">Country To</div>
                            <div className="load__element">{load.countryTo}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">City From</div>
                            <div className="load__element">{load.cityFrom}</div>
                        </div>
                        <div className="load__subitem">
                            <div className="load__subname">City To</div>
                            <div className="load__element">{load.cityTo}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Date From</div>
                            <div className="load__element">{load.dateFrom}</div>
                        </div>
                        <div className="load__subitem">
                            <div className="load__subname">Date To</div>
                            <div className="load__element">{load.dateTo}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Weight</div>
                            <div className="load__element">{load.weight}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Volume</div>
                            <div className="load__element">{load.volume}</div>
                        </div>
                    </div>
                    <div className="load__item">
                        <div className="load__subitem">
                            <div className="load__subname">Truck Type</div>
                            <div className="load__element">{load.truckType}</div>
                        </div>
                    </div>
                </div>
                <div className="button__list">
                    <NavLink to="/shipper/load/post" class="button__link">
                        <button className="load__button button-post button">Asign</button>
                    </NavLink>
                    <NavLink to="/shipper/load/update" class="button__link">
                        <button className="load__button button-update button">Update</button>
                    </NavLink>
                    <NavLink to="/shipper/load/delete" class="button__link">
                        <button className="load__button button-delete button">Delete</button>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Load;