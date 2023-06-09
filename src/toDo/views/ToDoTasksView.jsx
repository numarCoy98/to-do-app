import { Grid } from "@mui/material"
import { CardTask } from "./components"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCheckTask } from "../../store/slices/todos"
import { startLoadingData, startDeleteTask, startToggleCheckTask } from "../../store/slices/todos/thunks"

export const ToDoTasksView = ({ openModal }) => {
    const { listTask, filter } = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingData())
    }, [filter])

    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            {listTask?.map(data => {
                const { id } = data
                return (<CardTask
                    key={id}
                    {...data}
                    deleteItem={() => dispatch(startDeleteTask(id))}
                    editItem={() => openModal(data)}
                    toggleItem={() => {
                        // dispatch(toggleCheckTask(id))
                        dispatch(startToggleCheckTask(id))
                    }}
                />)
            }
            )}
        </Grid>
    )
}
