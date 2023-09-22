import { useSelector } from "react-redux";
import ReviewStars from "../Profile/ReviewStars";

const Review = ({ review }) => {
    return (
        <div className="review-image">
            <div className="imgContainer">
                <img className="reviewImg" src={review.product.images[0]?.imageUrl} />
            </div>
            <div id="review"> 
                <div>{review.user.username}</div>
                <ReviewStars avgRating={review.stars} />
                <div className="reviewText">{review.review}</div>
                <div className="reviewDate">Reviewed on: {review.createdAt}</div>
            </div>
        </div>
    )
}
export default Review;