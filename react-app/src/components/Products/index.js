import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getProducts, getProductsAction } from "../../store/product";
import { getCategories } from "../../store/category";
import Products from "./Products";

const ProductsIndex = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const location = useLocation();

    let query = location.search;
    query = query?.split('=')[1];
  
    useEffect(() => {
        dispatch(getCategories());
        const fetchProducts = async () => {
            const res = await fetch(`/api/products/search?q=${query}`);
            const parsedRes = await res.json();
            if (parsedRes) setData(parsedRes);
        }
        if (query) {
            fetchProducts()
                .then(() => dispatch(getProductsAction({'products': data})))
                .then(() => setIsLoaded(true));
        } else {
            dispatch(getProducts());
            setIsLoaded(true);
        }
    }, [dispatch, query])

    const products = useSelector(state => state.products);
    return( 
        <>
            {!isLoaded &&
                <div className="loadingContainer">
                    <div className="loading"></div>
                </div>
            }
            {isLoaded &&
            <div className="productsListContainer">
                <Products products={products} />
            </div>}
        </>
    )
}

export default ProductsIndex;