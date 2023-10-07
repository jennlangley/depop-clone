import UserDetail from "./UserDetail/UserDetail";
import './Profile.css'
const ProfileDetails = ({ user, profile }) => {

    return (

            <>
            <UserDetail user={user} profile={profile} />
            
            </>

    )
}

export default ProfileDetails;