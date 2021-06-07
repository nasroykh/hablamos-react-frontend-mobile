import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: '',
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
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