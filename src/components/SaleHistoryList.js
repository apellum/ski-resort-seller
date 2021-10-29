import React from 'react'
import SaleHistoryCard from './SaleHistoryCard'

const SaleHistoryList = ({sale}) => {

    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    
    const productNameList = sale.products.map((product) => <li>{product.name}</li>)

    return (
        <div>
            <SaleHistoryCard sale={sale} productNameList={productNameList}/>
        </div>
    )
}

export default SaleHistoryList
