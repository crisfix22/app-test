import { getAllOperations } from "../services/home.service";
import { HomeRequest } from "../services/interfaces/home.interfaces";

export const useHome = () => {
    const getHome = async ( request: HomeRequest ) => {
        try {
            const response = await getAllOperations(request);
            return response;
        } catch (error) {
            return {
                success: false,
                data: [],
                message: "Error fetching operations"
            }
        }
    }
    return { getHome };
}