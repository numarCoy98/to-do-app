import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { AuthRoutes } from "../auth/routes"
import { TodoRoutes } from "../toDo/routes/TodoRoutes"
import { CheckingAuth } from "../ui"

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth)
    if (status === 'checking') return <CheckingAuth />
    return (
        <Routes>
            {/* login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            {/* Todo App */}
            <Route path="/*" element={<TodoRoutes />} />
        </Routes>

    )
}
