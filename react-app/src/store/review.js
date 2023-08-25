const GET_REVIEWS = 'reviews/GET_REVIEWS';

const getReviewsAction = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
})

export const getReviews = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviewsAction(data));
        return data;
    } else {
        return response.errors
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_REVIEWS:
            action.payload.reviews.forEach(review => newState[review.id] = review);
            return newState;
        default:
            return newState;
    }
}