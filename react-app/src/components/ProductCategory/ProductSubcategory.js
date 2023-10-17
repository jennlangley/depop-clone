import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProductSubcategory } from "../../store/product";
import Footer from "../Footer/Footer";

const ProductSubcategory = () => {
    const { categoryId, subcategoryId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(getProductSubcategory(+categoryId, +subcategoryId)).then(() => setIsLoaded(true));
    }, [dispatch, categoryId, subcategoryId])

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

export default ProductSubcategory;