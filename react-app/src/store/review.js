const GET_REVIEWS = 'reviews/GET_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';

const getReviewsAction = (reviews) => ({
    type: GET_REVIEWS,
    payload: reviews
})

const createReviewAction = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

export const getReviews = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/user/${userId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviewsAction(data));
        return data;
    } else {
        return response.errors;
    }
}

export const getUserReviews = (userId) => async (dispatch) => {
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
        return response.errors;
    }
}

export const createReview = (productId, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${productId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(createReviewAction(data));
        return;
    } else {
        return response.errors;
    }
}

const initialState = {};

export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_REVIEWS:
            const reviews = {};
            action.payload.reviews.forEach(review => reviews[review.id] = review);
            return reviews;
        case CREATE_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return newState;
    }
}