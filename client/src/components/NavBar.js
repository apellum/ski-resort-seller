import React from 'react'
import {AppBar, Box, Toolbar, Avatar, Drawer, List, ListItem } from '@mui/material'

const NavBar = () => {
    // create variable with the first and last letter of the user logged in
    const drawerWidth = 200
    return (
        <Box sx={{flexGrow: 1, display: 'flex'}}>
            <AppBar position='fixed'>
                <Toolbar>
                    <h3>Resort Booker</h3>
                    <Avatar sx={{horizontal: "right"}}>H</Avatar>
                </Toolbar>
            </AppBar>
            {/* <Drawer sx={{width: drawerWidth, flexShrink: 0}}variant='permanent' anchor='left'>
                <Toolbar>

                </Toolbar>
            </Drawer> */}
        </Box>
    )
}

export default NavBar
