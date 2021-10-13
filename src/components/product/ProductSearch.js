import React, { useState } from 'react'

const ProductSearch = ({onSearch}) => {
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
                <input type='text' id='search' placeholder='Search for Product' value={search} onChange={handleChange} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default ProductSearch
