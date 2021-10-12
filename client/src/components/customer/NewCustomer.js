import React, { useState } from 'react'
import { FormControl, Grid, Paper, InputLabel, Input, Button } from '@mui/material'

const NewCustomer = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const inputStyle = {marginTop: 15, textAlign:'center'}
    const newCustomerButtonStyle = {marginTop: 35}
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        email: ""
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    console.log(state)
    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create a New Customer</h2>
                </Grid>
                <Grid item container>
                    <form onSubmit={handleSubmit}>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='firstName'>First Name</InputLabel>
                            <Input type='text' id='firstName' name='firstName' value={state.firstName} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='lastName' style={inputStyle}>Last Name</InputLabel>
                            <Input type='text' id='lastName' name='lastName' value={state.lastName} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='dateOfBirth' style={inputStyle}></InputLabel>
                            <Input type='date' id='dateOfBirth' name='dateOfBirth' style={inputStyle} value={state.dateOfBirth} onChange={handleChange}/>
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
                            <InputLabel htmlFor='phoneNumber' style={inputStyle}>Phone Number</InputLabel>
                            <Input type='tel' id='phoneNumber' name='phoneNumber' style={inputStyle} value={state.phoneNumber} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center'>
                        <FormControl>
                            <InputLabel htmlFor='email' style={inputStyle}>Email Address</InputLabel>
                            <Input type='email' id='email' name='email' value={state.email} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <Grid item align='center' style={newCustomerButtonStyle}>
                        <Button variant='outlined' value='Login'>Create New Customer</Button>
                    </Grid>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NewCustomer
