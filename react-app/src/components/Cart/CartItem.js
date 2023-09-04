import { useDispatch, useSelector } from "react-redux"
import { useCart } from "../../context/CartContext";
import './Cart.css'
import { useEffect } from "react";

const CartItem = ({ productId }) => {
    const dispatch = useDispatch();
    const { removeFromCart } = useCart();
    const product = useSelector(state => state.products[productId])
    if (product == null) return null
    return (
        <li className="cartItem">
            <div className="cartItemContainer">
                <div className="productInfo">
                    <img className="cartImage" alt={product.name} src={product.images[0].imageUrl} />
                    <div>{product.name}</div>
                </div>
                <div className="productPrice">
                    $ {product.price}
                </div>
            </div>
            <div className="cartItemMenu">
                <button className="deleteButtonDesign"
                    onClick={() => removeFromCart(productId)}
                >
                    Remove
                </button>
            </div>
        </li>
    )
}

export default CartItem;