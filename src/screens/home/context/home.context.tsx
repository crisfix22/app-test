import { createContext, useContext, useState } from "react";
import { HomeContextType } from "./interface/home.interface";
import { Operation } from "../services/interfaces/home.interfaces";

export const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
    const [operations, setOperations] = useState<Array<Operation>>([]);
    return <HomeContext.Provider value={{ operations, setOperations: (operations) => setOperations(operations) }}>{children}</HomeContext.Provider>;
}

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("useHomeContext must be used within a HomeProvider");
    }
    return context;
}