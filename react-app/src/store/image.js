const GET_IMAGES = 'images/GET_IMAGES';
const CREATE_IMAGE = 'images/CREATE_IMAGE';

const getImagesAction = (images) => ({
    type: GET_IMAGES,
    payload: images
})

const createImageAction = (image) => ({
    type: CREATE_IMAGE,
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

export const createImage = (productId, imageUrl) => async (dispatch) => {
    console.log(imageUrl)
    const response = await fetch(`/api/images/${productId}`, {
        method: "POST",
        body: JSON.stringify(imageUrl)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(createImageAction(data))
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
        default:
            return newState;
    }
}