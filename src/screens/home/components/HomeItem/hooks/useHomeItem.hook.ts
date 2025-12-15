import { COLORS } from "../../../../../global/styles/global.styles";

export const useHomeItem = () => {

    const formatAmount = (amount: number): string => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        }).format(amount);
    };
    
    const formatDate = (date: Date): string => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('es-CL', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };
    // Colores para el indicador de carbonScore
    const getCarbonScoreColor = (score: number): string => {
        if (score <= 300) {
            return COLORS.success; // Verde - score bajo
        } else if (score <= 500) {
            return COLORS.warning; // Amarillo - score medio
        } else {
            return COLORS.error; // Rojo - score alto
        }
    }
    const getCarbonScoreLabel = (score: number) => {
        if (score <= 300) {
            return 'Bajo';
        } else if (score <= 500) {
            return 'Medio';
        } else {
            return 'Alto';
        }
    }
    return { getCarbonScoreLabel, getCarbonScoreColor, formatAmount, formatDate };
}