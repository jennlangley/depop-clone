import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import * as reviewsActions from '../../../store/review';
import './ReviewModal.css';

const CreateReview = ({ orderId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [stars, setStars] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([])
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!Object.values(errors).length) {
            const newReview = await dispatch(reviewsActions.createReview(orderId, {stars, review}))
            reset();
            setHasSubmitted(false);
            setErrors({});
            closeModal();
        }
    }

    const reset = () => {
        setStars(0);
        setReview('');
    }

    useEffect(() => {
        if (hasSubmitted) {
            const errors = {};
            if (stars < 1) errors.stars = "Star rating cannot be empty";
            if (review.length < 10) errors.review = "Review must be at least 10 characters";
            if (review.length > 300) errors.review = "Review must be less than 300 characters";
            setErrors(errors);
        }
    }, [hasSubmitted, stars, review])

    return (
        <div className="loginContainer">
            <h1 id="modal-title">Leave a review</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="reviewDiv">
                        <div>
                        {[...Array(5)].map((star, idx) => {  
                            idx++      
                            return (    
                            <button
                                type="button"
                                id="star-button"
                                key={idx}
                                className={idx <= (hover || stars) ? "activeStar" : "inactiveStar"}
                                onClick={() => setStars(idx)}
                                onMouseEnter={() => setHover(idx)}
                                onMouseLeave={() => setHover(stars)}
                            >
                                <span>
                                    <i className="rating__star fas fa-star"></i>
                                </span>  
                            </button>      
                            );
                        })}
                        </div>
                        {errors.stars && <span className="errors">{errors.stars}</span>}

                    </div>
                    <div>
                        <label>
                            Review
                            <textarea 
                                placeholder="How was your buying experience?"
                                value={review}
                                onChange={e => setReview(e.target.value)}
                            />
                            {errors.review && <span className="errors">{errors.review}</span>}
                        </label>
                        
                    </div>
                    <button className="confirmButtonDesign formButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateReview;