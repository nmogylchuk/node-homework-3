import React, {useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = async () => {
        try {
            auth.logout();
            history.push("/");
        }
        catch (error) {
            console.log('Carch error on logout: ' + error)
        };
    };

    return (
        <button onClick={logoutHandler}>Log out</button>
    );
}

export default Logout;