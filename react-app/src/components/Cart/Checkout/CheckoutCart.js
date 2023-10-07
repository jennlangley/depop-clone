import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "../../../context/CartContext";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../../store/order";
import CartItem from "../CartItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

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
        postCartItems(cartItems)
        setTimeout(() => {
            history.push("/orders")
            emptyCart()
        }, 500);
        
        

    }
    const postCartItems = async (cartItems) => {
        for (let i = 0; i < cartItems.length; i++) {
            await fetch(`/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItems[i].id)
            })
        }
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
                <h2 className="checkoutHeader">Shipping Address</h2>
                <div className="addressInputs street">
                  <label className="formLabel">Address</label>
                    <input 
                    maxLength={200}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="inputBox"
                    placeholder="Street Address"
                    />  
                </div>
                
                <div className="addressInputs">
                    <div className="inputSection">
                        <label className="formLabel">City</label>
                        <input 
                        maxLength={100}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="inputBox"
                        placeholder="City"
                        />
                    </div>
                    <div className="inputSection">
                        <label className="formLabel">State</label>
                        <input 
                        maxLength={100}
                        value={state}
                        onChange={e => setState(e.target.value)}
                        className="inputBox"
                        placeholder="State"
                        />
                    </div>
                    <div className="inputSection">
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
                <h2 className="checkoutHeader">Payment Information</h2>
                <div className="addressInputs">
                    <div className="inputSection">
                        <label className="formLabel">Card Number</label>
                        <input 
                        maxLength={100}
                        value={cardNumber}
                        onChange={e => setCartNumber(e.target.value)}
                        className="inputBox"
                        placeholder="CardNumber"
                        />
                    </div>
                    <div className="inputSection">
                        <label className="formLabel">Expiration</label>
                        <input 
                        maxLength={100}
                        value={expiration}
                        onChange={e => setExpiration(e.target.value)}
                        className="inputBox"
                        placeholder="CardNumber"
                        />
                    </div>
                    <div className="inputSection">
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
           
                <h2 className="checkoutHeader">Cost</h2>
                <section className="itemizedList">                
                    <div className="totalCalculation">
                        <span className="itemText">Items</span><span className="costText">$ {cartTotal.toFixed(2)}</span>
                        <span className="itemText">Shipping</span><span className="costText">$ {4.99}</span>
                        <span className="itemText">Tax</span><span className="costText">$ {(cartTotal * .08).toFixed(2)}</span>
                        <span className="itemText">Total</span><span className="costText">$ {(cartTotal + 4.99 + (cartTotal * .08)).toFixed(2)}</span>
                    </div>
                </section>

                <div style={{textAlign: "center"}}>
                    <button type="submit" className="confirmButtonDesign">Complete Order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutCart;