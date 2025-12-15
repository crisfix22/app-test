import { createContext, useContext, useState } from "react";
import { User, UserContextType } from "./interface/user.interface";


const UserContext = createContext<UserContextType>({
    user: {
        id: "",
        name: "",
        email: "",
        token: "",
    },
    setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    return ( 
       <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    if(!UserContext) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return useContext<UserContextType>(UserContext);
}