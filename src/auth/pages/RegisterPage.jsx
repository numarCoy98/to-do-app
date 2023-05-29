import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout"
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { useState } from "react"

const formData = {
    displayName: '',
    password: '',
    email: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    const { email, password, displayName, formState, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations)
    console.log("🚀 ~ file: RegisterPage.jsx:23 ~ RegisterPage ~ displayNameValid:", displayNameValid)
    const onSubmit = event => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        console.log({ formState })
    }
    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder='Nombre completo'
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button type="submit" variant='contained' fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}