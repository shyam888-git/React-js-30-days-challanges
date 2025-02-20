import AdminInfo from "./Components/AdminInfo"
import UserInfo from "./Components/UserInfo"
import { AdminInfoList, info } from "./types"

const App = () => {

    const User: info = {
        id: 1,
        name: "Shyam",
        email: 'ssk@gmail.com'
    }

    const Admin: AdminInfoList = {
        id: 2,
        name: "Ram",
        email: 'ram@gmail.com',
        role: 'Designer',
        lastLogin: 'today'
    }
    return (
        <>
            <UserInfo user={User} />
            <AdminInfo admin={Admin} />
        </>
    )
}

export default App