import { useEffect, useState } from 'react';
import './UserDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../store/review';
import ReviewStars from '../ReviewStars';
import OpenModalButton from '../../OpenModalButton';
import Reviews from '../../Reviews/Reviews';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const UserDetail = ({ user, previewImage }) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const userId = user.id;

    useEffect(() => {
        dispatch(getReviews(userId)).then(() => setIsLoaded(true));
    }, [dispatch, userId])

    
    const reviews = useSelector(state => state.reviews)
    // TODO: make a backend request for all products owned by the user which are sold?
    // bc they can have a product which is sold w/o a review.
    const soldProducts = Object.values(reviews).length;
    
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
                    <NavLink to={`/users/${user.username}`}>{user.username}</NavLink>
                </div>
                <div className='details'>

                    <OpenModalButton 
                        modalComponent={<Reviews user={user} reviews={reviews} />} 
                        buttonText={<ReviewStars avgRating={avgRating} />}
                    />

                </div>
                <div className='productsSold details'>

                    {soldProducts !== 1 ? soldProducts + " products sold"
                    : soldProducts + " product sold"
                    } 
                </div>
            </div>
        </div>
    )
}

export default UserDetail;