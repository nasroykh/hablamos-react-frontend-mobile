import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INITIAL_STATE = {
    token : null,
    socketId : null,
    error: null,
    loading: null, 
    redirectUrl: '/home',
    userId: null,
    isAuth: false
};

const signInStart = (state: any, action: any) => {
    return updateObject(state, {error: null, loading: true})        
}

const signInSuccess = (state: any, action: any) => {
    return updateObject(state, {
        loading: false,
        token: action.token,
        userId: action.userId,
        socketId: action.socketId,
        error: null,
        redirectUrl: action.redirectUrl,
        isAuth: true})
}

const signInFail = (state: any, action: any) => {
    return updateObject(state, {error: action.error, loading: false})        
}

const signUpStart = (state: any, action: any) => {
    return updateObject(state, {error: null, loading: true, redirectUrl: '/signedup'})        
}

const signUpSuccess = (state: any, action: any) => {
    return updateObject(state, {
        loading: false,
        error: null,
        })
}

const signUpFail = (state: any, action: any) => {
    return updateObject(state, {error: action.error, loading: false})        
}

const logOut = (state: any, action: any) => {
    localStorage.clear();
    return updateObject(state, {
        token: null,
        userId: null,
        socketId: null,
        isAuth: false
    })
}


const reducer = (state = INITIAL_STATE, action: { type: any; }) => {
    switch (action.type) {
        case actionTypes.SIGNIN_START: return signInStart(state, action);
        case actionTypes.SIGNIN_SUCCESS: return signInSuccess(state, action);
        case actionTypes.SIGNIN_FAIL: return signInFail(state, action);
        case actionTypes.SIGNUP_START: return signUpStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        default:
            return state;
    }
};

export default reducer;
