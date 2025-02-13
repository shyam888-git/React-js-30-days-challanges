import { useContext, useState } from "react"
import { UserContext } from "../UserContext";

export const UpdateUser = () => {
    const { updateUser } = useContext(UserContext);
    const [name, setName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name.trim()) {
            updateUser(name);
            setName("");
        }

    }
    return (
        <>
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name" />
                <button type="submit">Update</button>
            </form>

        </>
    )
}