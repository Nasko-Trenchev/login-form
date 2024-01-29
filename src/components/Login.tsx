import { Stack, TextField, Typography, Button, FormControl } from '@mui/material';
import classes from './Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formInput, setformInput] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();


    const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformInput(oldData => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }

    const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {

        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formInput.email);
        const validPassword = formInput.password.length >= 6;

        if (!validEmail || !validPassword) {

        }

        navigate('/table');

    }

    return (
        <Stack spacing={3} className={classes['login-form']}>
            <Typography variant='h1'>Login</Typography>
            <FormControl sx={{ gap: '1em' }}>
                <TextField
                    label='E-mail'
                    helperText="Please type in your password"
                    name='email'
                    variant='outlined'
                    size='small'
                    required
                    value={formInput.email}
                    autoFocus
                    onChange={onUserInput}
                />
                <TextField
                    label='Password'
                    helperText="Do not share this with anyone"
                    name='password'
                    type='password'
                    size='small'
                    required
                    value={formInput.password}
                    onChange={onUserInput}
                />
                <Button variant='contained' size='medium' onClick={onLogin}>Login</Button>
            </FormControl>
        </Stack>
    )
}

export default Login;