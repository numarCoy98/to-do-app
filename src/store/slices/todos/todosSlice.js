import { createSlice } from '@reduxjs/toolkit'
import listTask from '../../../data/list_task.json'

const initialState = {
    listTask
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.listTask = state.listTask.filter(({ id }) => action.payload !== id)
        },
        editTask: (state, action) => {
            const { id, updateTask } = action.payload
            state.listTask = state.listTask.map((task, currentIndex) => id === currentIndex ? updateTask : task)
        },
        toggleCheckTask: (state, action) => {
            state.listTask = state.listTask.map((task, index) => {
                if (index !== action.payload) {
                    return { ...task, status: !task.status }
                }
                return task
            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, toggleCheckTask } = todoSlice.actions

// export default todoSlice.reducer
