import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/product";
import ProductTile from "./ProductTile";

const Products = () => {
    
    const [isLoaded, setIsLoaded] =  useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const products = useSelector(state => state.products)

    return (
        <div className="productsList">
        {isLoaded &&
            Object.values(products).map((product, idx) => <ProductTile key={idx} product={product} />)}
        </div>
    )
}

export default Products;