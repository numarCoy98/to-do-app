import { useState } from "react"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { TodoLayout } from "../layout"
import { ToDoTasksView } from '../views'
import { ModalTask } from "../components/ModalTask"


export const ToDoPages = () => {
    const [shomModal, setShomModal] = useState(false)

    const handleOpen = () => {
        setShomModal(true);
    };
    const handleClose = () => {
        setShomModal(false);
    };

    return (
        <TodoLayout>
            <ToDoTasksView />
            <IconButton
                onClick={handleOpen}
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
            {shomModal && <ModalTask
                handleClose={handleClose}
                open={shomModal}
                handleSave={() => console.log('guardar tarea')}
            />}
        </TodoLayout>
    )
}
