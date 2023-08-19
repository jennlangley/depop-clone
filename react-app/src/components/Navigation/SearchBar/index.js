const SearchBar = () => {
    return (
        <div className="searchBarContainer">
            <form className="searchBarForm">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="searchBarInput"
                    placeholder="Search for items"
                >

                </input>
            </form>
        </div>
    )
}

export default SearchBar;