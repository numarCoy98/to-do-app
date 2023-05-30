import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth'
import { todoSlice } from './slices/todos'
import { uiSlice } from './slices/ui/uiSlice'

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer
    }
})