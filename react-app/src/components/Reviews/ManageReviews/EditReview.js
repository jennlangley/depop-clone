import CreateReview from "../CreateReview/CreateReview";

const EditReview = ({ orderId, editReview }) => {

    return (
        <CreateReview orderId={orderId} editReview={editReview} />
    )
}

export default EditReview;