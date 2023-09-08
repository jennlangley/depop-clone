import UserDetail from "./UserDetail/UserDetail";
import './Profile.css'
const ProfileDetails = ({ user }) => {

    return (
        <div>
            
            <UserDetail user={user} profile={true} />
            <div className="profileHeader">
                <div>{user.firstName} {user.lastName}</div>
                <div>{user.bio}</div>
            </div>
            
        </div>
    )
}

export default ProfileDetails;