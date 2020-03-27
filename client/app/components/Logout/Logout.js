// import React, { Component } from 'react';
// import './node_modules/whatwg-fetch';
// import {
//   getFromStorage,
// } from '../../utils/storage'

// class Logout extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: true,
//       token: '',
//     }

//     this.logout = this.logout.bind(this);
//   }

//   componentDidMount() {
//     const obj = getFromStorage('the_main_app');
//     if (obj && Object.token) {
//       const { token } = obj;
//       // Verify token
//       fetch('/api/account/verify?token=' + token)
//         .then(res => res.json())
//         .then(json => {
//           if (json.success) {
//             this.setState({
//               token,
//               isLoading: false
//             });
//           } else {
//             this.setState({
//               isLoading: false,
//             });
//           }
//         });
//     } else {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   }

//   logout() {
//     this.setState({
//       isLoading: true,
//     });
//     const obj = getFromStorage('the_main_app');
//     if (obj && Object.token) {
//       const { token } = obj;
//       // Verify token
//       fetch('/api/account/logout?token=' + token)
//         .then(res => res.json())
//         .then(json => {
//           if (json.success) {
//             this.setState({
//               token: '',
//               isLoading: false
//             });
//           } else {
//             this.setState({
//               isLoading: false,
//             });
//           }
//         });
//     } else {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   }

//   render() {
//     const {
//       isLoading,
//     } = this.state;

//     if (isLoading) {
//       return (
//         <div>
//           <p>Loading...</p>
//         </div>
//       )
//     }

//     return (
//       <div>
//         <p>Account</p>
//         <div className='form__item'>
//           <button className='button button__logout' onClick={this.logout}>Logout</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default Logout;