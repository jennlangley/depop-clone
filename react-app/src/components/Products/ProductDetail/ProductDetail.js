
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../store/product";
import UserDetail from "../../Profile/UserDetail/UserDetail";
import './ProductDetail.css';
import ProductTile from "../ProductTile";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../../../context/CartContext";

const ProductDetail = ({ isLoaded }) => {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const { addToCart, removeFromCart, cartItems } = useCart();
    
    const product = useSelector(state => state.products[+productId]);
    const userProducts = useSelector(state => Object.values(state.products).filter(prod => (prod.userId === product.userId && prod.id !== product.id)))
    const user = useSelector(state => state.session.user);
    const [inCart, setInCart] = useState(false);
    const [imageIdx, setImageIdx] = useState(0)
    const [imageUrl, setImageUrl] = useState(product.images[0].imageUrl)
    
    useEffect(() => {
        const alreadyInCart = cartItems.filter(item => item.id === product.id)
        if (alreadyInCart.length) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [cartItems])

    return(
        isLoaded && 
            (<div>
                <div className="productDetailContainer">
                
                <div className="productImagesContainer">
                    <div className="imageThumbnails">
                        {product.images.map((image, idx) => <img key={idx} className="thumbnail" src={image.imageUrl} />)} 
                    </div>

                   
                    <div className="productDetailItem">
                        <img className="productImageItem" src={imageUrl} />
                    </div>
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
                    {product.userId !== user?.id &&
                        (!inCart ?
                            <button
                                className="confirmButtonDesign"
                                onClick={() => {
                                    addToCart(product.id)
                                    setInCart(true)
                                    }}
                            >
                                Add to cart
                            </button> 
                            :
                            <button 
                                className="buttonDesign"
                                onClick={() => {
                                    removeFromCart(product.id)
                                    setInCart(false)
                                    }}
                            >
                                Remove from cart
                            </button>
                        )
                    }
                </div>
            </div>
            
            <div>
            <div className="productDetailContainer"><h3>Other items by this seller:</h3></div>
                <div className="productDetailContainer">
                {Object.values(userProducts).map((product, idx) => <ProductTile key={idx} product={product} />)}
                </div>
            </div>
                
            </div>)
    )
}

export default ProductDetail;