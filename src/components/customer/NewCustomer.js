import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Grid, Paper, Button, Box, TextField } from '@mui/material'
import { addCustomer } from '../../actions/customers'

const NewCustomer = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
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

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCustomer(state, currentUser))
        history.push('/')
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
                                 >Create New Customer</Button>
                    </Grid>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NewCustomer
