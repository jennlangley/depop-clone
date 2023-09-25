import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Search.css';
const SearchResults = ({ data }) => {
    return (
        <div className="searchResults">
            {data.map(product => <NavLink to={`/products/${product.id}`} key={product.id}><div>{product.name}</div></NavLink>)}
        </div>
    )
}

export default SearchResults;