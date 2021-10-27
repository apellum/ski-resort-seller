import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { loadProducts } from '../actions/products'
import { loadCustomers } from '../actions/customers'
import { Grid, Paper, Button } from '@mui/material'
import MyCart from './product/MyCart'
import ProductList from './product/ProductList'
import CustomerList from './customer/CustomerList'
import ProductSearch from './product/ProductSearch'
import CartTotal from './CartTotal'
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
    const [cartCustomer, setCartCustomer] = useState({});
    const [search, setSearch] = useState("");
    const [customerClicked, setCustomerClicked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [sale, setSale] = useState({
    //     total: 0,
    //     date: '',
    //     customer_id: cartCustomer[0].id,
    //     user_id: currentUser.id
    // })
    // console.log(sale) 

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
        setCartCustomer(customerInCart)
    }, [customers])

    useEffect(() => {
        const cart_products = localStorage.getItem('cart_products');
        if (cart_products) {
            setCart(JSON.parse(localStorage.getItem('cart_products')))
        }
        // const productsInCart = products.find((product) => product.id === parseInt(cart_products, 10))
        // setCart([...cart, productsInCart])
        // const productsInCart = products.find((product) => product.id === parseInt(cartProducts, 10));
        // console.log(productsInCart)
        // setCart([...cart, productsInCart])
    }, [products])
    
    if (requesting) {
        return <h1>loading...</h1>
    }
    
    // const handleAddToCart = (productToAdd) => {
    //     const productInCart = cart.find((product) => product.id === productToAdd.id);
    //     if (!productInCart) {
    //         setCart([...cart, productToAdd])
    //     }
    // }
    const handleAddToCart = (productToAdd) => {
        const existingCart = [...cart, productToAdd]
        console.log(existingCart)
        setCart(existingCart)
        localStorage.setItem("cart_products", JSON.stringify(existingCart))
    }



    // const handleAddToCart = (productToAdd) => {
    //     const productsInCart = products.find((product) => product.id === productToAdd.id);
    //     console.log(productsInCart)
    //     setCart([...cart, productToAdd])
    //     console.log(cart)
    //     localStorage.setItem('cart', [])
    // }
    
    // const handleAddToCart = (productToAdd) => {
    //     const cartProducts = localStorage.getItem('cart_products');
    //     const productsInCart = products.find((product) => product.id === productToAdd.id);
    //     console.log(productsInCart)
    //     setCart(...cart, productsInCart)
    //     console.log(cart)
    //     localStorage.setItem('product_to_add', JSON.stringify(productToAdd));
    //     cart.push(productToAdd);
    //     console.log(cartProducts)
    //     localStorage.setItem("cart_products", JSON.stringify(cartProducts))
    //     console.log(cartProducts)
    // }

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


    const displayedProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    const displayCartCustomer = cartCustomer.first_name + " " + cartCustomer.last_name
    return (
        <div>
            <NavBar customerClicked={customerClicked} setCustomerClicked={setCustomerClicked}/>
            <Grid container direction='row' align='center'>
                {customerClicked ? <Paper elevation={10} style={productStyle}>
                        <h2>Customers</h2>
                        <ProductSearch onSearch={setSearch} customerClicked={customerClicked}/>
                        <CustomerList customers={customers} handleAddCustomerToCart={handleAddCustomerToCart}/>
                </Paper> : <Paper elevation={10} style={productStyle}>
                        <h2>Products</h2>
                        <ProductSearch onSearch={setSearch}/>
                        <ProductList products={displayedProducts} handleAddToCart={handleAddToCart}/>
                </Paper>}
                <Paper elevation={10} style={cartStyle}>
                        <h2>Cart</h2>
                        {cartCustomer ? <h3>{displayCartCustomer}</h3>: null}
                        <form >
                        <MyCart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
                        <Grid>
                            {/* <Input type='hidden' id='customer_id' name='customer_id' value={cartCustomer.id}/>
                            <Input type='hidden' id='user_id' name='user_id' value={currentUser.id}/>
                            <Input type='hidden' id='date' name='date' value='2021-10-25'/>
                            <Input type='hidden' id='total' name='total' value={totalPrice}/> */}
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
