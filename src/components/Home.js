import React, { useState, useEffect } from 'react'
import { Grid, Paper } from '@mui/material'
import MyCart from './product/MyCart'
import ProductList from './product/ProductList'
import ProductSearch from './product/ProductSearch'
import CartTotal from './CartTotal'
import NavBar from './NavBar'

const Home = () => {
    const productStyle = {padding: 20, height: '90vh', width: 500, margin: '20px auto', borderRadius: 25, overflowY: 'scroll'}
    const cartStyle = {padding: 10, height: '70vh', width: 350, margin: '10px auto', borderRadius: 25, overflowY: 'scroll'}

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/products')
        .then(resp => resp.json())
        .then(data => { 
            setProducts(data)
        })
    }, [])

    const handleAddToCart = (productToAdd) => {
        const productInCart = cart.find((product) => product.id === productToAdd.id);
        if (!productInCart) {
            setCart([...cart, productToAdd])
        }
    }

    const handleRemoveFromCart = (productToRemove) => {
        setCart((cart) => cart.filter((product) => product.id !== productToRemove.id));
    }

    const displayedProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <NavBar/>
            <Grid container direction='row' align='center'>
                <Paper elevation={10} style={productStyle}>
                        <h2>Products</h2>
                        <ProductSearch onSearch={setSearch}/>
                        <ProductList products={displayedProducts} handleAddToCart={handleAddToCart}/>
                </Paper>
                <Paper elevation={10} style={cartStyle}>
                        <h2>Cart</h2>
                        <MyCart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
                        <Grid>
                            <CartTotal cart={cart}/>
                        </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home
