import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { FormControl, Grid, Paper, InputLabel, Input, Button, Box, TextField } from '@mui/material'
import { getCurrentUser } from '../../actions/sessions'
import { addCustomer } from '../../actions/customers'

const NewCustomer = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const inputStyle = {marginTop: 15, textAlign:'center'}
    const newCustomerButtonStyle = {marginTop: 35}
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.sessions.currentUser);
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        address: "",
        phone_number: "",
        email: "",
        user_id: currentUser.id
    })
    console.log(currentUser)

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCustomer(state, currentUser))
        history.push('/home')
    }

    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create a New Customer</h2>
                </Grid>
                <Grid item container>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid item align='center'>
                        <TextField
                                    value={state.first_name}
                                    onChange={handleChange}
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                />
                        <TextField
                                    value={state.last_name}
                                    onChange={handleChange}
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                />
                        <TextField
                                    value={state.date_of_birth}
                                    onChange={handleChange}
                                    id="date_of_birth"
                                    label="Date Of Birth"
                                    name="date_of_birth"
                                />
                        <TextField
                                    value={state.address}
                                    onChange={handleChange}
                                    id="address"
                                    label="Address"
                                    name="address"
                                />
                        <TextField
                                    value={state.phone_number}
                                    onChange={handleChange}
                                    id="phone_number"
                                    label="Phone Number"
                                    name="phone_number"
                                />
                        <TextField
                                    value={state.email}
                                    onChange={handleChange}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                        <Button
                                    type="submit"
                                    variant='text'
                                 >Login</Button>
                        {/* <FormControl>
                            <InputLabel htmlFor='first_name'>First Name</InputLabel>
                            <Input type='text' id='first_name' name='first_name' value={state.first_name} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='last_name' style={inputStyle}>Last Name</InputLabel>
                            <Input type='text' id='last_name' name='last_name' value={state.last_name} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='date_of_birth' style={inputStyle}></InputLabel>
                            <Input type='date' id='date_of_birth' name='date_of_birth' style={inputStyle} value={state.date_of_birth} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='address' style={inputStyle}>Address</InputLabel>
                            <Input type='text' id='address' name='address' style={inputStyle} value={state.address} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='phone_number' style={inputStyle}>Phone Number</InputLabel>
                            <Input type='tel' id='phone_number' name='phone_number' style={inputStyle} value={state.phone_number} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='email' style={inputStyle}>Email Address</InputLabel>
                            <Input type='email' id='email' name='email' value={state.email} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center' style={newCustomerButtonStyle}>
                        <Button variant='outlined' value='Login'>Create New Customer</Button> */}
                    </Grid>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NewCustomer
