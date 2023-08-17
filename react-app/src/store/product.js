const GET_PRODUCTS = 'products/GET_PRODUCTS';

export const getProducts = () => async (dispatch) => {
    const response = await fetch('/api/products', {
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.ok) {
        const products = await response.json();
        console.log(products)
    } else {
        return response.errors;
    }


}
const initialState = {}
export default function reducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        default:
            return newState;
    }
}