import AdminInfo from "./04.React w Typescript/03.Reusable Types 2/Components/AdminInfo"
import UserInfo from "./04.React w Typescript/03.Reusable Types 2/Components/UserInfo"

const App = () => {
    return (
        <div>
            <UserInfo name="Shyam" email='sam@gmail.com' address='Kathmandu' />
            <AdminInfo name='Ram' email='ram@gmail.com' address='laltipur' location={['pokhara', 'dhangadi']} />
        </div>
    )
}

export default App