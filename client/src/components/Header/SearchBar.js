import React, { useState } from 'react'
import styles from './header.module.scss'

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const clearSearch = () => setSearch("")

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        clearSearch();
    }

    return (
        <form onSubmit={onSubmit}>
            <input className={styles.searchInput} type="search" placeholder="Enter street address, city, or zip code" value={search} onChange={onChange} />
        </form>
    )
}

export default SearchBar
