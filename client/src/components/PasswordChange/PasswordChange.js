import React, { useContext, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';


const PasswordChange = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [form, setForm] = useState({
        oldPassword: '',
        newPassword1: '',
        newPassword2: '',
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const updatePasswordHandler = async () => {
        try {
            const data = await request('/api/user', 'PATCH', { ...form },
                { Authorization: `Bearer ${auth.token}` }
            );
            auth.logout();
            history.push("/");
        } catch (error) {
            console.log('Catch error on updating password: ' + error)
        }
    };


    return (
        <div className='driver-password form'>
            <h2 className='form__item driver-password__title title'>Change Password</h2>
            <div className='form__wrapper'>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='oldPassword'>Old Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='oldPassword'
                                className='input__field'
                                type='password'
                                placeholder='Password'
                                value={form.oldPassword}
                                onChange={changeHandler} />
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='newPassword1'>New Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='newPassword1'
                                className='input__field'
                                type='password'
                                placeholder='New Password'
                                value={form.newPassword1}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor='newPassword2'>Repeat New Password</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='newPassword2'
                                className='input__field'
                                type='password'
                                placeholder='Repeat New Password'
                                value={form.newPassword2}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className='submit__item'>
                    <button className='driver-password__button button' onClick={updatePasswordHandler}>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordChange;