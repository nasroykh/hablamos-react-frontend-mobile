import * as actionTypes from './actionTypes';
import axios from 'axios';

export const logOut = () => {
    let token = localStorage.getItem('token');
    let socketId = localStorage.getItem('socketId');
    axios.post('/LogOut', {}, {headers: {Authorization: token, webSocketID: socketId }})
    .then(res => {
        console.log(res);
        localStorage.clear();
    })
    .catch(err => {
        console.log(err);
    })
    console.log(localStorage.getItem('token'))
    return {
        type: actionTypes.LOG_OUT,
    };
};