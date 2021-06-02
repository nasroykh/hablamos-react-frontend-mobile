import {authActions} from './auth-slice';
import {userActions} from '../user/user-slice';
import axios from '../../axios';

export const signUp = (signUpInfos) => {
    return async (dispatch) => {
        try {

            let {username, email, password, firstName, lastName} = signUpInfos;
            
            let res = await axios.post('/users/signup', {
                username,
                email, 
                password,
                firstName,
                lastName
            });

            if (res.status === 201) {
                dispatch(authActions.loggedIn({token: res.data.token}));
                dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                localStorage.setItem('token', res.data.token);
            }

            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }
}

export const login = (loginInfos) => {
    return async (dispatch) => {
        try {

            let {identifier, password} = loginInfos;
            
            let res = await axios.post('/users/login', {identifier, password});

            if (res.status === 200) {
                dispatch(authActions.loggedIn({token: res.data.token}));
                dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                localStorage.setItem('token', res.data.token);
            }

        } catch (e) {
            console.log(e);
        }
    }
}


export const logout = (token) => {
    return async (dispatch) => {
        try {

            let res = await axios.post('/users/logout');

            if (res.status === 200) {
                dispatch(authActions.loggedOut());
                localStorage.setItem('token', '');
            }

            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }
}

export const checkAuth = (token) => {
    return async (dispatch) => {
        try {
            let res;

            if (token) {
                res = await axios.get('/users/check');
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    dispatch(authActions.loggedIn({token: res.data.token}));
                    dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                } else {
                    throw new Error();
                }
    
                console.log(res.data);
            } 

        } catch (e) {
            console.log('Error');
        }
    }
}