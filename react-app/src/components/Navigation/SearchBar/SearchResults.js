import './Search.css';
const SearchResults = ({ data }) => {
    return (
        <div className="searchResults">
            {data.map(product => <div key={product.id}>{product.name}</div>)}
        </div>
    )
}

export default SearchResults;