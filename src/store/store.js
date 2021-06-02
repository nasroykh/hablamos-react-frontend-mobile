import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import userSlice from './user/user-slice';


const store = configureStore({
    reducer: {auth: authSlice.reducer, user: userSlice.reducer}
});


export default store;