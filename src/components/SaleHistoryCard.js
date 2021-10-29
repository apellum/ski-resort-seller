import React from 'react'
import { useHistory } from 'react-router'
import { Grid, Paper, Box, Card, CardContent, Button } from '@mui/material'
import { textAlign } from '@mui/system'


const SaleHistoryCard = ({sale, productNameList}) => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    
    const history = useHistory();
    const returnHome = () => {
        history.push('/home')
    }
    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Transaction History</h2>
                </Grid>
                <Grid item container alignItems="center" justify="center">
                    <Box alignContent='center' justifyContent='center'>
                        <Grid item align='center' alignItems="center" justify="center">
                            <Card>
                            <CardContent>Customer: {sale.customer.first_name} {sale.customer.last_name}</CardContent>
                            <CardContent>Product Name: {productNameList}</CardContent>
                            <CardContent>Total: {sale.total}</CardContent>
                            </Card>
                        </Grid>
                        <Button
                                    type="submit"
                                    variant='text'
                                    onClick={returnHome}
                                 >Close</Button>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
        </div>
    )
}

export default SaleHistoryCard