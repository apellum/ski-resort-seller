import React from 'react'
import { useHistory } from 'react-router'
import { Grid, Box, Card, CardContent } from '@mui/material'


const SaleHistoryCard = ({sale, productNameList}) => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    
    const history = useHistory();
    const returnHome = () => {
        history.push('/home')
    }

    return (
        <div>
            <Grid item container alignItems="center" justify="center" flexDirection='column'>
                    <Box alignContent='center' justifyContent='center'>
                        <Grid item align='center' alignItems="center" justify="center">
                            <Card item sx={{ minWidth: 300, alignItems: 'center' }}>
                            <CardContent>Products: {productNameList}</CardContent>
                            <CardContent>Total: {sale.total}</CardContent>
                            </Card>
                        </Grid>
                    </Box>
                </Grid>
        </div>
    )
}

export default SaleHistoryCard