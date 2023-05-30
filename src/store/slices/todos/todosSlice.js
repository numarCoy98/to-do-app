import { v1 } from 'uuid'
import merge from 'mergerino';
import { createSlice } from '@reduxjs/toolkit'

import { loadFromLocalStore, saveToLocalStorage } from '../../browser-storage'

const initialState = {
    categories: [
        "trabajo",
        "escuela",
        "personal",
        "familia"
    ],
    filter: { status: 'all' },
    isSaving: false,
    isLoading: false,
    message: ''
}

const switchStatus = { 'pending': 'done', 'done': 'pending' }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        addTask: (state, action) => {
            state.listTask.push({ ...action.payload })
            state.isLoading = false
            state.message = 'Tarea añadida'
        },
        deleteTask: (state, action) => {
            state.listTask = state.listTask.filter(({ id }) => action.payload !== id)
            state.isLoading = false
            state.message = 'Tarea eliminada'
        },
        editTask: (state, action) => {
            const { id } = action.payload
            state.listTask = state.listTask.map(task =>
                id === task.id ? action.payload : task)
            state.isLoading = false
            state.message = 'Tarea editada'
        },
        toggleCheckTask: (state, action) => {
            state.listTask = state.listTask.map(task => {
                if (action.payload === task.id) {
                    return { ...task, status: switchStatus[task.status] }
                }
                return task
            })
        },
        filterData: (state, action) => {
            state.filter = merge(state.filter, action.payload)
        },
        setTasks: (state, action) => {
            state.listTask = action.payload?.filter(task => {
                const entries = Object.entries(state.filter)
                return entries.length > 0 && entries.every(([key, value]) => {
                    if (key === 'search') {
                        if (value.trim().length <= 1) return true
                        return task['title'].includes(value)
                    }
                    if (key === 'status' && value === 'all') return true
                    return task[key] === value
                })
            }) || []
            state.isLoading = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { setTasks, loading, addTask, deleteTask, editTask, toggleCheckTask, filterData } = todoSlice.actions

// export default todoSlice.reducer
