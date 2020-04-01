import React, { useState, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Signin = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const signinHandler = async () => {
    try {
      const data = await request('/api/auth/signin', 'POST', { ...form });
      console.log("signinHandler data: " + JSON.stringify(data));
      auth.login(data.token, data.userId, data.userType);
      history.push("/");
    }
    catch (error) {
      console.log('Carch error on signin: ' + error)
    };
  };

  return (
    <div className='signin form'>
      <h2 className='form__item signin__title title'>Sign In</h2>
      <div className='form__wrapper'>
        <div className='form__item'>
          <div className='input'>
            <div className='input__label'>
              <label htmlFor='email'>Email</label>
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
              <label htmlFor='password'>Password</label>
            </div>
            <div className='input__field-wrapper'>
              <input
                name='password'
                className='input__field'
                type='password'
                placeholder='Password'
                value={form.password}
                onChange={changeHandler} />
            </div>
          </div>
        </div>
        <div className='submit__item'>
          <button className='signin__button button' onClick={signinHandler}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Signin;