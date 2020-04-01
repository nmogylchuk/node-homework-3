import React from "react";

const ShipperPassword = () => {
    return (
        <div className='driver-password form'>
            <h2 className='form__item driver-password__title title'>Change Password</h2>
            <div className='form__wrapper'>

                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='password'>Old Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='password'
                                className='input__field'
                                type='password'
                                placeholder='Password'
                            //value={form.password}
                            //onChange={changeHandler} 
                            />
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='password'>New Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='password'
                                className='input__field'
                                type='password'
                                placeholder='New Password'
                            //value={form.password}
                            //onChange={changeHandler} 
                            />
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='password'>Repeat New Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='password'
                                className='input__field'
                                type='password'
                                placeholder='Repeat New Password'
                            //value={form.password}
                            //onChange={changeHandler} 
                            />
                        </div>
                    </div>
                </div>
                <div className='submit__item'>
                    <button className='driver-password__button button'>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default ShipperPassword;