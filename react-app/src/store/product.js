const GET_PRODUCTS = 'products/GET_PRODUCTS';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';
const EDIT_PRODUCT = 'products/EDIT_PRODUCT';
const GET_PRODUCT_DETAILS = '/products/GET_PRODUCT_DETAILS';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT';

export const getProductsAction = (products) => ({
    type: GET_PRODUCTS,
    payload: products
})

const createProductAction = (product) => ({
    type: CREATE_PRODUCT,
    payload: product
})

const editProductAction = (product) => ({
    type: EDIT_PRODUCT,
    payload: product
})

const getProductDetailsAction = (product) => ({
    type: GET_PRODUCT_DETAILS,
    payload: product
})

const deleteProductAction = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId
})

export const getProducts = () => async (dispatch) => {
    const response = await fetch('/api/products', {
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(getProductsAction(data));
        return data;
    } else {
        return response.errors;
    }
}

export const getUserProducts = (userId) => async (dispatch) => {
    const response = await fetch(`/api/products/user/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getProductsAction(data));
        return data;
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
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const resPost = await response.json();
    if (!resPost.errors) {
        dispatch(createProductAction(resPost))
        return resPost
    } else {
        throw resPost.errors;
    }
}

export const editProduct = (productId, product) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/edit`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    const resPost = await response.json();
    if (!resPost.errors) {
        dispatch(editProductAction(resPost));
        return resPost;
    } else {
        throw resPost.errors;
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/delete`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteProductAction(productId))
        return {'message': 'Successfully removed product'}
    } else {
        throw (response.json()).errors
    }
}

const initialState = {};
export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_PRODUCTS:
            const newProducts = {};
            action.payload.products.forEach(product => {
                newProducts[product.id] = product;
            });
            return newProducts;
        case CREATE_PRODUCT:
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_PRODUCT:
            newState[action.payload.id] = action.payload;
            return newState;
        case GET_PRODUCT_DETAILS:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_PRODUCT:
            delete newState[action.payload];
            return newState;
        default:
            return newState;
    }
}