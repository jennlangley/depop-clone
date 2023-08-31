import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './ReviewModal.css';

const CreateReview = () => {
    const dispatch = useDispatch();

    const [stars, setStars] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!Object.values(errors.length)) {
            
        }
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
                    Stars
                    </div>
                    <div>
                        <label>
                            Review
                            <textarea 
                                placeholder="How was your buying experience?"
                                value={review}
                                onChange={e => setReview(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateReview;