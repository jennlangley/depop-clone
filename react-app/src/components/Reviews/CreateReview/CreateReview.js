import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import * as reviewsActions from '../../../store/review';
import './ReviewModal.css';

const CreateReview = ({ orderId, editReview }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [stars, setStars] = useState(editReview?.stars || 0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState(editReview?.review || '');
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(errors).length < 1) {
            if (!editReview) {
                await dispatch(reviewsActions.createReview(orderId, {stars, review}))
                setHasSubmitted(false);
                reset();
                setErrors({});
                closeModal();
            }
            if (editReview) {
                await dispatch(reviewsActions.editReview(editReview.id, {stars, review}))
                setHasSubmitted(false);
                setErrors({});
                closeModal();
            }
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
            return;
        }
    }, [hasSubmitted, stars, review])

    return (
        <div className="loginContainer">
            <h1 id="modal-title">{editReview ? "Edit your review" : "Leave a review"}</h1>
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
                    <div className="reviewDiv">
                        <label>Review</label>
                            <textarea 
                                maxLength={255}
                                className="inputBox reviewTextarea"
                                placeholder="How was your buying experience?"
                                value={review}
                                onChange={e => setReview(e.target.value)}
                            />
                            {errors.review && <span className="errors">{errors.review}</span>}
                        
                    </div>
                    <button className="confirmButtonDesign formButton" onClick={e => setHasSubmitted(true)} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateReview;