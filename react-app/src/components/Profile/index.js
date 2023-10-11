import { useSelector } from "react-redux";
import Profile from "./Profile";

const ProfileIndex = () => {
    const sessionUser = useSelector(state => state.session.user)
    return (
        <Profile sessionUser={sessionUser} />
    )
}

export default ProfileIndex;