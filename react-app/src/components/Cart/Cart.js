import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = ({ checkout }) => {
    const { cartItems, closeCart } = useCart();
    
    const onSubmit = (e) => {
        e.preventDefault();
        // TODO Insert into the orders table, and set the product as sold
        // Redirect to checkout page eg enter user info and such, also add/remove items
    }

    if (!cartItems || !cartItems.length) return (
        <h3 className='cart' style={{textAlign: "center"}}>
            No items in cart
        </h3>
    )

    let cartTotal = 0.00;
    for (let item of cartItems) {
        cartTotal += +item.price;
    };


    return (
        <div className='cart'>
            <ul className='cartList'>
                {cartItems.map(item => <CartItem key={item.id} product={item} />)}
            </ul>
            <hr />
            <span className='productPrice'>Total: ${cartTotal.toFixed(2)}</span>
            <form className='checkoutButton' onSubmit={onSubmit}>
                {checkout ? 
                    <NavLink to='/checkout'>
                        <button className='confirmButtonDesign' type="submit">
                            Checkout
                        </button>
                    </NavLink>
                    
                    :
                    <NavLink onClick={(e) => closeCart()} to="/cart">
                        <button className='confirmButtonDesign' type="submit">
                            View Cart
                        </button>
                    </NavLink>
                }
            </form>
        </div>
    )
}

export default Cart;