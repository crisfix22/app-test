import { useHomeContext } from "../../home/context/home.context";
import { useHomeItem } from "../../home/components/HomeItem/hooks/useHomeItem.hook";


export const useHomeDetail = () => {
    const { operations } = useHomeContext();
    const { formatAmount, formatDate, getCarbonScoreColor, getCarbonScoreLabel } = useHomeItem();
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
    return { getOperationById, formatAmount, formatDate, getCarbonScoreColor, getCarbonScoreLabel };
}