import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchResults from './SearchResults';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/products/search?q=${query}`);
            const parsedRes = await res.json()

            if (parsedRes) setData(parsedRes)
        }
        if (query.length) fetchProducts();
        if (!query.length) setData([])
    }, [query])
;
    return (
        <div className="searchBarContainer">
            <form className="searchBarForm">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="searchBarInput"
                    placeholder="Search for items"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <SearchResults data={data} />
        </div>
    )
}

export default SearchBar;