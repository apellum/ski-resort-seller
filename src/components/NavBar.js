import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AppBar, Toolbar, Box, IconButton, MenuItem, Avatar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/sessions'

const NavBar = () => {
    const drawerWidth = 240

    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleProfile = () => {
        setAnchorEl(null);
        history.push('/me')
    }

    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(logout(history))
        history.push('/login')
    }
    const currentUser = useSelector(state => state.sessions.currentUser)
    const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`

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
                Welcome to resort booker
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
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
