
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, getProducts } from "../../../store/product";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true));
    }, [dispatch])

    const product = useSelector(state => state.products[+productId]);
    return(
        isLoaded && 
            <div>
                <div>

                </div>
                <div>
                   {product.name} 
                </div>
                
            </div>
    )
}

export default ProductDetail;