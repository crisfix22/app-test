import { getAllOperations } from "../services/home.service";
import { HomeRequest } from "../services/interfaces/home.interfaces";
import { useHomeContext } from "../context/home.context";

export const useHome = () => {
    const { setOperations } = useHomeContext();
    const getHome = async ( request: HomeRequest ) => {
        try {
            const response = await getAllOperations(request);
            setOperations(response.data);
            return response;
        } catch (error) {
            setOperations([]);
            return {
                success: false,
                data: [],
                message: "Error fetching operations"
            }
        }
    }
    return { getHome };
}