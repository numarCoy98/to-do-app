import { useState } from "react"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { TodoLayout } from "../layout"
import { ToDoTasksView } from '../views'
import { ModalTask } from "../components/ModalTask"

import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../../store/slices/todos"

export const ToDoPages = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.todo)

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

    const handleSave = (task) => {
        if (info) {
            return dispatch(editTask(task))
        }
        return dispatch(addTask(task))
    }

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
                categories={categories}
                defaultInfo={info}
                handleClose={handleCloseModal}
                open={shomModal}
                handleSave={handleSave}
            />}
        </TodoLayout>
    )
}
