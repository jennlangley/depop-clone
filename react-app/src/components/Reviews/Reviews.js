import { useModal } from '../../context/Modal';
import Review from './Review';
import './Reviews.css';

const Reviews = ({ reviews, user }) => {
    const { closeModal } = useModal();
    return (
        <div>
            {Object.values(reviews).length ?
            <div id="reviews-container">
            <h3 className='reviews-title'>Reviews for {user.username}</h3>
            {Object.values(reviews).map((review, idx) =>
                <Review key={idx} review={review} />
            )}
            </div> 
            :
            <div id="reviews-container">
                <h3>No reviews yet</h3>
            </div>}
            <div onClick={e => closeModal()} className='confirmButtonDesign'>Close Reviews</div>
        </div>
    )
    
}

export default Reviews;