import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { loadProducts } from '../actions/products'
import { loadCustomers } from '../actions/customers'
import { addSale } from '../actions/sale'
import { Grid, Paper, Button } from '@mui/material'
import MyCart from './product/MyCart'
import ProductList from './product/ProductList'
import CustomerList from './customer/CustomerList'
import ProductSearch from './product/ProductSearch'
import CartTotal from './product/CartTotal'
import NavBar from './NavBar'

const Home = () => {
    const productStyle = {padding: 20, height: '80vh', width: 650, margin: '10px auto', borderRadius: 25, marginLeft: 225, overflowY: 'scroll'}
    const cartStyle = {padding: 20, height: '80vh', width: 350, margin: '10px auto', borderRadius: 25, overflowY: 'scroll'}

    const requesting = useSelector(state => state.requesting);
    const products = useSelector(state => state.products);
    const customers = useSelector(state => state.customers)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const currentUser = useSelector(state => state.sessions.currentUser)
    const history = useHistory();
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    const [cartCustomer, setCartCustomer] = useState({
        first_name: "",
        last_name: ""
    });
    const [search, setSearch] = useState("");
    const [customerClicked, setCustomerClicked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sale, setSale] = useState({
        customer_id: JSON.parse(localStorage.getItem('customer_id')),
        user_id: currentUser.id,
        product_ids: []
    })

    useEffect(() => {
        if(loggedIn) {
            dispatch(loadProducts(localStorage.getItem('jwt')))
            dispatch(loadCustomers(localStorage.getItem('jwt')))
        } else {
            history.push('/login')
        }
    }, [loggedIn, dispatch, history])
    
    useEffect(() => {
        const customer_id = localStorage.getItem('customer_id');
        const customerInCart = customers.find((customer) => customer.id === parseInt(customer_id, 10))
        if (customerInCart) {
            setCartCustomer(customerInCart)
        }
    }, [customers])
    
    useEffect(() => {
        const cart_products = localStorage.getItem('cart_products');
        if (cart_products) {
            setCart(JSON.parse(localStorage.getItem('cart_products')))
        }
    }, [products])

    if (requesting) {
        return <h1>loading...</h1>
    }
    
    const handleAddToCart = (productToAdd) => {
        const existingCart = [...cart, productToAdd]
        const existingCartDuplicates = cart.map((product) => product.id)
        if (existingCartDuplicates.includes(productToAdd.id)) {
            console.log(existingCartDuplicates)
        } else {
                setCart(existingCart)
                setSale({...sale, product_ids: [...sale.product_ids, productToAdd.id]})
                localStorage.setItem("cart_products", JSON.stringify(existingCart))
                
                }
    }
            
    const handleRemoveFromCart = (productToRemove) => {
        const cartFilter = cart.filter((product) => product.id !== productToRemove.id)
        setCart(cartFilter);
        localStorage.setItem("cart_products", JSON.stringify(cartFilter));
    }
            
    const handleAddCustomerToCart = (customerToAdd) => {
        const customerInCart = customers.find((customer) => customer.id === customerToAdd.id)
        setCartCustomer(customerInCart)
        localStorage.setItem('customer_id', customerToAdd.id);
                
    }
            
    const handleSubmit = (e) => {
        e.preventDefault();

        const newSale = {...sale, total: totalPrice}
                
        dispatch(addSale(newSale, currentUser))
        localStorage.removeItem("cart_products")
        setCart([])
        history.push('/')
    }
            
    const displayedProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    const displayedSearchCustomer = customers.filter((customer) => customer.first_name.toLowerCase().includes(search.toLowerCase()));
    const displayCartCustomer = cartCustomer.first_name + " " + cartCustomer.last_name

    return (
        <div>
            <NavBar customerClicked={customerClicked} setCustomerClicked={setCustomerClicked}/>
            <Grid container direction='row' align='center'>
                {customerClicked ? <Paper elevation={10} style={productStyle}>
                        <h2>Customers</h2>
                        <ProductSearch onSearch={setSearch} customerClicked={customerClicked}/>
                        <CustomerList customers={displayedSearchCustomer} handleAddCustomerToCart={handleAddCustomerToCart}/>
                </Paper> : <Paper elevation={10} style={productStyle}>
                        <h2>Products</h2>
                        <ProductSearch onSearch={setSearch}/>
                        <ProductList products={displayedProducts} handleAddToCart={handleAddToCart}/>
                </Paper>}
                <Paper elevation={10} style={cartStyle}>
                        <h2>Cart</h2>
                        {cartCustomer ? <h3>{displayCartCustomer}</h3>: null}
                        <form onSubmit={handleSubmit}>
                        <MyCart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
                        <Grid>
                            <CartTotal cart={cart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                            <Button type='submit' >Make Sale</Button>
                        </Grid>
                        </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home
