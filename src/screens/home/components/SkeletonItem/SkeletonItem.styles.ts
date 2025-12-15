import { StyleSheet } from "react-native";
import { COLORS } from "../../../../global/styles/global.styles";

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
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        borderWidth: 1,
        borderColor: COLORS.border_light,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    skeletonId: {
        width: 40,
        height: 14,
        borderRadius: 4,
        backgroundColor: COLORS.blue_lightest,
    },
    skeletonDate: {
        width: 80,
        height: 14,
        borderRadius: 4,
        backgroundColor: COLORS.blue_lightest,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountContainer: {
        flex: 1,
    },
    skeletonLabel: {
        width: 50,
        height: 12,
        borderRadius: 4,
        backgroundColor: COLORS.blue_pale,
        marginBottom: 8,
    },
    skeletonAmount: {
        width: 120,
        height: 28,
        borderRadius: 6,
        backgroundColor: COLORS.blue_lightest,
    },
    carbonContainer: {
        alignItems: 'center',
        paddingLeft: 16,
    },
    skeletonCarbonLabel: {
        width: 70,
        height: 10,
        borderRadius: 4,
        backgroundColor: COLORS.blue_pale,
        marginBottom: 8,
    },
    skeletonCarbonBadge: {
        width: 60,
        height: 36,
        borderRadius: 12,
        backgroundColor: COLORS.blue_lightest,
    },
});

