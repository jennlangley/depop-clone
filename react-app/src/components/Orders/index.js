import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/order";
import { getUserReviews } from "../../store/review";
import { Redirect } from "react-router-dom";
import Order from "./Order";
import './Orders.css'

const Orders = ({ user }) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const orders = useSelector(state => state.orders)
    const reviews = useSelector(state => state.reviews)
    
    useEffect (() => {
        dispatch(getUserReviews(user?.id))
        dispatch(getOrders(user?.id)).then(() => setIsLoaded(true))
    }, [dispatch])

    if (!user) return <Redirect to='/products' />

    return (
        isLoaded &&
        (<div className="ordersContainer">
            <h1>Your Orders</h1>
            
            {orders ? (Object.values(orders).map((order, idx) => 
                <Order key={idx} order={order} reviews={reviews} />
            )) : <div>You have no orders!</div>
            
            }
        </div>)
    )

}

export default Orders;