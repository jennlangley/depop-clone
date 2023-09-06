import { useEffect, useDispatch, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userData = async () => {
            const data = await (
                await fetch(
                    `/api/users/${username}`
                )
            ).json();
        }
        if (userData) setUserData(userData)
    }, [])
    console.log(userData)
    return (
        <></>
    )
}
export default Profile;