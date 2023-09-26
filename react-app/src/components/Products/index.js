import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { getProducts } from "../../store/product";
import { getCategories } from "../../store/category";
import Products from "./Products";

const ProductsIndex = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const location = useLocation();

    useEffect(() => {
        dispatch(getCategories());
        if (location.pathname.includes('/search')) {
            const query = location.search.split("=")[1]
            dispatch(getProducts(query)).then(() => setIsLoaded(true));
        } else {
            dispatch(getProducts()).then(() => setIsLoaded(true));
        }
    }, [dispatch, location.pathname])
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