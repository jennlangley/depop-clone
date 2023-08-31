import ReviewStars from "../../Profile/ReviewStars";

const Review = ({ review }) => {

    return (
        <div id="review"> 
            <div>{review.user.username}</div>
            <ReviewStars avgRating={review.stars} />
            <div>{review.review}</div>
            <div>{review.createdAt}</div>
        </div>
    )
}
export default Review;