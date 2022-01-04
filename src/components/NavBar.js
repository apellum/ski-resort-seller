import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AppBar, Toolbar, Box, IconButton, MenuItem, Avatar, Typography, Drawer, List, ListItem, ListItemText, Menu, Divider, Modal } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/sessions'
import Weather from './Weather'
import NewCustomer from './customer/NewCustomer'

const NavBar = ({customerClicked, setCustomerClicked}) => {
    const drawerWidth = 240

    const [anchorEl, setAnchorEl] = useState(null);
    const [modalToggle, setModalToggle] = useState(false);
    const [newCustomerToggle, setNewCustomerToggle] = useState(false);
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

    // const handleNewCustomer = () => {
    //     history.push('/new-customer')
    // }

    const handleWeather = () => {
        setModalToggle(true)
    }

    const handleWeatherClose = () => {
        console.log(modalToggle)
        setModalToggle(false)
    }

    const handleNewCustomer = () => {
        setNewCustomerToggle(true)
    }

    const handleNewCustomerClose = () => {
        setNewCustomerToggle(false)
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
                Resort Booker
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
                        <MenuItem sx={{color: '#1976d2'}} onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem sx={{color: '#1976d2'}} onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                paddingTop: 8,
                width: drawerWidth,
                // flexShrink: 0,
                }}
                variant="permanent"
                anchor="left"
                flexGrow="1"
            >
                <Toolbar sx={{width: 170, color: "#1976d2"}}>
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
                    <ListItem button 
                        onClick={handleWeather}
                    >
                    
                    <ListItemText primary={'Weather'} />
                    </ListItem>
                </List>
                </Toolbar>
            </Drawer>
        </Box>
        <Modal open={modalToggle}
        onClose={handleWeatherClose}
        >
            <Box>
                <Weather close={handleWeatherClose}/>
            </Box>
        </Modal>
        <Modal open={newCustomerToggle}
        onClose={handleNewCustomerClose}>
            <Box>
                <NewCustomer closeCustomer={handleNewCustomerClose}/>
            </Box>
        </Modal>
    </div>
            
    )
}

export default NavBar
