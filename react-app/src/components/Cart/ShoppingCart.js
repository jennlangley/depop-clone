import { useCart } from "../../context/CartContext";
import Cart from './Cart';
import './Cart.css';

export function ShoppingCart({ isOpen }) {
    const { closeCart } = useCart();
    return (
        isOpen &&
        
        (<div onMouseLeave={e => setTimeout(() => closeCart(), 500)} className="cartPreview">
           <Cart /> 
        </div>
        )
    )
}