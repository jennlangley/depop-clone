import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/product';
import './Cart.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = ({ checkout }) => {
    const { cartItems, closeCart } = useCart();
    const products = useSelector(state => state.products)
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

    // TODO calculate the total amount for the cart
    let cartTotal = 0.00;
    for (let item of cartItems) {
        cartTotal += +products[item.id].price;
    };


    return (
        <div className='cart'>
            <ul className='cartList'>
                {cartItems.map(item => <CartItem key={item.id} productId={item.id} />)}
            </ul>
            <hr />
            <span className='productPrice'>Total: ${cartTotal.toFixed(2)}</span>
            <form className='checkoutButton' onSubmit={onSubmit}>
                <button className='confirmButtonDesign' type="submit">
                    {checkout ? 
                        <span onClick={(e) => alert("Feature coming soon!")}>Checkout</span>
                        :
                        <NavLink onClick={(e) => closeCart()} to="/checkout">Checkout</NavLink>
                    }
                    
                </button>
            </form>
        </div>
    )
}

export default Cart;