import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    _id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    friends: [],
    friendRequests: [],
    status: '',
    convs: [],
    messages: [],
    foundContacts: [],
    socketId: '',
    sentRequests: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            for (const key in action.payload.userInfos) {
                state[key] = action.payload.userInfos[key];
            }
        },
        fetchConvsSuccess(state, action) {
            for (let i = 0; i < action.payload.convs.length; i++) {
                action.payload.convs[i].participants = action.payload.convs[i].participants.filter(el => el._id !== state._id);
            }
            state.convs = action.payload.convs;
        },
        fetchFriendsSuccess(state, action) {
            state.friends = action.payload.friends;
        },
        contactSearchSuccess(state, action) {
            state.foundContacts = action.payload.contacts;
        },
        contactSearchError(state, action) {
            state.foundContacts = [];
        },
        contactAddSuccess(state, action) {
            state.sentRequests.push(action.payload._id);
        },
        loadMessages(state, action) {
            for (let i = 0; i < state.convs.length; i++) {
                if (state.convs[i]._id === action.payload._id) {
                    state.messages = state.convs[i];
                }
            }
        },
        sendMessageSuccess(state, action) {
            state.messages.messages.push({message: action.payload.message, _id: Date.now(), sender: state._id});
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;