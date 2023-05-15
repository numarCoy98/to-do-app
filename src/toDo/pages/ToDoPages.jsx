import { useState } from "react"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { TodoLayout } from "../layout"
import { ToDoTasksView } from '../views'
import { ModalTask } from "../components/ModalTask"


export const ToDoPages = () => {
    const [shomModal, setShomModal] = useState(false)
    const [info, setInfo] = useState(undefined)

    const handleOpenModal = (info) => {
        console.log({ info })
        if (info) {
            setInfo(info)
        }
        setShomModal(true);
    };
    const handleCloseModal = () => {
        setInfo(undefined)
        setShomModal(false);
    };

    return (
        <TodoLayout>
            <ToDoTasksView openModal={handleOpenModal} />
            <IconButton
                onClick={() => handleOpenModal()}
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
                defaultInfo={info}
                handleClose={handleCloseModal}
                open={shomModal}
                handleSave={(task) => console.log({ 'guardar tarea': task })}
            />}
        </TodoLayout>
    )
}
