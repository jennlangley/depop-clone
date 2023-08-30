import ReviewStars from '../../Profile/ReviewStars';
import './Reviews.css';
const Reviews = ({ reviews }) => {

    return (
        reviews.length ?
        <div id="reviews-container">
        {Object.values(reviews).map((review, idx) =>
            <div key={idx} id="review"> 
                <div>{review.user.username}</div>
                <ReviewStars avgRating={review.stars} />
                <div>{review.review}</div>
                <div>{review.createdAt} ago</div>
            </div>
        )}
        </div> 
        :
        <div id="reviews-container">
            <h3>No reviews yet!</h3>
        </div>
    )
    
}

export default Reviews;