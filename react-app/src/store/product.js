const GET_PRODUCTS = 'products/GET_PRODUCTS';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';
const GET_PRODUCT_DETAILS = '/products/GET_PRODUCT_DETAILS'

const getProductsAction = (products) => ({
    type: GET_PRODUCTS,
    payload: products
})

const createProductAction = (product) => ({
    type: CREATE_PRODUCT,
    payload: product
})

const getProductDetailsAction = (product) => ({
    type: GET_PRODUCT_DETAILS,
    payload: product
})

export const getProducts = () => async (dispatch) => {
    const response = await fetch('/api/products', {
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(getProductsAction(data))
    } else {
        return response.errors;
    }
}

export const getProductDetails = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getProductDetailsAction(data));
        return data;
    } else {
        return response.errors;
    }
}

export const createProduct = (product) => async (dispatch) => {

    const response = await fetch('/api/products/new', {
        method: "POST",
        body: product
    })
    const resPost = await response.json();
    if (!resPost.errors) {
        dispatch(createProductAction(resPost))
        return resPost
    } else {
        throw resPost.errors;
    }
}

const initialState = {}
export default function reducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_PRODUCTS:
            action.payload.products.forEach(product => {
                newState[product.id] = product;
            });
            return newState;
        case CREATE_PRODUCT:
            newState[action.payload.id] = action.payload;
            return newState;
        case GET_PRODUCT_DETAILS:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return newState;
    }
}