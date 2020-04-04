import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Load = (props) => {
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [load, setLoad] = useState([]);
    const history = useHistory();
    const postStatusValue = 'POSTED';
    const assignStatusValue = 'ASSIGN';

    const getLoad = useCallback(async () => {
        try {
            let loadId = props.match.params.id;
            const data = await request('/api/loads?id=' + loadId + '&status=' + postStatusValue, 'GET', null,
                { Authorization: `Bearer ${auth.token}` }
            );
            setLoad(data);
        } catch (e) { }
    }, [auth.token, request]);

    useEffect(() => {
        getLoad();
    }, [getLoad]);

    const assignLoadHandler = async () => {
        try {
            const data = await request('/api/loads?id=' + load._id, 'PATCH', { "status": assignStatusValue }, {
                Authorization: `Bearer ${auth.token}`
            });
            history.push("/driver/trucks");
        }
        catch (error) {
            console.log('Catch error on updating Load status: ' + error)
        };

    };

    // const deleteLoadHandler = async () => {
    //     try {
    //         const data = await request('/api/loads?id=' + load._id, 'DELETE', null, {
    //             Authorization: `Bearer ${auth.token}`
    //         });
    //         history.push("/shipper/loads");
    //     }
    //     catch (error) {
    //         console.log('Catch error on creating Load: ' + error)
    //     };
    // };

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
                    <div className="button__list">
                        {/* <NavLink to={`/shipper/load/update/${load._id}`} className="button__link" style={{ display: load.status === newStatusValue ? 'block' : 'none' }}>
                            <button className="load__button button-update button">Update</button>
                        </NavLink>
                        <NavLink to="/shipper/load/delete" className="button__link" style={{ display: load.status === newStatusValue ? 'block' : 'none' }}>
                            <button className="load__button button-delete button" onClick={deleteLoadHandler}>Delete</button>
                        </NavLink> */}
                        <NavLink to="/driver/load/post" className="button__link">
                            <button className="load__button button-post button" onClick={assignLoadHandler}>Assign Load</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Load;