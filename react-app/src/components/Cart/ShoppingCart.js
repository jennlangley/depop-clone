import { useCart } from "../../context/CartContext";
import Cart from './Cart';
import './Cart.css';

export function ShoppingCart({ isOpen }) {
    const { closeCart } = useCart();
    return (
        isOpen &&
        // onMouseLeave={e => setTimeout(() => closeCart(), 500)}
        (<div  className="cartPreview">
           <Cart /> 
        </div>
        )
    )
}