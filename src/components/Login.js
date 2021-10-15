import React, { useState } from 'react'
import { Grid, Paper, Avatar, FormControl, InputLabel, Input, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { login } from './actions/auth';
import { useHistory } from 'react-router-dom';

const Login = ({handleCurrentUser}) => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}
    const passwordStyle = {marginTop: 15, textAlign:'center'}
    const loginButtonStyle = {marginTop: 35}

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const history = useHistory();

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        login(state, handleCurrentUser)
        history.push('/home')
    }


    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item container>
                <Paper elevation={10} style={paperStyle}>
                    <form onSubmit={handleSubmit}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid item align='center'>
                        <FormControl  required={true} textAlign='center'>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <Input id='username' name='email' placeholder='Enter Username' value={state.email} onChange={handleChange}/>
                        </FormControl>
                    </Grid>
                    <Grid item align='center'>
                        <FormControl required={true} style={passwordStyle}>
                            <InputLabel htmlFor='password' style={{textAlign:'center'}}>Password</InputLabel>
                            <Input id='password' name='password' placeholder='Enter Password' value={state.password} onChange={handleChange}/>
                        </FormControl>
                    </Grid>
                    <Grid item align='center' style={loginButtonStyle}>
                        <Button variant='outlined' value='Login'>Login</Button>
                    </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>  
    )
}

export default Login
