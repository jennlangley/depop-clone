const GET_CATEGORIES = 'categories/GET_CATEGORIES';

const getCategoriesAction = (categories) => ({
    type: GET_CATEGORIES,
    payload: categories     
})

export const getCategories = () => async (dispatch) => {
    const response = await fetch('/api/category', {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getCategoriesAction(data));
        return data;
    } else {
        return response.errors;
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_CATEGORIES:
            action.payload.categories.forEach(category => newState[category.id] = category);
            return newState;
        default:
            return newState;
    }
}