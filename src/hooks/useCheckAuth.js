import { useEffect } from "react"
import { FirebaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/slices/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth)
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { uid, displayName, photoURL } = user
            dispatch(login({ uid, displayName, photoURL }))
        })
    }, [])
    return status
}
