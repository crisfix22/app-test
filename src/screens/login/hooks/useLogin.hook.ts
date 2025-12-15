import { useUserContext } from "../../../context/user/user.context";
import { LoginResponse } from "../services/interfaces/login.interface";
import { loginService } from "../services/login.service";

const EMPTY_USER = {
    id: "",
    name: "",
    email: "",
    token: "",
}
export const useLogin = () => {
    
    const { setUser } = useUserContext();
    const validateCredentials = (email: string, password: string): boolean => {
        console.log('email', email);
        console.log('password', password);
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
            //TODO: cuando se implemente el backend, se debe cambiar el mensaje de error
            return {
                success: false,
                data: EMPTY_USER,
                message: "Credenciales incorrectas",
            }
        }
    };

    return { login, validateCredentials };
}