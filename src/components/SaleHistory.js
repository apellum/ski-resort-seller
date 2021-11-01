import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSales } from '../actions/sale'
import SaleHistoryList from './SaleHistoryList'
import { Grid, Paper, Button } from '@mui/material'
import { useHistory } from 'react-router'

const SaleHistory = () => {
    const sales = useSelector(state => state.sales)
    const dispatch = useDispatch();

    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25, overflowY: 'scroll'}



    useEffect(() => {
        dispatch(loadSales(localStorage.getItem('jwt')))
    }, [dispatch])
    const salesList = sales.map((sale) => <SaleHistoryList key={sale.id} sale={sale} customer={sale.customer} />)

    const history = useHistory();
    const returnHome = () => {
        history.push('/')
    }


    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                            <h2>Transaction History</h2>
                    </Grid>
                    {salesList}
                    <Button
                                    type="submit"
                                    variant='text'
                                    onClick={returnHome}
                        >Close</Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default SaleHistory

