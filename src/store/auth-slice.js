import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    identifier: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    token: '',
    error: '',
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        inputChangeHandler(state, action) {
            state[action.payload.name] = action.payload.value
        },
        loggedIn(state, action) {
            state.token = action.payload.token;
            state.isAuth = true;
        },
        loggedOut(state) {
            state.token = '';
            state.isAuth = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;