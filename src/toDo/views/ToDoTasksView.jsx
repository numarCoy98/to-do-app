import { Grid } from "@mui/material"
import { CardTask } from "./components"

import { useDispatch, useSelector } from "react-redux"
import { deleteTask, toggleCheckTask } from "../../store/slices/todos"

export const ToDoTasksView = ({ openModal }) => {
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
                    editItem={() => openModal(data)}
                    toggleItem={() => dispatch(toggleCheckTask(id))}
                />)
            }
            )}
        </Grid>
    )
}
