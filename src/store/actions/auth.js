import * as Actiontypes from './Actiontypes'
import axios from '../../axioslogin/axioslogin';

export const authStart = () => {
    return {
        type: Actiontypes.AUTH_START
    };
};
export const authSuccess = (authData) => {
    return {
        type: Actiontypes.AUTH_SUCCES,
        authData: authData
    };
};
export const authFail = (error) => {
    return {
        type: Actiontypes.AUTH_FAIL,
        error: error
    };
};
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        
        let url = 'signupNewUser?key=AIzaSyB72D4A9kR40pfYiKVbrndI7GOj0PLi7kE';
        if (!isSignup) {
            url = 'verifyPassword?key=AIzaSyB72D4A9kR40pfYiKVbrndI7GOj0PLi7kE';
        }
        axios.post(url, authData)
        .then(
            response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            }
        )
        .catch(err => {
            console.log(err);
            dispatch(authFail());
        })
    }
}
