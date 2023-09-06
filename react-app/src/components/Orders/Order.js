import { NavLink } from "react-router-dom";
import Review from "../Reviews/Review";
import OpenModalButton from "../OpenModalButton";
import CreateReview from "../Reviews/CreateReview/CreateReview";
import DeleteReview from "../Reviews/ManageReviews/DeleteReview";
import EditReview from "../Reviews/ManageReviews/EditReview";

const Order = ({ order, reviews }) => {
    const product = order.product;


    const review = (Object.values(reviews).filter(review => review?.id === order.reviewId))[0]

    return (
        <div className="orderItem">
            <div>
                <img id="orderImage" className="productTileImage" alt={product.name} src={product.images[0].imageUrl} />
            </div>
            <div className="orderDetails">
                <h3>{product.name}</h3>
                <div>Sold by:{" "}
                    <NavLink to={`users/${product.user.username}`}>{product.user.username}</NavLink>
                </div>
                <div>Ordered on: {order.createdAt}</div>
                {review ?
                <div className="orderReview">Your review:
                    <Review review={review} />
                    <div className="editDeleteDiv">
                        <div>
                            <OpenModalButton 
                                modalComponent={<EditReview orderId={order.id} editReview={review} />}
                                buttonText={<div className="confirmButtonDesign">Edit</div>}
                            />
                        </div>
                        <div>
                            <OpenModalButton 
                                modalComponent={<DeleteReview reviewId={review.id} />}
                                buttonText={<div className="deleteButtonDesign">Delete</div>}
                            />
                        </div>

                    </div>
                </div>
                :
                <OpenModalButton 
                    modalComponent={<CreateReview orderId={order.id} />}
                    buttonText={<div className="confirmButtonDesign thinButton">Leave a review</div>}
                />

                }
            </div>
        </div>
    )
}
export default Order;