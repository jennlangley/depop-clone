import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../store/review";

const DeleteReview = ({ reviewId }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const DeleteReview = async () => {
        await dispatch(deleteReview(reviewId));
        closeModal();
        return;
    }

    return (
        <div>
            <h1 id="modal-title">Do you want to delete your review?</h1>
            <div className="editDeleteDiv">
                <button onClick={e => closeModal()} className="confirmButtonDesign">Cancel</button>
                <button onClick={e => DeleteReview()} className="deleteButtonDesign">Yes, delete my review</button>
            </div>
        </div>
    )
}

export default DeleteReview;