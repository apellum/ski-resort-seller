import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Grid, Paper, Avatar, Box, List, Typography, Button} from '@mui/material'

const SalespersonProfile = () => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}
    const listStyle = {marginTop: 3}

    const currentUser = useSelector(state => state.sessions.currentUser)
    const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`
    const fullName = `${currentUser.first_name} ${currentUser.last_name}`
    const history = useHistory();
    console.log(history)

    const handleExit = () => {
        history.replace();
    }
    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item container>
                <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>{initials}</Avatar>
                            <h2>{fullName}</h2>
                        </Grid>
                            <Box>
                                <List align='center'>
                                    <Typography>First Name: {currentUser.first_name}</Typography>
                                    <Typography sx={{marginTop: 2}}>Last Name: {currentUser.last_name}</Typography>
                                    <Typography sx={{marginTop: 2}}>Username: {currentUser.email}</Typography>
                                    <Typography sx={{marginTop: 2}}>Date Of Birth: {currentUser.dateOfBirth}</Typography>
                                    <Typography sx={{marginTop: 2}}>Password: {currentUser.password}</Typography>
                                </List>
                            </Box>
                            <Button href='./home'>Close</Button>
                </Paper>
            </Grid>
            </Grid> 
        </div>
    )
}

export default SalespersonProfile
