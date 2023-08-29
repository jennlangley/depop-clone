import Profile from "./Profile";
import { useParams } from "react-router-dom";
const ProfileIndex = () => {
    const { username } = useParams();
    
    return (
        <Profile />
    )
}

export default ProfileIndex;