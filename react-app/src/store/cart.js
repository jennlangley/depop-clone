const ADD = "cart/ADD";
const REMOVE = "cart/REMOVE"
const LOAD = "cart/LOAD"

export const addToCart = (product) => ({
    type: ADD,
    payload: product
})

export const loadCart = () => ({
    type: LOAD,
})

export const removeFromCart = (productId) => ({
    type: REMOVE,
    payload: productId
})

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cart");
    if (localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    totalItem: "",
    totalAmount: "",
    shippingCost: 5.00,
}

export default function reducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case ADD:
            newState.cart[action.payload.id] = action.payload
            return newState;
        case REMOVE:
            delete newState.cart[action.payload];
            return newState;
        case LOAD:
            return newState;
        default:
            return state;
    }
}