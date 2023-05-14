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
        },
        toggleCheckTask: (state) => {
            console.log({ doneOrIncomplete: state })
        },

    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, toggleCheckTask } = todoSlice.actions

// export default todoSlice.reducer