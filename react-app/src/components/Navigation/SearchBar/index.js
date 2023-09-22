import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from './SearchResults';
import { getProductsAction } from '../../../store/product';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/products/search?q=${query}`);
            const parsedRes = await res.json()

            if (parsedRes) setData(parsedRes)
        }
        if (query.length) fetchProducts();
        if (query.length === 0) setData([]) 
    }, [query])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.length >= 1)
        dispatch(getProductsAction({'products': data}))
        setData([])
        setQuery("")
        history.push(`/products/search?q=${query}`)
        // TODO: create the route to display the products list but with the products only from the query.
        // so fetchProducts as above, but in the diff component for the /search route, so it doesnt load all products default.
    }

    return (
        <div className="searchBarContainer">
            <form onSubmit={e => handleSubmit(e)} className="searchBarForm">
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