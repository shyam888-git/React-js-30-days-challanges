import UserInfo from './Components/UserInfo'
import AdminInfo from './Components/AdminInfo'

const App = () => {
    return (
        <div>
            <UserInfo name="Shyam" email='sam@gmail.com' address='Kathmandu' />
            <AdminInfo name='Ram' email='ram@gmail.com' address='laltipur' location={['pokhara', 'dhangadi']} />
        </div>
    )
}

export default App