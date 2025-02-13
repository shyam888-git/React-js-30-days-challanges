import { UserProfile } from "./components/UserProfile"
import { UserProvider } from "./UserContext"

function App() {

    return (
        <>

            <UserProvider>
                <UserProfile />
            </UserProvider>
        </>
    )
}

export default App
