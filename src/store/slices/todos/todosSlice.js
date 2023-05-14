import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listTask: [],
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTask: (state) => {
            console.log({ add: state })
        },
        deleteTask: (state) => {
            console.log({ delete: state })
        },
        editTask: (state) => {
            console.log({ edit: state })
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = todoSlice.actions

// export default todoSlice.reducer