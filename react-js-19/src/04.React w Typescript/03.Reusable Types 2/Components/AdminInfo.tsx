import { info } from "./UserInfo"

type AdminInfo = info & {
    location: string[]
}
const AdminInfo = ({ name, email, address, location }: AdminInfo) => {
    return (
        <div>AdminInfo

            <p>{name}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{JSON.stringify(location)}</p>

        </div>
    )
}

export default AdminInfo