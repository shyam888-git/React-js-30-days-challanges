import  { useState } from 'react'

interface UserProfile {
    name: string;
    email: string;
    age: number;
}

const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name: "",
        email: "",
        age: 0
    });

    const updateName = (name: string) => {
        setProfile((prevProfile) => ({ ...prevProfile, name }));
    }

    const updateEmail = (email: string) => {
        setProfile((prevProfile) => ({ ...prevProfile, email }));
    }

    const updateAge = (age: string) => {
        setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
    }
    return (
        <div>
            <h2>User profile</h2>
            <input type="text" placeholder='name' onChange={(e) => updateName(e.target.value)} value={profile.name} />

            <br />
            <input type='email' placeholder='email' onChange={(e) => updateEmail(e.target.value)} value={profile.email} />

            <br /><br />
            <input type='number' placeholder='age' onChange={(e) => updateAge(e.target.value)} value={profile.age > 0 ? profile.age : ''} />


            <br />
            <h3>User Profile</h3>
            <p>Name:{profile.name}</p>
            <p>Age:{profile.age}</p>
            <p>Email:{profile.email}</p>
        </div>
    )
}

export default UserProfile