import { useHomeContext } from "../../home/context/home.context";


export const useHomeDetail = () => {
    const { operations } = useHomeContext();
    
    const getOperationById = async (operationId: string) => {
        const operation = operations.find((operation) => operation.id === operationId);
        if (!operation) {
            return {
                success: false,
                data: null,
                message: "Operation not found"
            }
        }
        return {
            success: true,
            data: operation,
            message: "Operation found"
        }
    }
    return { getOperationById };
}