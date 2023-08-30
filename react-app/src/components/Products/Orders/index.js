import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/order";
import { Redirect } from "react-router-dom";
import Order from "./Order";

const Orders = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect (() => {
        dispatch(getOrders(user?.id)).then(() => setIsLoaded(true))
    }, [dispatch])

    const user = useSelector(state => state.session.user)
    const orders = useSelector(state => state.orders)
    if (!user) return <Redirect to='/products' />

    return (
        isLoaded &&
        <div>
            {(Object.values(orders).map((order, idx) => <Order key={idx} order={order} />))}
        </div>
    )

}

export default Orders;