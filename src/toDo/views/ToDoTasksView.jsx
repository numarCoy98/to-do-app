import { Grid } from "@mui/material"
import { CardTask } from "./components"

import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, editTask, } from "../../store/slices/todos"

export const ToDoTasksView = () => {
    console.log({ addTask, deleteTask, editTask, })
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <CardTask />
        </Grid>
    )
}
