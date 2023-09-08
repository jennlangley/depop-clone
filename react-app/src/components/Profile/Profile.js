import { useEffect, useDispatch, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getUser(username).then(() =>  setIsLoaded(true));
    }, [])

    const getUser = async (username) => {
        const res = await fetch(`/api/users/${username}`);
        const data = await res.json();
        setUser(data);
    }

    return (
        isLoaded &&
        user ? 
        <ProfileDetails user={user} />
        :
        <h1>User not found</h1>
    )
}
export default Profile;