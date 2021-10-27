import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper, Avatar, Button, Box, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { login } from '../../actions/sessions';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}

    const loggedIn = useSelector(state => state.sessions.loggedIn);

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(loggedIn){
            history.push('/home')
        }
    }, [loggedIn, history])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(login(state, history))
    }


    return (
     <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item container>
                <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                            <Box component='form' onSubmit={handleSubmit}>
                                <TextField
                                    value={state.email}
                                    onChange={handleChange}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                                <TextField
                                    value={state.password}
                                    onChange={handleChange}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                 />
                                 <Button
                                    type="submit"
                                    variant='text'
                                 >Login</Button>
                            </Box>
                </Paper>
            </Grid>
        </Grid> 
    )
}

export default Login
