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
    dialogText: '',
    isLoading: false,
    pictureUploaded: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLoading = false;
            for (const key in action.payload.userInfos) {
                state[key] = action.payload.userInfos[key];
            }
        },
        setError(state, action) {
            state.isLoading = false;
            state.dialogText = action.payload.error;
        },
        fetchConvsSuccess(state, action) {
            state.isLoading = false;
            for (let i = 0; i < action.payload.convs.length; i++) {
                action.payload.convs[i].participants = action.payload.convs[i].participants.filter(el => el._id !== state._id);
            }
            state.convs = action.payload.convs;
            state.pictureUploaded = false;
        },
        fetchFriendsSuccess(state, action) {
            state.isLoading = false;
            state.friends = action.payload.friends;
        },
        fetchRequestsSuccess(state, action) {
            state.isLoading = false;
            state.friendRequests = action.payload.requests;
        },
        fetchRequestsError(state, action) {
            state.isLoading = false;
            state.friendRequests = [];
        },
        contactSearchSuccess(state, action) {
            state.isLoading = false;
            state.foundContacts = action.payload.contacts;
        },
        contactSearchError(state, action) {
            state.isLoading = false;
            state.foundContacts = [];
        },
        contactAddSuccess(state, action) {
            state.isLoading = false;
            for (let i = 0; i < state.foundContacts.length; i++) {
                if (state.foundContacts[i]._id === action.payload.contact._id) {
                    state.foundContacts[i].sent = true
                } 
            }
        },
        contactCancelAddSuccess(state, action) {
            state.isLoading = false;
            for (let i = 0; i < state.foundContacts.length; i++) {
                if (state.foundContacts[i]._id === action.payload.contact._id) {
                    state.foundContacts[i].sent = false
                } 
                
            }
        },
        contactAcceptSuccess(state, action) {
            state.isLoading = false;
            state.friendRequests = state.friendRequests.filter(el => el._id !== action.payload._id)
        },
        contactRefuseSuccess(state, action) {
            state.isLoading = false;
            state.friendRequests = state.friendRequests.filter(el => el._id !== action.payload._id)
        },
        fetchMessagesSuccess(state, action) {
            state.isLoading = false;
            state.selectedConv = action.payload.conv;
            let friend = state.selectedConv.participants.find(el => el !== state._id);
            state.selectedConv.friendUsername = state.friends.find(el => el._id === friend).username;
            state.selectedConv.participants = state.selectedConv.participants.filter(el => el !== state._id);
        },
        sendMessageSuccess(state, action) {
            state.isLoading = false;
            if (action.payload.conv._id) {
                state.selectedConv = action.payload.conv;
                state.selectedConv.new = true;
            } else {
                state.selectedConv.messages.push({message: action.payload.message, _id: Date.now(), sender: state._id, sentAt: Date.now()});
            }
        },
        sendFileSuccess(state, action) {
            state.isLoading = false;
            if (action.payload.conv._id) {
                state.selectedConv = action.payload.conv;
                state.selectedConv.new = true;
            } else {
                state.selectedConv.messages.push({file: action.payload.file, _id: action.payload.lastMessageId, sender: state._id, sentAt: Date.now()});
            }
        },
        receiveMessage(state, action) {
            if (action.payload.sender !== state._id) {
                state.selectedConv.messages.push({message: action.payload.message, _id: Date.now(), sender: action.payload.sender, sentAt: action.payload.time})
            }
        },
        receiveFile(state, action) {
            if (action.payload.sender !== state._id) {
                state.selectedConv.messages.push({file: action.payload.file, _id: action.payload._id, sender: action.payload.sender, sentAt: action.payload.time})
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
        },
        setIsLoading(state) {
            state.isLoading = true;
        },
        setLoadingDone(state) {
            state.isLoading = false;
        },
        uploadPictureSuccess(state) {
            state.isLoading = false;
            state.pictureUploaded = true;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;