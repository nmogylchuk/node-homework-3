import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import { NavLink } from 'react-router-dom';

const Load = (props) => {
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [load, setLoad] = useState([]);

    const getLoad = useCallback(async () => {
        try {
            let loadId = props.match.params.id;
            const data = await request('/api/loads?id=' + loadId, 'GET', null,
                { Authorization: `Bearer ${auth.token}` }
            );
            setLoad(data);
        } catch (e) { }
    }, [auth.token, request]);

    useEffect(() => {
        getLoad();
    }, [getLoad]);

    return (
        <div className="load">
            <div className="load__description">
                <h2 className="load__name">{load.name}</h2>
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
                    <div className="load__item">
                        <div className="load__subitem">
                            <label className="load__subname" htmlFor='assign'>Assign</label>
                            <input type="radio" id='assign' name="assign" value="assign" />
                        </div>
                    </div>
                    <div className="button__list">
                        <NavLink to="/shipper/load/post" className="button__link">
                            <button className="load__button button-post button">Asign</button>
                        </NavLink>
                        <NavLink to="/shipper/load/update" className="button__link">
                            <button className="load__button button-update button">Update</button>
                        </NavLink>
                        <NavLink to="/shipper/load/delete" className="button__link">
                            <button className="load__button button-delete button">Delete</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Load;