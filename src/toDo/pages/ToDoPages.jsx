import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { TodoLayout } from "../layout"
import { ToDoTasksView } from '../views'

export const ToDoPages = () => {
    console.log('Hola mundo')
    return (
        <TodoLayout>
            <ToDoTasksView />
            <IconButton
                size='large'
                sx={{
                    color: 'blue',
                    ':hover': { opacity: 0.9, backgroundColor: 'secondary.main' },
                    backgroundColor: 'primary.main',
                    position: 'fixed',
                    right: 30,
                    bottom: 30
                }}
            >
                <AddOutlined sx={{ fontSize: '30', color: 'white' }} />
            </IconButton>
        </TodoLayout>
    )
}
