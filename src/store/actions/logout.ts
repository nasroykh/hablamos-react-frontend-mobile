import * as actionTypes from './actionTypes';

export const logOut = () => {
    localStorage.clear();
    return {
        type: actionTypes.LOG_OUT,
    };
};