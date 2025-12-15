import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_MOCK, USER_KEY } from "../../login/services/login.service";
import { HomeRequest, HomeResponse } from "./interfaces/home.interfaces";
import { operationsDataMock } from "./mock/operations.data";

const validateToken = (token: string) => {
    if(token === "123") {
        return true;
    }
    return false;
}

export const getAllOperations = async (request: HomeRequest) => {
    const user = JSON.parse(await AsyncStorage.getItem(USER_KEY) ?? "{}");
    console.log(user);
    if(!validateToken(user.token)) {
        throw new Error("Invalid token");
    }
    if(request.simulateNoData) {
        return {
            success: true,
            data: [],
            message: "No operations found"
        }
    }
    const response: HomeResponse = {
        success: true,
        data: operationsDataMock.map((operation) => ({
            id: operation.id,
            amount: operation.amount,
            carbonScore: operation.carbon_score,
            createdAt: operation.created_at,
        })),
        message: "Operations fetched successfully"
    }
    return response;
}
export const getOperationByUserId = async (userId: string) => {
    const response = await getAllOperations({ simulateNoData: false });
    return response.data.filter((operation) => operation.id === userId);
}