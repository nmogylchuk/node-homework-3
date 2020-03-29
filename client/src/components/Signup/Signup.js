import React, { useState, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Signup = (props) => {

    console.log("userType: " + props.location.userType);

    const history = useHistory();
    const auth = useContext(AuthContext);
    const { loading, request } = useHttp();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: props.location.userType
    });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const signupHandler = async () => {
        try {
            const data = await request('api/auth/signup', 'POST', { ...form });
            history.push("/signin");
        } catch (error) {
            console.log('Carch error on signup: ' + error)
        }
    };

    return (
        <div className='signup form'>
            <h2 className='form__item signup__title title'>Sign Up</h2>
            <div className='form__wrapper'>
                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='firstName'
                                className='input__field'
                                type='text'
                                placeholder='First Name'
                                noValidate
                                value={form.firstName}
                                onChange={changeHandler} />
                        </div>
                    </div>
                </div>

                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='lastName'
                                className='input__field'
                                type='text'
                                placeholder='Last Name'
                                value={form.lastName}
                                onChange={changeHandler} />
                        </div>
                    </div>
                </div>

                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input__field-wrapper'>
                            <input
                                name='email'
                                type='email'
                                className='input__field'
                                placeholder='Email'
                                value={form.email}
                                onChange={changeHandler} />
                        </div>
                    </div>
                </div>

                <div className='form__item'>
                    <div className='input'>
                        <div className='input__label'>
                            <label htmlFor="email">Password</label>
                        </div>
                        <div className='input__field-wrapper'></div>
                        <input
                            name="password"
                            type='password'
                            className='input__field'
                            placeholder='Password'
                            value={form.password}
                            onChange={changeHandler} />
                  <div className='form__item'>
                            <button className='button button__signup' onClick={signupHandler}>Sign Up</button>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Signup;