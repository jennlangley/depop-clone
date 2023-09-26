import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProducts, getProductsAction } from '../../../store/product';
import { useHistory } from 'react-router-dom';
import './Search.css';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const searchRef = useRef();
    const [hidden, setHidden] = useState(false)
    let resultsClass = hidden ? "searchResults hidden" : " searchResults";

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/products/search?q=${query}`);
            const parsedRes = await res.json();
            if (parsedRes) setData(parsedRes.products);
        }
        if (query.length) fetchProducts();
        if (query.length === 0) setData([]);
    }, [query])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.length >= 1)
        dispatch(getProducts(query));
        setData([]);
        setQuery("");
        history.push(`/products/search?q=${query}`);
        // TODO: create the route to display the products list but with the products only from the query.
        // so fetchProducts as above, but in the diff component for the /search route, so it doesnt load all products default.
    }
    return (
        <div className="searchBarContainer">
            <form onSubmit={e => handleSubmit(e)} className="searchBarForm">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    ref={searchRef}
                    type="text"
                    className="searchBarInput"
                    placeholder="Search for items"
                    value={query}
                    onKeyDownCapture={e => setHidden(false)}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            {!hidden && 
            <div className={resultsClass}>
                {data.map(product => <NavLink to={`/products/${product.id}`} onClick={e => setHidden(true)} key={product.id}><div>{product.name}</div></NavLink>)}
            </div>}
        </div>
    )
}

export default SearchBar;