import React from 'react'
import CustomerCard from './CustomerCard'

const CustomerList = ({customers, handleAddCustomerToCart}) => {
    const customerList = customers.map((customer) => <CustomerCard key={customer.id} customer={customer} handleAddCustomerToCart={handleAddCustomerToCart}/>)
    return (
        <div>
            {customerList}
        </div>
    )
}

export default CustomerList
