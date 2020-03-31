import React, { useContext, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

export const LoadView = ({ load }) => {
    return (
        <div className="load-view">
            <div className="load-view__description">
                <h2 className="load-view__name">{load.name}</h2>
                <div className="load-view__list">
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Load Name</div>
                            <div className="load-view__element">{load.loadName}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Country From</div>
                            <div className="load-view__element">{load.countryFrom}</div>
                        </div>
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Country To</div>
                            <div className="load-view__element">{load.countryTo}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">City From</div>
                            <div className="load-view__element">{load.cityFrom}</div>
                        </div>
                        <div className="load-view__subitem">
                            <div className="load-view__subname">City To</div>
                            <div className="load-view__element">{load.cityTo}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Date From</div>
                            <div className="load-view__element">{load.dateFrom}</div>
                        </div>
                        <div className="load__subitem">
                            <div className="load-view__subname">Date To</div>
                            <div className="load-view__element">{load.dateTo}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Weight</div>
                            <div className="load-view__element">{load.weight}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Volume</div>
                            <div className="load-view__element">{load.volume}</div>
                        </div>
                    </div>
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Truck Type</div>
                            <div className="load-view__element">{load.truckType}</div>
                        </div>
                    </div>
                </div>
                <div className="button__list">
                    <NavLink to={`/shipper/load/${load.id}`} class="button__link">
                        <button className="load-view__button button-details button">Details</button>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default LoadView;
