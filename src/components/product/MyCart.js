import React from 'react'
import ProductCard from './ProductCard'

const MyCart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            {cart.map((product) => <ProductCard key={product.id} cart={cart} product={product} handleProductClick={handleRemoveFromCart}/>)}
        </div>
    )
}

export default MyCart
