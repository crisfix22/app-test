export interface User {
    id: string;
    name: string;
    email: string;
    token: string; 
}
export interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}
