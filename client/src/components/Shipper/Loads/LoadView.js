import React, { useContext, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

export const LoadView = ({ load }) => {
    return (
        <div className="load-view">
            <div className="load-view__block">
                <div className="load-view__list">
                    <div className="load-view__item">
                        <div className="load-view__subitem">
                            <div className="load-view__subname">Load Name</div>
                            <div className="load-view__element">{load.loadName}</div>
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
                    <div className="load-view__subitem">
                    <div className="load-view__subname">More</div>
                        <div className="button__list">
                            <NavLink to={`/shipper/load/${load.id}`} className="button__link">
                                <button className="load-view__button button-details button">Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoadView;
