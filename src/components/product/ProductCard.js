import React from 'react'
import { Grid, Card, Paper, CardContent,Button } from '@mui/material'

const ProductCard = ({product, handleProductClick, cart}) => {
    const handleClick = () => {
        handleProductClick(product);
    }

    const productCardStyle = {margin: '10px auto'}
    return (
        <div>
            <Grid style={productCardStyle}>
                <Paper>
                    <Card item >
                        <CardContent>Product: {product.name}</CardContent>
                        <CardContent>Category: {product.category}</CardContent>
                        <CardContent>Price: {product.price}</CardContent>
                        {cart ? <Button onClick={handleClick}>Remove from Cart</Button>: <Button onClick={handleClick}>Add to Cart</Button>}
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default ProductCard
