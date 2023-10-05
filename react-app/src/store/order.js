const GET_ORDERS = 'orders/GET_ORDERS';
const UPDATE_ORDER = 'orders/UPDATE_ORDER';
const CREATE_ORDER = 'orders/CREATE_ORDER';

const getOrdersAction = (orders) => ({
    type: GET_ORDERS,
    payload: orders
})

const createOrderAction = (order) => ({
    type: CREATE_ORDER,
    payload: order
})


// Actions for adding and removing reviewId from the order
export const updateOrder = (order) => ({
    type: UPDATE_ORDER,
    payload: order
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

export const createOrder = (productId) => async (dispatch) => {
    const res = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productId)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(createOrderAction(data));
        return data;
    } else {
        return res.errors;
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
        case UPDATE_ORDER:
            newState[action.payload.order.id] = action.payload.order;
            return newState;
        case CREATE_ORDER:
            console.log(action.payload);
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return newState;
    }
}