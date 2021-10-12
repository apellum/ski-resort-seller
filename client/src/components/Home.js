import React from 'react'
import { Grid, Paper, GridRow } from '@mui/material'

const Home = () => {
    const productStyle = {padding: 20, height: '70vh', width: 700, margin: '20px auto', borderRadius: 25}
    const cartStyle = {padding: 10, height: '70vh', width: 450, margin: '10px auto', borderRadius: 25}
    return (
        <div>
            <Grid container direction='row'>
                <Paper elevation={10} style={productStyle}>
                    <Grid xs={6} align='left'>
                        <h2>Product Grid</h2>
                        {/* add search bar */}
                        {/* add product list */}
                    </Grid>
                </Paper>
                <Paper elevation={10} style={cartStyle}>
                    <Grid xs={4}>
                        <h2>Cart</h2>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home
