import { useEffect } from 'react';
import './UserDetail.css';
import { useDispatch } from 'react-redux';
import { getReviews } from '../../../store/review';

const UserDetail = ({ user }) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews(user.id))
    }, [dispatch])

    return (
        <div className="userDetails">
            <div className="profilePicture">
                <div className='userInitials'>
                {user.firstName[0]}{user.lastName[0]} 
                </div>
            </div>
            <div>{user.username}</div>
        </div>
    )
}

export default UserDetail;