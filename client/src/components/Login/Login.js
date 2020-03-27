import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage'

class Login extends Component {
  constructor(props) {
    super(props);

    console.log("userType: " + props.location.userType);

    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: ''
    }

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && Object.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    const {
      signInEmail,
      signInPassword
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        };
      })
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && Object.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }

    if (!token) {
      return (
        <div className='block'>

          <div className='login form'>
            {
              (signInError) ? (
                <p className='error'>{signInError}</p>
              ) : (null)
            }

            <h2 className='form__item login__title title'>Sign In</h2>
            <div className='form__wrapper'>
              <div className='form__item'>
                <div className='input'>
                  <div class='input__label'>
                    <label htmlFor='login'>Email</label>
                  </div>
                  <div class='input__field-wrapper'>
                    <input
                      name='login'
                      class='input__field'
                      type='email'
                      placeholder='Email'
                      value={signInEmail}
                      onChange={this.onTextboxChangeSignInEmail}
                    />
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
                      value={signInPassword}
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                  </div>
                  <div className='form__item'>
                    <button className='button button__login' onClick={this.onSignIn}>Sign In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <p>Account</p>
        <div className='form__item'>
          <button className='button button__logout' onClick={this.logout}>Logout</button>
        </div>
      </div>
    )
  }
}
export default Login;

