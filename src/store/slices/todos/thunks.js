import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../../firebase/config';
import { addTask, loading } from './todosSlice';

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