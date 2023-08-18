
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../store/product";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getProductDetails(+productId)).then(() => setIsLoaded(true));
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