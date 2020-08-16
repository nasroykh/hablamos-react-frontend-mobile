import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as actions from './index';

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START,
    };
};

export const signUpSuccess= () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
    };
};
export const signUpFail = (error: any) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    }
}

export const signUp = (email: string, fullname: string, password: string, socketId: string) => {
    return (dispatch: any) => {
        dispatch(signUpStart());
        const account = {
            email: email,
            password: password,
        };
        const profile = {
            fullName: fullname,
            firstName : fullname.split(' ')[0],
            lastName : fullname.split(' ')[1]
        }


        let url = '/SignUp';

        axios.post(url, {account, profile})
        .then(res => {
            console.log(res);
            let toSignedUp = true;
            dispatch(actions.signIn(account.email, account.password, socketId, toSignedUp))
            dispatch(signUpSuccess());
        })
        .catch(err => {
            dispatch(signUpFail(err))
        })
    };
};