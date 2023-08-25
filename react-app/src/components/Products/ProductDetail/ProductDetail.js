
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../store/product";
import UserDetail from "./UserDetail";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const product = useSelector(state => state.products[+productId]);
    

    return(
        isLoaded && 
            (<div className="productDetailContainer">
                <div className="productImagesContainer">
                    <ul className="productImagesList">
                    {product.images.map((image, idx) => 
                        <li key={idx} className="productItem">
                            <img alt={product.name} className="productImageItem" src={image.imageUrl} />
                        </li>)}
                    </ul>
                </div>
                <div className="productDetailsText">
                    <div>
                       {product.name}  
                    </div>
                    <div>
                        ${product.price}
                    </div>
                    <div>
                        {product.desc}
                    </div>
                    <UserDetail user={product.user} />
                </div>
                
            </div>)
    )
}

export default ProductDetail;