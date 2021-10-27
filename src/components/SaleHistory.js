import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSales } from '../actions/sale'
import SaleHistoryCard from './SaleHistoryCard'

const SaleHistory = () => {
    const sales = useSelector(state => state.sales)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSales(localStorage.getItem('jwt')))
    }, [dispatch])
    const salesList = sales.map((sale) => <SaleHistoryCard key={sale.id} sale={sale} />)

    return (
        <div>
            {salesList}
        </div>
    )
}

export default SaleHistory

