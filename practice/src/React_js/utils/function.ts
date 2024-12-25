import { useEffect, useState } from "react";

export interface IdebounceProps {
    inputValue: string;
    delay: number;
}

export const useDebouncedValue = ({ inputValue, delay }: IdebounceProps) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [inputValue, delay]);

    return debouncedValue;
}