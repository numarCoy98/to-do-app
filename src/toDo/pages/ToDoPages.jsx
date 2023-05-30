import { useEffect, useState } from "react"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { TodoLayout } from "../layout"
import { ToDoTasksView } from '../views'
import { ModalTask } from "../components/ModalTask"

import { useDispatch, useSelector } from "react-redux"
import { setShowModal } from "../../store/slices/ui"
import { startEditTask, startNewTask } from "../../store/slices/todos/thunks"

export const ToDoPages = () => {

    const dispatch = useDispatch();
    const { categories, message } = useSelector((state) => state.todo)
    const { showModal } = useSelector((state) => state.ui)

    const [info, setInfo] = useState(undefined)

    const handleOpenModal = (info) => {
        if (info) {
            setInfo(info)
        }
        dispatch(setShowModal(true));
    };
    const handleCloseModal = () => {
        setInfo(undefined)
        dispatch(setShowModal(false));
    };

    const handleSave = (task) => {
        if (info) {
            // return dispatch(editTask(task))
            return dispatch(startEditTask(task))
        }
        // return (dispatch(addTask(task)), dispatch(startNewTask(task)))
        return dispatch(startNewTask(task))
    }

    useEffect(() => {
        if (message.length > 0) {
            Swal.fire(message, 'success')
        }
    }, [message])


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
            {showModal && <ModalTask
                categories={categories}
                defaultInfo={info}
                handleClose={handleCloseModal}
                open={showModal}
                handleSave={handleSave}
            />}
        </TodoLayout>
    )
}
