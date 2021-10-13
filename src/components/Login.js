import React from 'react'
import { Grid, Paper, Avatar, FormControl, InputLabel, Input, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}
    const passwordStyle = {marginTop: 15, textAlign:'center'}
    const loginButtonStyle = {marginTop: 35}
    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item container>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid item align='center'>
                        <FormControl  required={true} textAlign='center'>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <Input id='username' name='username' placeholder='Enter Username'/>
                        </FormControl>
                    </Grid>
                    <Grid item align='center'>
                        <FormControl required={true} style={passwordStyle}>
                            <InputLabel htmlFor='password' style={{textAlign:'center'}}>Password</InputLabel>
                            <Input id='password' name='password' placeholder='Enter Password'/>
                        </FormControl>
                    </Grid>
                    <Grid item align='center' style={loginButtonStyle}>
                        <Button variant='outlined' value='Login'>Login</Button>
                    </Grid>

                </Paper>
            </Grid>
        </Grid>  
    )
}

export default Login
