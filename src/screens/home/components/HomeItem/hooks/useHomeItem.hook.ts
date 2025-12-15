import { COLORS } from "../../../../../styles/global.styles";

export const useHomeItem = () => {
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
    return { getCarbonScoreLabel, getCarbonScoreColor };
}