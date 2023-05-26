import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //not-authenticated - authenticated
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            console.log('login')
            state.status = 'authenticated' //not-authenticated - authenticated
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoUrl = payload.photoUrl
            state.errorMessage = payload.errorMessage
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated' //not-authenticated - authenticated
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoUrl = null
            state.errorMessage = payload.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;