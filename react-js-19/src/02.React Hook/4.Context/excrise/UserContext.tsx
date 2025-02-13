import { createContext, ReactNode, useState } from "react";

interface User {
    name: string;
}

interface UserContextType {
    user: User | null;
    updateUser: (newName: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>({ name: "Shyam Sharki" });

    const updateUser = (newName: string) => {
        setUser({ name: newName });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
