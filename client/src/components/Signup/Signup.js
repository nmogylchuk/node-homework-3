import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage'

class Signup extends Component {
  constructor(props) {
    super(props);

    console.log("userType:" + props.location.userType);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: ''
    }

    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
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

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    const {
      signUpEmail,
      signUpPassword,
      signUpFirstName,
      signUpLastName
    } = this.state;

    this.setState({
      isLoading: true,
    })

    console.log('Send POST singup request: ' + signUpFirstName);

    let body = {
      firstName: signUpFirstName,
      lastName: signUpLastName,
      email: signUpEmail,
      password: signUpPassword
    };

    console.log('Body: ' + JSON.stringify(body));

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: ''
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        };
      });
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
      signUpError,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword
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

          <div className='signup form'>
            {
              (signUpError) ? (
                <p className='error'>{signUpError}</p>
              ) : (null)
            }
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
                      value={signUpFirstName}
                      onChange={this.onTextboxChangeSignUpFirstName}
                    />
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
                      value={signUpLastName}
                      onChange={this.onTextboxChangeSignUpLastName}
                    />
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
                      value={signUpEmail}
                      onChange={this.onTextboxChangeSignUpEmail}
                    />
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
                    value={signUpPassword}
                    onChange={this.onTextboxChangeSignUpPassword}
                  />
                  <div className='form__item'>
                    <button className='button button__signup' onClick={this.onSignUp}>Sign Up</button>
                  </div>
                </div >
              </div >
            </div >
          </div >
        </div >
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
export default Signup;