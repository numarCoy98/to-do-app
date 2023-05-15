import { v1 } from 'uuid'
import merge from 'mergerino';
import { createSlice } from '@reduxjs/toolkit'

// import listTask from '../../../data/list_task.json'
import categories from '../../../data/categories.json'
import { loadFromLocalStore } from '../../browser-storage'

const initialState = {
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
            state.filter = merge(state.filter, action.payload)
        },
        loadData: (state, action) => {
            state.listTask = loadFromLocalStore("todoList").filter(task => {
                const entries = Object.entries(state.filter)
                return entries.length > 0 && entries.every(([key, value]) => {
                    if (key === 'search') {
                        if (value.trim().length <= 1) return true
                        return task['title'].includes(value)
                    }
                    if (key === 'status' && value === 'all') return true
                    return task[key] === value
                })

            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, toggleCheckTask, filterData, loadData } = todoSlice.actions

// export default todoSlice.reducer
