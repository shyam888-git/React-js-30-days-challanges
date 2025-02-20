// import { FC, ReactNode } from 'react'

// type ButtonProps = {
//     label: ReactNode;
//     onClick?: () => void;
//     disabled?: boolean
// }

const Button = ({ label, onClick, disabled }:{label:string, onClick:()=>void,disabled:boolean}) => {
    return (
        <button onClick={onClick} disabled={disabled}>{label}</button>
    )
}

export default Button