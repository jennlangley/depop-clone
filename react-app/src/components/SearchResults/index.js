import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { searchProducts } from "../../store/product";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
const SearchResults = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const location = useLocation();
    const query = location.search.split("=")[1];
    
    useEffect(() => {
        dispatch(searchProducts(query)).then(() => setIsLoaded(true));
    }, [dispatch, query])

    const products = useSelector(state => state.products);

    return (
        isLoaded &&
        (Object.values(products).length ?
        <>
        <div className="productsListContainer">
                <Products products={products} />
        </div>
        <Footer />
        </> 
        :
        <h1 style={{textAlign: "center"}}>No products found</h1>
        )
    )
}
export default SearchResults;