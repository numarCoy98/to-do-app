import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slices/todos'

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
})