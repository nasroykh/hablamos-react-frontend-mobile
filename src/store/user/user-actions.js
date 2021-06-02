import {userActions} from './user-slice';
import axios from '../../axios';

export const fetchConvs = () => {
    return async (dispatch) => {
        try {

            let res = await axios.get('/convs');

            if (res.status === 200) {
                dispatch(userActions.fetchConvsSuccess({
                    convs: res.data
                }));
            }

            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }
}

export const fetchFriends = () => {
    return async (dispatch) => {
        try {

            let res = await axios.get('/users/friends');

            if (res.status === 200) {
                dispatch(userActions.fetchFriendsSuccess({
                    friends: res.data
                }));
            }

            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }
}

export const contactSearch = (username) => {
    return async (dispatch) => {
        try {
            if (username) {
                let res = await axios.get('/users', {params: {username}});
    
                if (res.status === 200) {
                    dispatch(userActions.contactSearchSuccess({
                        contacts: res.data
                    }));
                } else {
                    dispatch(userActions.contactSearchError());
                }
    
                console.log(res.data);
            } else {
                dispatch(userActions.contactSearchError());
            }
        } catch (e) {
            dispatch(userActions.contactSearchError());
            console.log(e);
        }
    }
}

export const addContact = (_id) => {
    return async (dispatch) => {
        try {
            let res = await axios.post('/users/add', {_id});

            if (res.status === 200) {
                dispatch(userActions.contactAddSuccess({
                    contacts: res.data
                }));
            }

            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }
}

export const sendMessage = (message, _id) => {
    return async (dispatch) => {
        try {
            let res = await axios.post('/convs/message', {message, _id});

            if (res.status === 201) {
                dispatch(userActions.sendMessageSuccess({
                    message,
                    _id
                }));
            }

            console.log(res.data);

        } catch (e) {
            console.log(e);
        }
    }
}