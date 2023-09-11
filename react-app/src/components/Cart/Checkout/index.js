import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import './Checkout.css';

const Checkout = () => {
    const user = useSelector(state => state.session.user);

    if (!user) return <Redirect to="/login" />
    return (
        <div className="ordersContainer">
            <h1>Checkout</h1>
            <div className="checkoutItemsContainer">
                <Cart checkout={true} />
            </div>
        </div>

    )
}

export default Checkout;