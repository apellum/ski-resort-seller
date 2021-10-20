import React from 'react'
import CustomerCard from './CustomerCard'

const CustomerList = ({customers}) => {
    const customerList = customers.map((customer) => <CustomerCard key={customer.id} customer={customer}/>)
    return (
        <div>
            {customerList}
        </div>
    )
}

export default CustomerList
