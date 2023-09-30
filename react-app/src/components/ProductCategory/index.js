import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory } from "../../store/product";

const ProductCategory = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(getProductCategory(+categoryId)).then(() => setIsLoaded(true));
    }, [dispatch, categoryId])

    const products = useSelector(state => state.products);
    return (
        isLoaded &&
        (Object.values(products).length ?
        <div className="productsListContainer">
            <Products products={products} />
        </div>
        :
        <h1 style={{textAlign: "center"}}>No products found</h1>
        )
    )
}
export default ProductCategory;