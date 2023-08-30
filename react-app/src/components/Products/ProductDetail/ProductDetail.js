
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../store/product";
import UserDetail from "./UserDetail";
import './ProductDetail.css';
import ProductTile from "../ProductTile";

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const product = useSelector(state => state.products[+productId]);
    const userProducts = useSelector(state => Object.values(state.products).filter(prod => (prod.userId === product.userId && prod.id !== product.id)))

    return(
        isLoaded && 
            (<div>
                <div className="productDetailContainer">
                <div className="productImagesContainer">
                    <ul className="productImagesList">
                    {product.images.map((image, idx) => 
                        <li key={idx} className="productItem">
                            <img alt={product.name} className="productImageItem" src={image.imageUrl} />
                        </li>)}
                    </ul>
                </div>
                <div className="productDetailsText">
                    <div className="productName">
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
            </div>
            
            <div>
            <div className="productDetailContainer" >Other items by this seller:</div>
                <div className="productDetailContainer">
                {Object.values(userProducts).map((product, idx) => <ProductTile key={idx} product={product} />)}
                    </div>
            </div>
                
            </div>)
    )
}

export default ProductDetail;