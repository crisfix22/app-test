export interface LoginServiceProps {
    email: string;
    password: string;
}
export const TOKEN_MOCK = "1234567890";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse } from "./interfaces/login.interface";
import { dbUserMock } from "./mock/db_user";


export const USER_KEY = "user";
const simulateResponse = (success: boolean, data: LoginResponse): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve(data);
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, 1000);
    });
}
const buildResponse = (success: boolean): LoginResponse => {
    return {
        success: success,
        data: {
            id: "1",
            name: "Test User",
            email: "test@carbon.com",
            token: TOKEN_MOCK
        },
        message: success ? "Login successful" : "Invalid credentials"
    }
}

export const loginService = async (email: string, password: string): Promise<LoginResponse> => {
    const { email: dbEmail, password: dbPassword } = dbUserMock;
    if(email == dbEmail && password == dbPassword) {
        const response: LoginResponse = buildResponse(true);
        const result = await simulateResponse(true, response);
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(result));
        return response;
    }
    const response: LoginResponse = buildResponse(false);
    return simulateResponse(false, response);
};