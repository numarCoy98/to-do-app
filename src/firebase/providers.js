import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({ credentials });
        const { displayName, email, photoURL, uid } = result.user;
        return { ok: true, displayName, email, photoURL, uid }
    } catch (error) {
        const errorMessage = error.message
        // const errorCode = error.code
        console.log({ error })
        return { ok: false, errorMessage }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName })
        return { ok: true, uid, photoURL }

    } catch (error) {
        const errorMessage = error.message
        return { ok: false, errorMessage }
    }
}

// export const loginWithEmailPassword = async ({ email, password }) => {
//     try {
//         const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
//         const { uid, photoURL } = resp.user;
//         await updateProfile(FirebaseAuth.currentUser, { displayName })
//         console.log("🚀 ~ file: providers.js:24 ~ registerUserWithEmailPassword ~ resp:", resp)

//         return { ok: true, uid, photoURL }

//     } catch (error) {
//         const errorMessage = error.message
//         return { ok: false, errorMessage }
//     }
// }