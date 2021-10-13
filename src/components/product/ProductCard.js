import React from 'react'
import { Grid, Card, Paper, CardContent,Button } from '@mui/material'

const ProductCard = ({product, handleProductClick, cart}) => {
    const handleClick = () => {
        handleProductClick(product);
    }
    return (
        <div>
            <Grid>
                <Paper>
                    <Card item>
                        <CardContent>Product: {product.name}</CardContent>
                        <CardContent>Category: {product.category}</CardContent>
                        <CardContent>Price: {product.price}</CardContent>
                        {cart ? <Button onClick={handleClick}>Remove from Cart</Button>: <Button onClick={handleClick}>Add to Cart</Button>}
                    </Card>
                </Paper>
            </Grid>
            {/* <li>{product.name}</li> */}
        </div>
    )
}

export default ProductCard
