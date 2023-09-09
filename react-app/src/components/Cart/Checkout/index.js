import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../Cart";
import { useSelector } from "react-redux";

const Checkout = () => {
    const user = useSelector(state => state.session.user);

    if (!user) return <Redirect to="/login" />
    return (
        <div>Checkout
            <div>
                <Cart />
            </div>
        </div>

    )
}

export default Checkout;