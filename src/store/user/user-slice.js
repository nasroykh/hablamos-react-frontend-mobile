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
    selectedConv: {},
    foundContacts: [],
    socketId: '',
    sentRequests: [],
    dialogText: ''
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
        loginError(state, action) {
            state.dialogText = action.payload.error;
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
        fetchRequestsSuccess(state, action) {
            state.friendRequests = action.payload.requests;
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
        contactAcceptSuccess(state) {
            console.log('accepted')
        },
        fetchMessagesSuccess(state, action) {
            state.selectedConv = action.payload.conv;
            let friend = state.selectedConv.participants.find(el => el !== state._id);
            state.selectedConv.friendUsername = state.friends.find(el => el._id === friend).username;
        },
        sendMessageSuccess(state, action) {
            if (action.payload.conv._id) {
                state.selectedConv = action.payload.conv;
                state.selectedConv.new = true;
            } else {
                state.selectedConv.messages.push({message: action.payload.message, _id: Date.now(), sender: state._id});
            }
        },
        receiveMessage(state, action) {
            if (action.payload.sender !== state._id) {
                // if (state.selectedConv.messages[state.selectedConv.messages.length-1]._id !== Date.now()) {
                    state.selectedConv.messages.push({message: action.payload.message, _id: Date.now(), sender: action.payload.sender})
                // }
            }
        },
        leaveConv(state) {
            state.selectedConv = {};
        },
        checkIfConvExist(state, action) {
            for (let i = 0; i < state.convs.length; i++) {
                if (state.convs[i].participants.length === 1) {
                    if (state.convs[i].participants[0]._id === action.payload.friendId) {
                        state.selectedConv = state.convs[i];
                    }
                }
            }
        },
        closeDialogBox(state) {
            state.dialogText = '';
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;