
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, getProducts } from "../../../store/product";
import { getImages } from "../../../store/image";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        
        dispatch(getImages(+productId))
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const product = useSelector(state => state.products[+productId]);
    const images = useSelector(state => state.images)

    return(
        isLoaded && 
            <div className="productDetailContainer">
                <div className="productImagesContainer">
                    <ul className="productImagesList">
                    {Object.values(images).map((image, idx) => <li className="productItem"><img className="productImageItem" key={idx} src={image.imageUrl}></img></li>)}
                    </ul>
                    
                </div>
                <div className="productDetailsText">
                    <div>
                       {product.name}  
                    </div>
                    <div>
                    ${product.price}
                    </div>
                   
                </div>

                
            </div>
    )
}

export default ProductDetail;