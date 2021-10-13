import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products, handleAddToCart}) => {

    const productList = products.map((product) => <ProductCard key={product.id} product={product} handleProductClick={handleAddToCart}/>)
    return (
        <div>
            {productList}
        </div>
    )
}

export default ProductList
