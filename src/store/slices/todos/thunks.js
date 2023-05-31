import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { loadData } from '../../../helpers';
import { FirebaseDB } from '../../../firebase/config';
import { addTask, deleteTask, editTask, loading, setTasks, toggleCheckTask } from './todosSlice';

export const startNewTask = (task) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        const { uid } = getState().auth;
        const newTask = { ...task, date: new Date().getTime() }
        const newDoc = doc(collection(FirebaseDB, `${uid}/todoApp/tasks`))
        await setDoc(newDoc, newTask)
        newTask.id = newDoc.id
        dispatch(addTask(newTask));
    }
}

export const startLoadingData = (task) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        const { uid } = getState().auth;
        const tasks = await loadData(uid)
        dispatch(setTasks(tasks))
    }
}

export const startEditTask = (task) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        try {
            const { uid } = getState().auth;
            const taskToFireStore = { ...task }
            delete taskToFireStore.id;
            const docRef = doc(FirebaseDB, `${uid}/todoApp/tasks/${task.id}`)
            await setDoc(docRef, taskToFireStore, { merge: true })
            dispatch(editTask(task))
        } catch (error) {
            console.log({ error })
        }
    }
}


export const startDeleteTask = (id) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        try {
            const { uid } = getState().auth;
            const docRef = doc(FirebaseDB, `${uid}/todoApp/tasks/${id}`)
            await deleteDoc(docRef)
            dispatch(deleteTask(id))
        } catch (error) {
            console.log({ error })
        }
    }
}

const switchStatus = { 'pending': 'done', 'done': 'pending' }

export const startToggleCheckTask = (id) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        try {
            const { auth: { uid }, todo: { listTask } } = getState();
            const taskEdited = listTask.find(({ id: idTask }) => id === idTask)
            const taskToFireStore = { ...taskEdited, status: switchStatus[taskEdited.status] }
            delete taskToFireStore.id;
            const docRef = doc(FirebaseDB, `${uid}/todoApp/tasks/${taskEdited.id}`)
            await setDoc(docRef, taskToFireStore, { merge: true })
            dispatch(toggleCheckTask(id))
        } catch (error) {
            console.log({ error })
        }
    }
}

