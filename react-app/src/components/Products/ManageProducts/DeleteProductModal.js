import React from "react";
import { useModal } from '../../../context/Modal'
import { deleteProduct } from "../../../store/product";
import { useDispatch } from "react-redux";

const DeleteProduct = ({ productId }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch();

    const DeleteProduct = async () => {
        await dispatch(deleteProduct(productId));
        closeModal();
        return;
    }

    return (
        <div>
            <h1 id="modal-title">Do you want to delete your product listing?</h1>
            <div className="editDeleteDiv">
                <div className="manageButtonContainer">
                    <button onClick={e => closeModal()} className="confirmButtonDesign">Cancel</button>

                </div>
                <div className="manageButtonContainer">
                    <button onClick={e => DeleteProduct()} className="deleteButtonDesign">Yes, delete my listing</button>

                </div>
            </div>
        </div>
    )
}

export default DeleteProduct;