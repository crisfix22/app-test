export interface LoginResponse {
    success: boolean;
    data: {
        id: string;
        name: string;
        email: string;
        token: string;
    };
    message: string;
}