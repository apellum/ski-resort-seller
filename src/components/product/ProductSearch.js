import React, { useState } from 'react'
import { Button, Input } from '@mui/material';

const ProductSearch = ({onSearch, customerClicked}) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearch(search)
        console.log(search, setSearch)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {customerClicked ? <Input type='text' id='search' placeholder='Search for Customer' value={search} onChange={handleChange} /> : <Input type='text' id='search' placeholder='Search for Product' value={search} onChange={handleChange} />}
                <Button type='submit' variant="contained">Search</Button>
            </form>
        </div>
    )
}

export default ProductSearch
