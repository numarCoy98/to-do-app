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
    isLoading: false

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
            // saveToLocalStorage("todoList", state.listTask)
        },
        deleteTask: (state, action) => {
            state.listTask = state.listTask.filter(({ id }) => action.payload !== id)
            saveToLocalStorage("todoList", state.listTask)
        },
        editTask: (state, action) => {
            const { id } = action.payload
            state.listTask = state.listTask.map(task =>
                id === task.id ? action.payload : task)
            saveToLocalStorage("todoList", state.listTask)
        },
        toggleCheckTask: (state, action) => {
            state.listTask = state.listTask.map(task => {
                if (action.payload === task.id) {
                    return { ...task, status: switchStatus[task.status] }
                }
                return task
            })
            saveToLocalStorage("todoList", state.listTask)
        },
        filterData: (state, action) => {
            state.filter = merge(state.filter, action.payload)
        },
        // loadData: (state, action) => {
        //     state.listTask = loadFromLocalStore("todoList")?.filter(task => {
        //         const entries = Object.entries(state.filter)
        //         return entries.length > 0 && entries.every(([key, value]) => {
        //             if (key === 'search') {
        //                 if (value.trim().length <= 1) return true
        //                 return task['title'].includes(value)
        //             }
        //             if (key === 'status' && value === 'all') return true
        //             return task[key] === value
        //         })

        //     }) || []
        // },
        setTasks: (state, action) => {
            console.log({ action })
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
        }
    }
})

// Action creators are generated for each case reducer function
export const { setTasks, loading, addTask, deleteTask, editTask, toggleCheckTask, filterData, loadData } = todoSlice.actions

// export default todoSlice.reducer
