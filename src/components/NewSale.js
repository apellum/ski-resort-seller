import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { addSale } from '../actions/sale'

const NewSale = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.sessions.currentUser)
    const currentCustomer = useSelector(state => state.customers.currentCustomer)
    const [state, setState] = useState({
        total: 0,
        date: Date().toLocaleString(),
        customer_id: currentCustomer.id,
        user_id: currentUser.id
    })
    console.log(currentCustomer)

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            
        </div>
    )
}

export default NewSale
