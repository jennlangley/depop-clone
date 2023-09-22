
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, getProducts } from "../../../store/product";
import UserDetail from "../../Profile/UserDetail/UserDetail";
import './ProductDetail.css';
import ProductTile from "../ProductTile";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../../../context/CartContext";
import NotFound from "../../NotFound";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const [inCart, setInCart] = useState(false);
    const [imageIdx, setImageIdx] = useState(0);
    const [hover, setHover] = useState(0);
    const { productId } = useParams();
    const { addToCart, removeFromCart, cartItems } = useCart();

    useEffect(() => {
        dispatch(getProductDetails(productId)).then(() => setIsLoaded(true));
        // TODO: fix the add to cart item button
        // when an item is already in cart, on fresh load it doesn't register as being in cart
        // because the use effect happens before the product somehow?? so it's always null maybe idk
        if (product) {
            const alreadyInCart = cartItems.find(item => item.id === product.id)
            if (alreadyInCart) {
                setInCart(true);
            } else {
                setInCart(false);
            }
        }
    }, [cartItems])
    
    const product = useSelector(state => state.products[productId])
    const user = useSelector(state => state.session.user);

    // const userProducts = useSelector(state => Object.values(state.products).filter(prod => (prod.userId === product.userId && prod.id !== product.id)))

    

    return(
        <>
        {product &&
            (<div className="productDetail">
                <div className="productDetailContainer">
                    <div className="productImagesContainer">
                        <div className="imageThumbnails">
                            {product.images.map((image, idx) => 
                                <img key={idx} className="thumbnail" src={image.imageUrl} 
                                    onClick={() => setImageIdx(idx)}
                                    onMouseEnter={() => setHover(idx)}
                                    onMouseLeave={() => setHover(imageIdx)}
                                />
                            )} 
                        </div>
                        <div className="productDetailItem">
                            <img className="displayImage" src={product.images[hover].imageUrl} />
                        </div>
                    </div>

                    <div className="productDetailsText">
                        <div className="productName">
                        {product.name}  
                        </div>
                        <UserDetail user={product.user} />
                        <div className="price">
                            <span className="dollar">$</span>{product.price}
                        </div>
                        {product.userId !== user?.id ?
                            (!inCart ?
                            <button
                                className="confirmButtonDesign"
                                onClick={() => {
                                    addToCart(product)
                                    }}
                            >
                                Add to cart
                            </button> 
                            :
                            <button 
                                className="buttonDesign"
                                onClick={() => {
                                    removeFromCart(product.id)
                                    }}
                            >
                                Remove from cart
                            </button>
                            )
                            :
                            <NavLink to={`/products/${product.id}/edit`}>
                                <button className="buttonDesign">
                                Edit product
                                </button>
                            </NavLink>
                            }
                            <div className="productInfo">
                                {product.desc}
                            </div>
                            <div className="productInfo moreInfo">
                                Condition <div>{product.condition}</div>
                            </div>
                            <div className="productInfo moreInfo">
                                Size<div>{product.size}</div>
                            </div>
                            <div className="date">Listed on {product.createdAt}</div>
                    </div>
                </div>
                
                <div>
                {/* <div className="productDetailContainer"><h3>Other items by this seller:</h3></div>
                    <div className="relatedProductsContainer">
                    {Object.values(userProducts).map((product, idx) => <ProductTile key={idx} product={product} />)}
                    </div> */}
                </div>
                
            </div>
         )}
        </>
    )
}

export default ProductDetail;