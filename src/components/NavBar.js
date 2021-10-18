import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AppBar, Toolbar, Box, IconButton, MenuItem, Avatar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/sessions'
import { InboxIcon } from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => {
    const drawerWidth = 240

    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        dispatch(logout(history))
        history.push('/login')
    }

    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const currentUser = useSelector(state => state.sessions.currentUser)
    const dispatch = useDispatch();
    const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`

    // const menuItems = 
    // create variable with the first and last letter of the user logged in
    return (
        // <Box sx={{flexGrow: 1, display: 'flex'}}>
    <div>
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)` }}
            >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                {initials}
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls='menu-appbar'
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <Avatar sx={{position: "right"}}>{initials}</Avatar>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
            </AppBar>
            {/* <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer> */}
        </Box>
    </div>
            /* <AppBar position='fixed' sx={{width: `calc(100% - ${drawerWidth}px)`, paper: drawerWidth}}>
                <Toolbar>
                    <Typography>
                        Welcome to Resort Booker
                    </Typography>
                    <Avatar sx={{horizontal: "right"}}>H</Avatar>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent' anchor='left' sx={{width: {drawerWidth}}}>
                <div>
                    <Typography>
                        Notes
                    </Typography>
                </div>
                <List>
                    <ListItem>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText></ListItemText>
                    </ListItem>
                </List>
            </Drawer> */
    )
}

export default NavBar
