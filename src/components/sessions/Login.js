import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Avatar, FormControl, InputLabel, Input, Button, Box, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { login } from '../../actions/sessions';
import { useHistory } from 'react-router-dom';

const Login = ({loginUser}) => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}
    const passwordStyle = {marginTop: 15, textAlign:'center'}
    const loginButtonStyle = {marginTop: 35}

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(login(state, history))
        history.push('/home')
    }


    return (
        // <div>
        //     <h1>Hey</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>email</label>
        //             <input type='text' id='email' name='email' value={state.email} onChange={handleChange}>email</input>
        //         </div>
        //         <div>
        //             <input type='text' id='password' name='password' value={state.password} onChange={handleChange}>login</input>
        //         </div>
        //         <input type="submit"/>
        //     </form>
        // </div>
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
                    {/* <form onSubmit={handleSubmit}>
                        <Grid item align='center'>
                            <FormControl  required={true} textalign='center'>
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
                    </form> */}
                </Paper>
            </Grid>
        </Grid> 
    )
}

export default Login
