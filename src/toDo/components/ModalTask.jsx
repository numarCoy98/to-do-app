import { Box, Modal, TextField, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    pt: 1,
    px: 3,
    pb: 2,
};

const validateForm = (values) => values.every(value => value.trim().length >= 1)

const statusToBoolean = { done: true, pending: false }

export const ModalTask = ({ handleClose, open, handleSave, defaultInfo = undefined, categories = [] }) => {

    const [alert, setAlert] = useState(false)

    const { title, description, status, category, formState, onInputChange } = useForm(defaultInfo || {
        title: '',
        description: '',
        status: 'pending',
        category: ''
    })

    const saveForm = () => {
        const isFormComplete = validateForm([title, description, category])
        if (isFormComplete) return (handleSave(formState), handleClose())
        return setAlert(true)
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, maxWidth: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='h6'>{`${defaultInfo ? 'Editar' : 'Crear'} tarea`}</Typography>
                    <TextField
                        required
                        fullWidth
                        onInput={onInputChange}
                        variant="outlined"
                        id="outlined-basic"
                        label="Titulo"
                        defaultValue={title}
                        name='title'

                    />
                    <TextField
                        required
                        fullWidth
                        onInput={onInputChange}
                        id="outlined-multiline-static"
                        label="Descripción"
                        multiline
                        rows={4}
                        name='description'
                        defaultValue={description}
                    />
                    <FormControl sx={{ m: 1, maxWidth: '90%', minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Categoria"
                            name='category'
                            onChange={onInputChange}
                        >
                            {categories.map(value =>
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <div style={{ padding: '0.2rem 0.6rem' }}>
                        <FormControlLabel disabled control={<Checkbox />} checked={statusToBoolean[status]} label={status ? 'Hecho' : 'Sin completar'} />
                    </div>
                    <CardActions>
                        <Button onClick={saveForm} size="small">Guardar</Button>
                    </CardActions>
                    {alert && <Alert severity="warning">Por favor completar el formulario</Alert>}
                </Box>

            </Box>
        </Modal>
    )
}
