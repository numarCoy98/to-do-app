import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { loadData } from '../../../helpers';
import { FirebaseDB } from '../../../firebase/config';
import { addTask, loading, setTasks } from './todosSlice';

export const startNewTask = (task) => {
    return async (dispatch, getState) => {
        dispatch(loading())
        const { uid } = getState().auth;
        //uid
        //dispatch para guardar la tarea nueva
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