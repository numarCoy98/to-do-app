import { v1 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'

import listTask from '../../../data/list_task.json'
import categories from '../../../data/categories.json'

const initialState = {
    listTask,
    categories,
    filter: { status: 'all' }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.listTask.push({ ...action.payload, id: v1() })
        },
        deleteTask: (state, action) => {
            state.listTask = state.listTask.filter(({ id }) => action.payload !== id)
        },
        editTask: (state, action) => {
            const { id } = action.payload
            state.listTask = state.listTask.map(task =>
                id === task.id ? action.payload : task)
        },
        toggleCheckTask: (state, action) => {
            state.listTask = state.listTask.map(task => {
                if (action.payload === task.id) {
                    return { ...task, status: !task.status }
                }
                return task
            })
        },
        filterData: (state, action) => {
            state.filter = { ...state.filter, ...action.payload }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, toggleCheckTask, filterData } = todoSlice.actions

// export default todoSlice.reducer
