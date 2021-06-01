import {authActions} from './auth-slice';
import axios from '../axios';

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
                localStorage.setItem('token', res.data.token);
            }

            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }
}


export const logout = (token) => {
    return async (dispatch) => {
        try {

            let res = await axios.post('/users/logout', {}, {headers: {Authorization: token}});

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
            let res = await axios.get('/users/check', {headers: {Authorization: token}});

            if (res.status === 200) {
                dispatch(authActions.loggedIn({token: res.data.token}));
                localStorage.setItem('token', res.data.token);
            }

            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    }
}