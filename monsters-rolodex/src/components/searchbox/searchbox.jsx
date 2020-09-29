import React from 'react';
import './searchbox.styles.css';

export const Searchbox = ({placeholder, search, setSearch}) => {
    return <input className="search-box" type="search"
        value={search}
        onChange={setSearch}
        placeholder={placeholder} />
}