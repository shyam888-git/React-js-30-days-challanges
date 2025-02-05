import { useState } from "react"

export const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: ""
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProfile((prevValue) => ({
            ...prevValue,
            [name]: value
        }))

    }


    return (
        <>
            <h3>User Information</h3>
            <input type="text" name="name" onChange={handleChange} value={profile.name} />
            <br /><br />

            <input type="text" name="age" onChange={handleChange} value={profile.age} />
            <br /><br />

            <h4>User Details</h4>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>

        </>
    )
}