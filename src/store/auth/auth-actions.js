import {authActions} from './auth-slice';
import {userActions} from '../user/user-slice';
import axios from '../../axios';
import { socket } from '../../App';


export const signUp = (signUpInfos) => {
    return async (dispatch) => {
        try {

            dispatch(userActions.setIsLoading());
            
            let {username, email, password, firstName, lastName} = signUpInfos;

            if (username) {
                username = username.trim();
            }

            if (!password.trim()) {
                password = password.trim();
            }

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
                socket.emit('socketid:save', res.data.user._id);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.user._id);
                localStorage.setItem('username', res.data.user.username);
            }

        } catch (e) {
            dispatch(userActions.setError({error: e.response.data}));
        }
    }
}

export const login = (loginInfos) => {
    return async (dispatch) => {
        try {
            dispatch(userActions.setIsLoading());

            let {identifier, password} = loginInfos;
            
            let res = await axios.post('/users/login', {identifier, password});

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.user._id);
                localStorage.setItem('username', res.data.user.username);
                dispatch(authActions.loggedIn({token: res.data.token}));
                dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                socket.emit('socketid:save', res.data.user._id);
            }

        } catch (e) {
            dispatch(userActions.setError({error: e.response.data}));
        }
    }
}


export const logout = (token) => {
    return async (dispatch) => {
        try {
            // dispatch(userActions.setIsLoading());
            let res = await axios.post('/users/logout', {}, {headers: {Authorization: localStorage.getItem('token')}});

            if (res.status === 200) {
                dispatch(authActions.loggedOut());
                dispatch(userActions.logoutSuccess());
                socket.emit('socketid:remove', localStorage.getItem('userId'));
                localStorage.setItem('token', '');
                localStorage.setItem('username', '');
                localStorage.setItem('userId', '');
            }

        } catch (e) {
            dispatch(userActions.setError({error: 'Unable to logout, please refresh the page'}));
        }
    }
}

export const checkAuth = (token) => {
    return async (dispatch) => {
        try {
            let res;
            // dispatch(userActions.setIsLoading());

            if (token) {
                res = await axios.get('/users/check', {headers: {Authorization: localStorage.getItem('token')}});
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('userId', res.data.user._id);
                    localStorage.setItem('username', res.data.user.username);
                dispatch(authActions.loggedIn({token: res.data.token}));
                    dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                    socket.emit('socketid:save', res.data.user._id);
            } else {
                    throw new Error();
                }
    
            } 

        } catch (e) {
        
        }
    }
}