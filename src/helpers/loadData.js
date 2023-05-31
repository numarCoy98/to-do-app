import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadData = async (uid = '') => {
    if (!uid) throw new Error('El uid del usuario no existe')
    const collectionRef = collection(FirebaseDB, `${uid}/todoApp/tasks`)
    const docs = await getDocs(collectionRef);
    const tasks = []
    docs.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }))
    return tasks
}
