import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/product';
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
                    <button onClick={(e) => alert("Feature coming soon!")} className='confirmButtonDesign' type="submit">
                        Checkout
                    </button>
                    :
                    <NavLink onClick={(e) => closeCart()} to="/checkout">
                        <button className='confirmButtonDesign' type="submit">
                            Checkout
                        </button>
                    </NavLink>
                }
            </form>
        </div>
    )
}

export default Cart;