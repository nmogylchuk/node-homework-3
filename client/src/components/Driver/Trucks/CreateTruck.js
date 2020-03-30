import React from "react";

const DriverCreateTruck = (props) => {
    return (
        <div className='truck-create form'>
            <h2 className='form__item truck-create__title title'>Create Truck</h2>
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
                            // value={}
                            // onChange={changeHandler} 
                            />
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
                            // value={}
                            // onChange={changeHandler} 
                            />
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
                            // value={}
                            // onChange={changeHandler} 
                            />
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
                            // value={}
                            // onChange={changeHandler} 
                            />
                        </div>
                    </div>
                    <div>
                        <select>
                            <option>MG</option>
                            <option>AG</option>
                        </select>
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
                            // value={}
                            // onChange={changeHandler} 
                            />
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
                            // value={}
                            // onChange={changeHandler} 
                            />
                        </div>
                        <div className="submit__item">
                            <button className="truck-create__button button">Create Truck</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default DriverCreateTruck;