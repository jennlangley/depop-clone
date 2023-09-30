import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchProducts } from '../../../store/product';
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
    // TODO: rework so the results dropdown doesn't need to fetch here? 
    // or only return names and id
    // or fetch every few seconds rather than every key press?
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`/api/search?q=${query}`);
            const parsedRes = await res.json();
            if (parsedRes) setData(parsedRes.products);
        }
        if (query.length) fetchProducts();
        if (query.length === 0) setData([]);
    }, [query])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.length >= 1)
        dispatch(searchProducts(query));
        setData([]);
        setQuery("");
        history.push(`/search?q=${query}`);
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
                {data.map(product => <NavLink to={`/products/${product.id}`} onClick={e => setHidden(true)} key={product.id}><div className='searchItem'>{product.name}</div></NavLink>)}
            </div>}
        </div>
    )
}

export default SearchBar;