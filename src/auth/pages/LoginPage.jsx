
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout'

import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn, startWithEmailPassword } from '../../store/slices/auth/thunks'
import { useMemo } from 'react'

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const onSubmit = event => {
        event.preventDefault();
        dispatch(checkingAuthentication())
        dispatch(startWithEmailPassword({ email, password }))
    }
    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
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
                    <Grid item xs={12} sx={{ mt: 2 }} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type='submit' variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained'
                                fullWidth
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticating}
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
