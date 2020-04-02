import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const DriverUpdateTruck = (props) => {
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [form, setForm] = useState({
        brand: '',
        model: '',
        year: '',
        colour: '',
        gearbox: '',
        engine: '',
        mileage: ''
    });

    const truckId = props.match.params.id;
    const getTruck = useCallback(async () => {
        try {
            const truck = await request('/api/trucks?id=' + truckId, 'GET', null,
                { Authorization: `Bearer ${auth.token}` }
            );
            
            setForm({
                brand: truck.brand,
                model: truck.model,
                year: truck.year,
                colour: truck.colour,
                gearbox: truck.gearbox,
                engine: truck.engine,
                mileage: truck.mileage
            });

        } catch (e) { }
    }, [auth.token, request]);

    useEffect(() => {
        getTruck();
    }, [getTruck]);

    const history = useHistory();

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const updateTruckHandler = async () => {
        try {
            const data = await request('/api/trucks?id=' + truckId, 'PUT', { ...form }, {
                Authorization: `Bearer ${auth.token}`
            });
            history.push("/driver/trucks");
        }
        catch (error) {
            console.log('Carch error on creating Truck: ' + error)
        };
    };

    return (
        <div className='truck-create form'>
            <h2 className='form__item truck-create__title title'>Update Truck</h2>
            <div className='form__wrapper'>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__brand">Brand</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='brand'
                                className='input__field'
                                type='text'
                                placeholder='Brand'
                                noValidate
                                value={form.brand}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__model">Model</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='model'
                                className='input__field'
                                type='text'
                                placeholder='Model'
                                noValidate
                                value={form.model}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__year">Year</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='year'
                                className='input__field'
                                type='text'
                                placeholder='Year'
                                noValidate
                                value={form.year}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__colour">Colour</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='colour'
                                className='input__field'
                                type='text'
                                placeholder='Colour'
                                noValidate
                                value={form.colour}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__gearbox">Gearbox</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='gearbox'
                                className='input__field'
                                type='text'
                                placeholder='Gearbox'
                                noValidate
                                value={form.gearbox}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__engine">Engine</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='engine'
                                className='input__field'
                                type='text'
                                placeholder='Engine'
                                noValidate
                                value={form.engine}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="truck-create__mileage">Mileage</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='mileage'
                                className='input__field'
                                type='text'
                                placeholder='Mileage'
                                pattern='^[ 0-9]+$'
                                value={form.mileage}
                                onChange={changeHandler} />
                        </div>
                        <div className="submit__item">
                            <button className="truck-create__button button" onClick={updateTruckHandler}>Update Truck</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DriverUpdateTruck;