import React from 'react'
import { Grid, Paper, Box, Card, CardContent } from '@mui/material'


const SaleHistoryCard = ({sale, key}) => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    console.log(sale)
    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Transaction History</h2>
                </Grid>
                <Grid item container>
                    <Box>
                        <Grid item align='center'>
                            <Card>
                            <CardContent>Customer: {sale.customer.first_name} {sale.customer.last_name}</CardContent>
                            <CardContent>Total: {sale.total}</CardContent>
                            <CardContent>Total: {sale.total}</CardContent>
                            </Card>
                        </Grid>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
        </div>
    )
}

export default SaleHistoryCard