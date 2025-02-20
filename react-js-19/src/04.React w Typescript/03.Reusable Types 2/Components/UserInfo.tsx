
export type info = {
    name: string;
    address: string;
    email: string;
}
const UserInfo = ({ name, address, email }: info) => {
    return (
        <div><h2>{name}</h2>
            <p>{address}</p>
            <p>{email}</p>

        </div>
    )
}

export default UserInfo