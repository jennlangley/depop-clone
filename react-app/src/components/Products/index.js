import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product";
import Products from "./Products";

const ProductsIndex = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true));
    }, [dispatch])

    const products = useSelector(state => state.products);

    return( 
        <>
            {!isLoaded &&
                <div className="loadingContainer">
                    <div className="loading"></div>
                </div>
            }
            {isLoaded && (
            Object.values(products).length ?
            <div className="productsListContainer">
                <Products products={products} />
            </div>
            :
            <h1 style={{textAlign: "center"}}>No products found</h1>)
            }
        </>
    )
}

export default ProductsIndex;