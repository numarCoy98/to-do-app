import { Route, Routes, Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes"
import { TodoRoutes } from "../toDo/routes/TodoRoutes"
import { CheckingAuth } from "../ui"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {

    const status = useCheckAuth()

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
