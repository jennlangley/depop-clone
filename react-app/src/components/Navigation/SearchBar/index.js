import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const products = useSelector(state => state.products);
    let filteredProducts;
    useEffect(() => {
        filteredProducts = Object.values(products).filter(product => product.name.includes(search))
        console.log(search)
    }, [search])

    return (
        <div className="searchBarContainer">
            <form className="searchBarForm">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="searchBarInput"
                    placeholder="Search for items"
                    value={search}
                    onChange={(e) => setSearch(search)}
                >
                {filteredProducts && <ul>
                    {filteredProducts.map(product => product.name)}
                </ul>}
                </input>
            </form>
        </div>
    )
}

export default SearchBar;