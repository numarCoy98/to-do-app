import { Route, Routes, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { AuthRoutes } from "../auth/routes"
import { TodoRoutes } from "../toDo/routes/TodoRoutes"
import { CheckingAuth } from "../ui"
import { useEffect } from "react"
import { FirebaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/slices/auth/authSlice"

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const { uid, displayName, photoURL } = user
            dispatch(login({ uid, displayName, photoURL }))
        })
    }, [])


    const { status } = useSelector(state => state.auth)
    if (status === 'checking') return <CheckingAuth />
    return (
        <Routes>
            {status === 'authenticated'
                // To-do App
                ? <Route path="/*" element={<TodoRoutes />} />
                // login y registro
                : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to='/auth/login' />} />

        </Routes>

    )
}
