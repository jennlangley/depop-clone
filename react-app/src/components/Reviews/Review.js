import ReviewStars from "../Profile/ReviewStars";

const Review = ({ review }) => {

    return (
        <div id="review"> 
            <div>{review.user.username}</div>
            <ReviewStars avgRating={review.stars} />
            <div className="reviewText">{review.review}</div>
            <div className="reviewDate">Reviewed on: {review.createdAt}</div>
        </div>
    )
}
export default Review;