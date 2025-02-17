import { useState } from "react";
import "./index.css";
interface IAccordianProps {
    title?: string;
    content?: string
}
export const Accordian = ({ title, content }: IAccordianProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <section className="accordion-card" key={Math.random()}>
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <div className="header">{title}</div>
                <p className="icon">{isActive ? "-" : "+"}</p>
            </div>
            <div className="content">
                {isActive && <p className="card-info">{content}</p>}
            </div>

        </section>
    )
}