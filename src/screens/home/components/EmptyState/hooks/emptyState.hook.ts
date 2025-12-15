import { EmptyStateConfig, EmptyStateType } from "../interface/emptyState.interface";

export const useEmptyState = () => {

    const emptyStateConfig: EmptyStateConfig = {
        not_found: {
            title: "Operación no encontrada",
            subtitle: "Por favor, intenta nuevamente",
            icon: "❌",
        },
        error: {
            title: "Ha ocurrido un error al cargar las operaciones",
            subtitle: "Por favor, intenta nuevamente",
            icon: "❌",
        },
        empty: {
            title: "No hay operaciones disponibles",
            subtitle: "Por favor, intenta nuevamente",
            icon: "📋",
        },
    }

    const getEmptyState = (type: EmptyStateType) => {
        return emptyStateConfig[type];
    }
    return { getEmptyState };
}