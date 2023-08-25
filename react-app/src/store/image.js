const GET_IMAGES = 'images/GET_IMAGES';
const CREATE_IMAGE = 'images/CREATE_IMAGE';
const EDIT_IMAGE = 'images/EDIT_IMAGE';

const getImagesAction = (images) => ({
    type: GET_IMAGES,
    payload: images
})

const createImageAction = (image) => ({
    type: CREATE_IMAGE,
    payload: image
})

const editImageAction = (image) => ({
    type: EDIT_IMAGE,
    payload: image
})

export const getImages = (productId) => async (dispatch) => {
    const response = await fetch(`/api/images/${productId}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(getImagesAction(data));
        return data;
    } else {
        return response.errors;
    }
}

export const createImage = (productId, image) => async (dispatch) => {
    const response = await fetch(`/api/images/${productId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(image)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(createImageAction(data));
    } else {
        return response.errors;
    }
}

export const editImage = (imageId, image) => async (dispatch) => {
    const response = await fetch(`/api/images/${imageId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(image)
    })
    if (response.ok) {
        const data = await response.json();
        if (!data.message) {
           dispatch(editImageAction(data)); 
        }
    } else {
        return response.errors;
    }
}


const initialState = {};
export default function reducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_IMAGES:
            action.payload.images.forEach(image => newState[image.id] = image)
            return newState;
        case CREATE_IMAGE:
            newState[action.payload.image.id] = action.payload.image;
            return newState;
        case EDIT_IMAGE:
            newState[action.payload.image.id] = action.payload.image;
            return newState;
        default:
            return newState;
    }
}