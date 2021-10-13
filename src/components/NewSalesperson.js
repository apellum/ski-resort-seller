import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const NewSalesperson = () => {
    // const [state, setState] = useState({
    //     firstName: "",
    //     lastName: "",
    //     dateOfBirth: "",
    //     email: "",
    //     password: ""
    // })

    // const loadUser = async () => {
    //     const resp = await fetch();
    //     const data = await resp.json();
    //     setUser(data)
    //     console.log(data)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     loadUser();
    // }, [])

    // const handleChange = e => {
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     fetch(, {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             ...state,
    //             newSalesPerson_attributes: [
    //                 {
    //                     firstName: state.firstName,
    //                     lastName: state.lastName,
    //                     dateOfBirth: state.dateOfBirth,
    //                     email: state.email,
    //                     password: state.password
    //                 }
    //             ]
    //         })
    //         .then(resp => resp.json())
    //         .then(date => setState(data))
    //     })
    // }

    return (
        <div>
            <h1>Create new user</h1>
            <form>
                <label>First Name: </label>
                <input type='text'/>
                <label>Last Name: </label>
                <input type='text'/>
                <label>Date of Birth: </label>
                <input type='text'/>
                <label>email address: </label>
                <input type='text'/>
                <label>password: </label>
                <input type='text'/>
                <input type='submit' placeholder='Create new salesperson'/>
            </form>
        </div>
    )
}

export default NewSalesperson
