import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSales } from '../actions/sale'
import SaleHistoryList from './SaleHistoryList'
// import SaleHistoryCard from './SaleHistoryCard'

const SaleHistory = () => {
    const sales = useSelector(state => state.sales)
    const dispatch = useDispatch();

    console.log(sales);

    useEffect(() => {
        // if (localStorage.getItem('customer_id') === sales.customer.id)
        dispatch(loadSales(localStorage.getItem('jwt')))
    }, [dispatch])
    const salesList = sales.map((sale) => <SaleHistoryList key={sale.id} sale={sale} customer={sale.customer} />)
    return (
        <div>
            {salesList}
        </div>
    )
}

export default SaleHistory

