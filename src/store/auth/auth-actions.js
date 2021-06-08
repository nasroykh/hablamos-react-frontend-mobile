import {authActions} from './auth-slice';
import {userActions} from '../user/user-slice';
import axios from '../../axios';
import { socket } from '../../App';


export const signUp = (signUpInfos) => {
    return async (dispatch) => {
        try {

            dispatch(userActions.setIsLoading());
            
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
                socket.emit('socketid:save', res.data.user._id);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.user._id);
            }

            console.log(res.data);
        } catch (e) {
            dispatch(userActions.setError({error: 'Unable to signup, please verify your infos.'}));
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
                dispatch(authActions.loggedIn({token: res.data.token}));
                dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                socket.emit('socketid:save', res.data.user._id);
            }

        } catch (e) {
            dispatch(userActions.setError({error: 'Unable to login, please verify your email/password.'}));
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
                socket.emit('socketid:remove', localStorage.getItem('userId'));
                localStorage.setItem('token', '');
            }

            console.log(res.data);
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
                    dispatch(authActions.loggedIn({token: res.data.token}));
                    dispatch(userActions.loginSuccess({userInfos: res.data.user}));
                    socket.emit('socketid:save', res.data.user._id);
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