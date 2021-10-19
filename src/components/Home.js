import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { loadProducts } from '../actions/products'
import { Grid, Paper } from '@mui/material'
import MyCart from './product/MyCart'
import ProductList from './product/ProductList'
import ProductSearch from './product/ProductSearch'
import CartTotal from './CartTotal'
import NavBar from './NavBar'

const Home = () => {
    const productStyle = {padding: 20, height: '80vh', width: 650, margin: '10px auto', borderRadius: 25, marginLeft: 225, overflowY: 'scroll'}
    const cartStyle = {padding: 20, height: '80vh', width: 350, margin: '10px auto', borderRadius: 25, overflowY: 'scroll'}

    const requesting = useSelector(state => state.requesting);
    const products = useSelector(state => state.products)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const history = useHistory();
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [customerClicked, setCustomerClicked] = useState(false);

    const dispatch = useDispatch();
    // useEffect(() => {
        //     fetch('http://localhost:3001/api/v1/products')
        //     .then(resp => resp.json())
        //     .then(data => { 
            //         setProducts(data)
            //     })
            // }, [])
            
    useEffect(() => {
        if(loggedIn) {
            dispatch(loadProducts(localStorage.getItem('jwt')))
        } else {
            history.push('/login')
        }
    }, [loggedIn])

    if (requesting) {
        return <h1>loading...</h1>
    }
            

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
            <NavBar customerClicked={customerClicked} setCustomerClicked={setCustomerClicked}/>
            <Grid container direction='row' align='center'>
                {customerClicked ? <Paper elevation={10} style={productStyle}>
                        <h2>Customers</h2>
                        <ProductSearch onSearch={setSearch}/>
                        <ProductList products={displayedProducts} handleAddToCart={handleAddToCart}/>
                </Paper> : <Paper elevation={10} style={productStyle}>
                        <h2>Products</h2>
                        <ProductSearch onSearch={setSearch}/>
                        <ProductList products={displayedProducts} handleAddToCart={handleAddToCart}/>
                </Paper>}
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
