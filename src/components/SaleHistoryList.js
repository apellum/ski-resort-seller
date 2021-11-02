import React from 'react'
import SaleHistoryCard from './SaleHistoryCard'

const SaleHistoryList = ({sale}) => {
    
    const productNameList = sale.products.map((product) => <li>{product.name}</li>)

    return (
        <div>
            <SaleHistoryCard sale={sale} productNameList={productNameList}/>
        </div>
    )
}

export default SaleHistoryList
