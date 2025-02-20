import AdminInfo from "./04.React w Typescript/02.Reusable Types/Components/AdminInfo"
import UserInfo from "./04.React w Typescript/02.Reusable Types/Components/UserInfo"
import { AdminInfoList, info } from "./04.React w Typescript/02.Reusable Types/types"

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