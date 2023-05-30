import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { loadData } from '../../../helpers';
import { FirebaseDB } from '../../../firebase/config';
import { addTask, editTask, loading, setTasks } from './todosSlice';

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