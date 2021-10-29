import React from 'react'
import SaleHistoryCard from './SaleHistoryCard'

const SaleHistoryList = ({sale, customer}) => {
    console.log(sale.products)
    const productNameList = sale.products.map((product) => <li>{product.name}</li>)
    console.log(sale.customer.id)
    console.log(customer)

    return (
        <div>
            <SaleHistoryCard sale={sale} productNameList={productNameList}/>
        </div>
    )
}

export default SaleHistoryList
