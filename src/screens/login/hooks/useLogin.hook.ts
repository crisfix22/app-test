import { useUserContext } from "../../../context/user/user.context";
import { LoginResponse } from "../services/interfaces/login.interface";
import { loginService } from "../services/login.service";

export const useLogin = () => {
    
    const { setUser } = useUserContext();
    const validateCredentials = (email: string, password: string): boolean => {
        if(!email || !password) {
            return false;
        }
        return true;
    };
    const login = async (email: string, password: string): Promise<LoginResponse>    => {
        try {
            const response = await loginService(email, password);
            setUser({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                token: response.data.token,
            });
            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    return { login, validateCredentials };
}