import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AppBar, Toolbar, Box, IconButton, MenuItem, Avatar, Typography, Drawer, List, ListItem, ListItemText, Menu, Divider } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/sessions'

const NavBar = ({customerClicked, setCustomerClicked}) => {
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

    const handleCustomer = (e) => {
        setCustomerClicked(e.currentTarget);
    }
    const handleProducts = () => {
        setCustomerClicked(false);
    }

    const handleNewCustomer = () => {
        history.push('/new-customer')
    }

    const currentUser = useSelector(state => state.sessions.currentUser)
    const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`

    

    return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - 220px)` }}
            >
            <Toolbar>
                <Typography flexGrow='1' variant="h6" noWrap component="div">
                Welcome to resort booker
                </Typography>
                <div position="right">
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls='menu-appbar'
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                        alignItems="right"
                        marginRight="auto"
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
            <Drawer
                sx={{
                paddingTop: 8,
                width: drawerWidth,
                flexShrink: 0,
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{width: 170}}>
                <Divider />
                <List>
                    <ListItem button
                        onClick={handleCustomer}
                     >
                    <ListItemText primary={'Customers'} />
                    </ListItem>
                    <ListItem button
                        onClick={handleProducts}
                     >
                    <ListItemText primary={'Products'} />
                    </ListItem>
                    <ListItem button
                        onClick={handleNewCustomer}
                    >
                    <ListItemText primary={'New Customer'} />
                    </ListItem>
                    <ListItem button >
                    <ListItemText primary={'Weather'} />
                    </ListItem>
                    <ListItem button >
                    <ListItemText primary={'FAQ'} />
                    </ListItem>
                </List>
                </Toolbar>
            </Drawer>
        </Box>
    </div>
            
    )
}

export default NavBar
