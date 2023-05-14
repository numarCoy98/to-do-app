import { Grid } from "@mui/material"
import { CardTask } from "./components"

export const ToDoTasksView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
            <CardTask />
        </Grid>
    )
}
