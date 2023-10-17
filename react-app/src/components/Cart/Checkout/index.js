import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import './Checkout.css';
import Footer from "../../Footer/Footer";

const Checkout = () => {
    const user = useSelector(state => state.session.user);

    if (!user) return <Redirect to="/login" />
    return (
        <>
        <div className="ordersContainer">
            <h1>Cart</h1>
            <div className="checkoutItemsContainer">
                <Cart checkout={true} />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Checkout;