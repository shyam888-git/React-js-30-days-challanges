import { useContext } from "react";
import { UserContext } from "../UserContext";

export const UserProfile = () => {
    const userContext = useContext(UserContext);
    console.log(userContext, 'userContext=======>')

    if (!userContext) {
        return <p>Loading...</p>;
    }

    const { user } = userContext;


    return (
        <>
            <h1>User Profile</h1>
            <p>Name: {user?.name ?? "Guest"}</p>
        </>
    );
};
