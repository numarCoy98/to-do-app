import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout'

import { useDispatch } from "react-redux"
import { checkingAuthentication, startGoogleSignIn } from '../../store/slices/auth/thunks'

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { email, password, onInputChange, onResetForm } = useForm({
        email: 'numarcoy@gmail.com',
        password: '1234'
    })

    const onSubmit = event => {
        event.preventDefault();
        dispatch(checkingAuthentication())
        console.log({ email, password })
    }
    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
        console.log('on google ')
    }
    return (
        <AuthLayout title='Ingresar'>
            <Typography variant="h5" sx={{ mt: 1 }}> </Typography>
            <form onSubmit={onSubmit} >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button type='submit' variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
