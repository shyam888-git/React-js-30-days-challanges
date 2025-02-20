import { info } from "../types"

type UserInfoProps = {
    user: info;
}
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default UserInfo