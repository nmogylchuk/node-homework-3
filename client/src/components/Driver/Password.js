import React from "react";

const DriverPassword = () => {
    return (
        <div className="block">
            <div className="driver-password">
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='password'>Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='password'
                                className='input__field'
                                type='password'
                                placeholder='Password'
                            // value={form.password}
                            // onChange={changeHandler} 
                            />
                        </div>
                        <div className='submit__item'>
                            {/* <NavLink to='/driver/profile/password' className="button__link"> */}
                                <button className='password-change__button button'>Change password</button>
                            {/* </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverPassword;