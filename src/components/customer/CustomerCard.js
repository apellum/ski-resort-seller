import React from 'react'
import { Grid, Card, Paper, CardContent, Button } from '@mui/material'

const CustomerCard = ({customer, setCartCustomer}) => {
    const handleClick = (customer) => {
        setCartCustomer(customer);
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
                        <Button onClick={handleClick}>Set Customer</Button>
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default CustomerCard