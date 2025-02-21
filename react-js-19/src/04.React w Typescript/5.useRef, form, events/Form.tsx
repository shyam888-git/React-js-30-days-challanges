import { FormEvent, useRef, useState } from 'react'
interface FormData {
    name: string;
    email: string;
    age: number
}

const Form = () => {
    const [submittedForm, setSubmittedForm] = useState<FormData>({
        name: '',
        email: '',
        age: 0
    })

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);

    const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nameValue = name.current?.value;
        const emailValue = email.current?.value;
        const ageValue = age.current?.value;

        setSubmittedForm({
            name: nameValue!,
            email: emailValue!,
            age: Number(ageValue)!
        })

    }


    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handeSubmit}>
                <input type='text' placeholder='enter name' ref={name} />
                <br /><br />
                <input type='email' placeholder='enter email' ref={email} />
                <br /><br />

                <input type='number' placeholder='enter age' ref={age} />
                <br /><br />
                <button type="submit">Submit button</button>

            </form>

            <h2>Name:{submittedForm.name}</h2>
            <h2>Age:{submittedForm.age}</h2>
            <h2>Email:{submittedForm.email}</h2>
        </div>
    )
}

export default Form