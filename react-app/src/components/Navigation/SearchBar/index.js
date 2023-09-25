import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import SearchResults from './SearchResults';
import { getProductsAction } from '../../../store/product';
import { useHistory } from 'react-router-dom';


const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const searchRef = useRef();
    // const [hidden, setHidden] = useState(true)
    let resultsClass = "name"

    useEffect((e) => {
        // if (searchRef.current && !searchRef.current.contains(event.target)) {
            
        // }

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
    // TODO: If you click outside the search bar, the dropdown will close. 
    // So it's only open when the user is clicked in there, but doesn't clear the results. useRef
    return (
        <div ref={searchRef} className="searchBarContainer">
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
            <SearchResults className={resultsClass} data={data} />
        </div>
    )
}

export default SearchBar;