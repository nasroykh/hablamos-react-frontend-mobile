import * as actionTypes from './actionTypes';
import axios from 'axios';

export const logOut = () => {
    axios.post('/LogOut', {token: localStorage.getItem('token')})
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    console.log(localStorage.getItem('token'))
    return {
        type: actionTypes.LOG_OUT,
    };
};