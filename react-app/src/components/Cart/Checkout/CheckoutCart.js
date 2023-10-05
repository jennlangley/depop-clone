import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "../../../context/CartContext";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../../store/order";
import CartItem from "../CartItem";

const CheckoutCart = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { cartItems, emptyCart } = useCart();
    const [address, setAddress]  = useState("123 Fashion Rd");
    const [city, setCity] = useState("New York");
    const [state, setState] = useState('New York');
    const [zip, setZip] = useState(10001);
    const [cardNumber, setCartNumber] = useState(123412341234)
    const [expiration, setExpiration] = useState("10/2023");
    const [name, setName] = useState("Jen L");

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        if (!cartItems.length || !user) return history.push('/cart');
    }, [cartItems, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrders(reset);
    }
    const addOrders = async (callback) => {
        cartItems.forEach(item => {
            dispatch(createOrder(item.id))
        })
        callback()
    }
    const reset = () => {
        emptyCart();
        return history.push('/orders');
    }

    let cartTotal = 0.00;
    for (let item of cartItems) {
        cartTotal += +item.price;
    };

    return (
        <div className="newProductContainer">
            <h1>Checkout ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})</h1>
            {cartItems.map((item, idx) => <CartItem key={idx} product={item} />)}
            <form onSubmit={handleSubmit} className="productForm">
                <h2>Shipping Address</h2>
                <label className="formLabel">Address</label>
                <input 
                maxLength={200}
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="inputBox"
                placeholder="Street Address"
                />
                <div className="addressInputs">
                    <div>
                        <label className="formLabel">City</label>
                        <input 
                        maxLength={100}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="inputBox"
                        placeholder="City"
                        />
                    </div>
                    <div>
                        <label className="formLabel">State</label>
                        <input 
                        maxLength={100}
                        value={state}
                        onChange={e => setState(e.target.value)}
                        className="inputBox"
                        placeholder="State"
                        />
                    </div>
                    <div>
                        <label className="formLabel">ZIP Code</label>
                        <input 
                        maxLength={100}
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                        className="inputBox"
                        placeholder="ZIP Code"
                        />
                    </div>
                    
                </div>
                <h2>Payment Information</h2>
                <div className="addressInputs">
                    <div>
                        <label className="formLabel">Card Number</label>
                        <input 
                        maxLength={100}
                        value={cardNumber}
                        onChange={e => setCartNumber(e.target.value)}
                        className="inputBox"
                        placeholder="CardNumber"
                        />
                    </div>
                    <div>
                        <label className="formLabel">Expiration</label>
                        <input 
                        maxLength={100}
                        value={expiration}
                        onChange={e => setExpiration(e.target.value)}
                        className="inputBox"
                        placeholder="CardNumber"
                        />
                    </div>
                    <div>
                        <label className="formLabel">Cardholder Name</label>
                        <input 
                        maxLength={100}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="inputBox"
                        placeholder="Name"
                        />
                    </div>
                </div>
           
                <h2>Cost</h2>
                <span>$ {cartTotal.toFixed(2)} Items</span>
                <span>$ {4.99} Shipping</span>
                <span>$ {(cartTotal * .08).toFixed(2)} Tax</span>
                <span>$ {(cartTotal + 4.99 + (cartTotal * .08)).toFixed(2)} Total</span>
                <div>
                    <button type="submit" className="confirmButtonDesign">Complete Order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutCart;