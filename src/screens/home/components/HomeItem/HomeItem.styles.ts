import { StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/global.styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background_primary,
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: COLORS.blue_navy,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: COLORS.border_light,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    idText: {
        fontSize: 12,
        color: COLORS.text_muted,
        fontWeight: '500',
    },
    dateText: {
        fontSize: 12,
        color: COLORS.text_secondary,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountContainer: {
        flex: 1,
    },
    amountLabel: {
        fontSize: 12,
        color: COLORS.text_secondary,
        marginBottom: 4,
    },
    amountValue: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.text_primary,
    },
    carbonContainer: {
        alignItems: 'center',
        paddingLeft: 16,
    },
    carbonLabel: {
        fontSize: 10,
        color: COLORS.text_secondary,
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    carbonBadge: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        minWidth: 60,
        alignItems: 'center',
    },
    carbonValue: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.background_primary,
    },
});

// Colores para el indicador de carbonScore
export const getCarbonScoreColor = (score: number): string => {
    if (score <= 300) {
        return '#28A745'; // Verde - score bajo
    } else if (score <= 500) {
        return '#FFC107'; // Amarillo - score medio
    } else {
        return '#DC3545'; // Rojo - score alto
    }
};

export const getCarbonScoreLabel = (score: number): string => {
    if (score <= 300) {
        return 'Bajo';
    } else if (score <= 500) {
        return 'Medio';
    } else {
        return 'Alto';
    }
};
