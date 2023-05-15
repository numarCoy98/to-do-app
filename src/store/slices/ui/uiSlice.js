import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        mobileOpen: false
    },
    reducers: {
        drawerToggle: (state, action) => {
            state.mobileOpen = !state.mobileOpen
        }
    }
});


// Action creators are generated for each case reducer function
export const { drawerToggle } = uiSlice.actions;