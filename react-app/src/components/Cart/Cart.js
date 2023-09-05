import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/product';
import './Cart.css';

const Cart = () => {
    const { cartItems } = useCart();
    const products = useSelector(state => state.products)
    const onSubmit = (e) => {
        e.preventDefault();
        // TODO Insert into the orders table, and set the product as sold
        // Redirect to checkout page eg enter user info and such, also add/remove items
    }

    if (!cartItems || !cartItems.length) return (
        <div className='cart'>
            No items in cart
        </div>
    )

    // TODO calculate the total amount for the cart
    let cartTotal = 0.00;
    for (let item of cartItems) {
        cartTotal += +products[item.id].price;
    };


    return (
        <div className='cart'>
            <ul>
                {cartItems.map(item => <CartItem key={item.id} productId={item.id} />)}
            </ul>
            <hr />
            <span>Total: ${cartTotal.toFixed(2)}</span>
            <form onSubmit={onSubmit}>
                <button className='confirmButtonDesign' type="submit">Checkout</button>
            </form>
        </div>
    )
}

export default Cart;