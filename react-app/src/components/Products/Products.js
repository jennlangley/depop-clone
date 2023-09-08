import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/product";
import { getCategories } from "../../store/category";
import ProductTile from "./ProductTile";

const Products = () => {
    
    const [isLoaded, setIsLoaded] =  useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts()).then(() => setIsLoaded(true));
    }, [dispatch])

    const products = useSelector(state => Object.values(state.products).filter(product => product.sold === false))

    return (
        isLoaded &&
        <div className="productsList">
        {Object.values(products).map((product, idx) => <ProductTile key={idx} product={product} />)}
        </div>
    )
}

export default Products;