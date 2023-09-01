import { useEffect, useState } from 'react';
import './UserDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../store/review';
import ReviewStars from '../ReviewStars';
import OpenModalButton from '../../OpenModalButton';
import Reviews from '../../Reviews/Reviews';

const UserDetail = ({ user }) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const userId = user.id;

    useEffect(() => {
        dispatch(getReviews(userId)).then(() => setIsLoaded(true));
    }, [dispatch, userId])

    const soldProducts = useSelector(state => Object.values(state.products).filter(product => (product.userId === user.id) && (product.sold === true)))
    const reviews = useSelector(state => state.reviews)
    
    let stars = [];
    let avgRating;
    if (Object.values(reviews).length) {
        Object.values(reviews).forEach(review => stars.push(review.stars));
        avgRating = (stars.reduce((accumulator, currentValue) => accumulator + currentValue, 0.0)) / stars.length;
    } 

    return (
        isLoaded &&
        <div className="userDetails">
            <div className="profilePicture">
                <div className='userInitials'>
                {user.firstName[0]}{user.lastName[0]} 
                </div>
            </div>
            <div className='userReviews'>
                <div className='username details'>
                    {user.username}
                </div>
                <div className='details'>

                    <OpenModalButton 
                    modalComponent={<Reviews user={user} reviews={reviews} />} 
                    buttonText={<ReviewStars avgRating={avgRating} />}
                    />

                </div>
                <div className='productsSold details'>

                    {soldProducts.length !== 1 ? soldProducts.length + " products sold"
                    : soldProducts.length + " product sold"
                    } 
                </div>
            </div>
        </div>
    )
}

export default UserDetail;