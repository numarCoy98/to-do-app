import { Grid } from "@mui/material"
import { CardTask } from "./components"
import { useDispatch, useSelector } from "react-redux"

import { deleteTask, editTask, toggleCheckTask } from "../../store/slices/todos"
// import actions from "../../store/slices/todos"

export const ToDoTasksView = () => {
    const { listTask } = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            {listTask?.map(data => {
                const { id } = data
                return (<CardTask
                    key={id}
                    {...data}
                    deleteItem={() => dispatch(deleteTask(id))}
                    editItem={() => dispatch(editTask({
                        id: 2,
                        title: 'prueba de editar',
                    }))}
                    toggleItem={() => dispatch(toggleCheckTask(id))}
                />)
            }
            )}
        </Grid>
    )
}
