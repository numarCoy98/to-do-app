import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes"
import { TodoRoutes } from "../toDo/routes/TodoRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            {/* login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            {/* Todo App */}
            <Route path="/*" element={<TodoRoutes />} />
        </Routes>

    )
}
