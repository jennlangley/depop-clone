const GET_ORDERS = 'orders/GET_ORDERS';

const getOrdersAction = (orders) => ({
    type: GET_ORDERS,
    payload: orders
})

export const getOrders = (userId) => async (dispatch) => {
    const response = await fetch(`/api/orders/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getOrdersAction(data));
        return data;
    } else {
        return response.errors;
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_ORDERS:
            const orders = {};
            action.payload.orders.forEach(order => orders[order.id] = order);
            return orders;
        default:
            return newState;
    }
}