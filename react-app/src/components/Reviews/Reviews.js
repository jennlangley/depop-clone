import Review from './Review';
import './Reviews.css';

const Reviews = ({ reviews }) => {

    return (
        Object.values(reviews).length ?
        <div id="reviews-container">
        {Object.values(reviews).map((review, idx) =>
            <Review key={idx} review={review} />
        )}
        </div> 
        :
        <div id="reviews-container">
            <h3>No reviews yet!</h3>
        </div>
    )
    
}

export default Reviews;