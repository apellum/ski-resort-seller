import React from 'react'
import { useHistory } from 'react-router'
import { Grid, Card, Paper, CardContent, Button } from '@mui/material'

const CustomerCard = ({customer, handleAddCustomerToCart}) => {
    const history = useHistory();
    const handleClick = () => {
        handleAddCustomerToCart(customer);
    }

    const handleHistory = () => {
        history.push('/sale-history')
    }
    return (
        <div>
            <Grid>
                <Paper>
                    <Card item>
                        <CardContent>First Name: {customer.first_name}</CardContent>
                        <CardContent>Last Name: {customer.last_name}</CardContent>
                        <CardContent>Date Of Birth: {customer.date_of_birth}</CardContent>
                        <CardContent>Address: {customer.address}</CardContent>
                        <CardContent>Email: {customer.email}</CardContent>
                        <CardContent>Phone Number: {customer.phone_number}</CardContent>
                        <CardContent>Created By: {customer.user_id}</CardContent>
                        {localStorage.getItem('customer_id') ? <Button onClick={handleHistory}>View Sale History</Button> : null}
                        <Button onClick={handleClick}>Set Customer</Button>
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default CustomerCard