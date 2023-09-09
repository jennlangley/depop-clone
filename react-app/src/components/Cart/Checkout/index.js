import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../Cart";
import { useSelector } from "react-redux";

const Checkout = () => {
    const user = useSelector(state => state.session.user);

    if (!user) return <Redirect to="/login" />
    return (
        <div>
            <h1 style={{"textAlign": "center"}}>Checkout</h1>
            <div>
                <Cart checkout={true} />
            </div>
        </div>

    )
}

export default Checkout;