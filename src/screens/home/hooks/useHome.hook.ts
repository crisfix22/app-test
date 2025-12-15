import { getAllOperations } from "../services/home.service";
import { HomeRequest } from "../services/interfaces/home.interfaces";

export const useHome = () => {
    const getHome = async ( request: HomeRequest ) => {
        const response = await getAllOperations(request);
        return response;
    }
    return { getHome };
}