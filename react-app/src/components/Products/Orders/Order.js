import Review from "../ProductDetail/Review";
import OpenModalButton from "../../OpenModalButton";
const Order = ({ order, reviews }) => {
    const product = order.product;
    const review = (Object.values(reviews).filter(review => review?.id === order.reviewId))[0]

    return (
        <div className="orderItem">
            <div>
                <img className="productTileImage" alt={product.name} src={product.images[0].imageUrl} />
            </div>
            <div>
                <div>{product.name}</div>
                <div>Ordered on: {order.createdAt}</div>
                {review ?
                <div>Your review:
                    <Review review={review} />
                    <div className="editDeleteDiv">
                        <div>

                            <OpenModalButton 

                                buttonText={<div className="confirmButtonDesign">Edit</div>}
                            />
                        </div>
                        <div>
                            <OpenModalButton 

                                buttonText={<div className="deleteButtonDesign">Delete</div>}
                            />
                        </div>

                    </div>
                </div>
                :
                <p>Leave a review</p>
                }
            </div>
        </div>
    )
}
export default Order;