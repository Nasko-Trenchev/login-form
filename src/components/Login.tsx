import { Stack, TextField, Typography, Button, FormControl } from '@mui/material';
import { FocusEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {

    const [formInput, setformInput] = useState({
        email: '',
        password: '',
    });
    const [formError, setFormError] = useState({
        email: false,
        password: false
    })

    const navigate = useNavigate();

    const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformInput(oldData => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.name === 'email') {
            const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formInput.email);
            setFormError((oldData) => ({
                ...oldData,
                email: !isEmailvalid
            }))
        }
        if (e.target.name === 'password') {
            const validPassword = formInput.password.length >= 6;
            setFormError((oldData) => ({
                ...oldData,
                password: !validPassword
            }))
        }
    }

    return (
        <Stack spacing={3} className={classes['login-form']}>
            <Typography variant='h1'>Login</Typography>
            <FormControl component={'form'} sx={{ gap: '1em' }}>
                <TextField
                    label='E-mail'
                    helperText={formError.email ? "Accepted format: example@gmail.com" : "Please type in your email"}
                    name='email'
                    variant='outlined'
                    size='small'
                    error={formError.email}
                    required
                    value={formInput.email}
                    autoFocus
                    onChange={onUserInput}
                    onBlur={onInputBlur}
                />
                <TextField
                    label='Password'
                    helperText={formError.password ? "Password should be at least 6 characters long" : "Do not share this with anyone"}
                    name='password'
                    type='password'
                    size='small'
                    error={formError.password}
                    required
                    autoComplete='off'
                    value={formInput.password}
                    onChange={onUserInput}
                    onBlur={onInputBlur}
                />
                <Button
                    variant='contained'
                    size='medium'
                    onClick={() => navigate('/table')}
                    disabled={!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formInput.email)) || formInput.password.length < 6}
                >Login
                </Button>
            </FormControl>
        </Stack>
    )
}

export default Login;