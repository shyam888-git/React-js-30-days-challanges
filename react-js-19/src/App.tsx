import { UpdateUser } from './02.React Hook/4.Context/excrise/components/UpdateUser'
import { UserProfile } from './02.React Hook/4.Context/excrise/components/UserProfile'
import { UserProvider } from './02.React Hook/4.Context/excrise/UserContext'
import './App.css'
import { Switcher } from './components/Switcher/Switcher'
function App() {

    return (
        <>
            {/* <TodoList/>  */}
            {/* <Profile /> */}
            {/* <ShoppingList /> */}
            {/* <CopyContent /> */}
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
        </>
    )
}

export default App
