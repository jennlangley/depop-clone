import { useParams } from "react-router-dom";
import ProductForm from "../NewProduct/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../../store/product";
import { getCategories } from "../../../store/category";

const EditProduct = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const product = useSelector(state => state.products[+productId]);


    return (
        isLoaded && 
        <div>
            <h1 id="modal-title">Edit your product details</h1>
            <ProductForm product={product} />
        </div>
    )
}

export default EditProduct;