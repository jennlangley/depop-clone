import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/product';
import './Cart.css';

const Cart = () => {
    const { cartItems } = useCart();
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])
    
    const onSubmit = (e) => {
        e.preventDefault();
        // Insert into the orders table, and set the product as sold
    }

    if (!cartItems || !cartItems.length) return (
        <div className='cart'>
            No items in cart
        </div>
    )

    return (
        isLoaded &&
        (<div className='cart'>
            <ul>
                {cartItems.map(item => <CartItem key={item.id} productId={item.id} />)}
            </ul>
            <hr />
            <span>Total: {}</span>
            <form onSubmit={onSubmit}>
                <button className='confirmButtonDesign' type="submit">Checkout</button>
            </form>
        </div>)
    )
}

export default Cart;