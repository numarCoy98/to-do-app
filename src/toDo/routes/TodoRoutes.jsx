import { Navigate, Route, Routes } from "react-router-dom"
import { ToDoPages } from "../pages/ToDoPages"

export const TodoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ToDoPages />} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}
