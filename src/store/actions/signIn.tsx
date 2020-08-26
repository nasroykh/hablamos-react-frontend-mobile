import * as actionTypes from './actionTypes';
import axios from 'axios';

export const signInStart = () => {
    return {
        type: actionTypes.SIGNIN_START,
    };
};

export const signInSuccess= (token: string, userId: string, socketId: string, redirectUrl: string ) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        token: token,
        userId: userId,
        socketId: socketId,
        redirectUrl: redirectUrl
    };
};
export const signInFail = (error: any) => {
    return {
        type: actionTypes.SIGNIN_FAIL,
        error: error
    }
}

export const checkAuth = () => {
    return (dispatch: any) => {
        let token = localStorage.getItem('token');
        let socketId = localStorage.getItem('socketId');
        axios.post('/checkAuth', {}, {headers: {Authorization: token, webSocketID: socketId }} )
        .then(res => {
            console.log(res)
            if (res.data.Status === "Success") {
                dispatch(checkAuthSuccess())
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
} 

export const checkAuthSuccess = () => {
    return {
        type: actionTypes.CHECK_AUTH,
        isAuth: true
    }
}

export const signIn = (email: string, password: string, socketId: string, toSignedUp?: boolean) => {
    return (dispatch: any) => {
        dispatch(signInStart());
        const account = {
            email: email,
            password: password,
            mySocketID: socketId
        };


        let url = '/LogIn';

        axios.post(url, {account})
        .then(res => {
            console.log(res);
            localStorage.setItem('token' , res.data.Details.token);
            localStorage.setItem('userId', res.data.Details.account.profile);
            localStorage.setItem('socketId', socketId);
            let redirectUrl = '/home';
            if (toSignedUp) {
                redirectUrl = '/signedup'
            }
            dispatch(signInSuccess(res.data.Details.token, res.data.Details.account.profile, socketId, redirectUrl))
        })
        .catch(err => {
            dispatch(signInFail(err))
        })
    };
};