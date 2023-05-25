import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        mobileOpen: false,
        showModal: false
    },
    reducers: {
        drawerToggle: (state, action) => {
            state.mobileOpen = !state.mobileOpen
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { drawerToggle, setShowModal } = uiSlice.actions;