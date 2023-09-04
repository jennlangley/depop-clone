import React, { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/Cart/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false);

    function addToCart(id) {
        setCartItems(currItems => {
            return [...currItems, { id }]  
        }) 
    } 
    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider 
            value={{ addToCart, removeFromCart, cartItems, openCart, closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </CartContext.Provider>
    );
}

