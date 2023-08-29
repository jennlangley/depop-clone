
const Reviews = ({ reviews }) => {

    return (
        Object.values(reviews).map(review =>
            <div> 
                <div>{review.user.username}</div>
                <div>{review.review}</div>
                <div>{review.createdAt} ago</div>
            </div>
        )
    )
}

export default Reviews;