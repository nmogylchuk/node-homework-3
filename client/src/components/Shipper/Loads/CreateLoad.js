import React, { useState, useContext } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const ShipperCreateLoad = (props) => {

    const history = useHistory();
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [form, setForm] = useState({
        loadName: '',
        countryFrom: '',
        countryTo: '',
        cityFrom: '',
        cityTo: '',
        dateFrom: '',
        dateTo: '',
        weight: '',
        volume: '',
        truckType: ''
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const createLoadHandler = async () => {
        try {
            const data = await request('/api/loads', 'POST', { ...form }, {
                Authorization: `Bearer ${auth.token}`
            });
            history.push("/shipper/loads");
        }
        catch (error) {
            console.log('Catch error on creating Load: ' + error)
        };
    };

    return (
        <div className='load-create form'>
            <h2 className='form__item load-create__title title'>Create Load</h2>
            <div className='form__wrapper'>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__loadName">Load Name</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='loadName'
                                className='input__field'
                                type='text'
                                placeholder='Load Name'
                                noValidate
                                value={form.loadName}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__countryFrom">Country From</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='countryFrom'
                                className='input__field'
                                type='text'
                                placeholder='Country From'
                                noValidate
                                value={form.countryFrom}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__countryTo">Country To</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='countryTo'
                                className='input__field'
                                type='text'
                                placeholder='Country To'
                                noValidate
                                value={form.countryTo}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__cityFrom">City From</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='cityFrom'
                                className='input__field'
                                type='text'
                                placeholder='City From'
                                noValidate
                                value={form.cityFrom}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__cityTo">City To</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='cityTo'
                                className='input__field'
                                type='text'
                                placeholder='City To'
                                noValidate
                                value={form.cityTo}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__dateFrom">Date From</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='dateFrom'
                                className='input__field'
                                type='text'
                                placeholder='Date From'
                                value={form.dateFrom}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__dateTo">Date To</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='dateTo'
                                className='input__field'
                                type='text'
                                placeholder='Date To'
                                value={form.dateTo}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__weight">Weight</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='weight'
                                className='input__field'
                                type='text'
                                placeholder='Weight From'
                                value={form.weight}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__volume">Volume</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='volume'
                                className='input__field'
                                type='text'
                                placeholder='Volume'
                                value={form.volume}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="load-create__bodyType">Truck Type</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='truckType'
                                className='input__field'
                                type='text'
                                placeholder='Truck Type'
                                value={form.truckType}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="submit__item">
                        <button className="load-create__button button" onClick={createLoadHandler}>Create Load</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ShipperCreateLoad;