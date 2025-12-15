import { StyleSheet } from "react-native";
import { COLORS } from "../../../../global/styles/global.styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    skeletonHero: {
        backgroundColor: COLORS.primary,
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    skeletonAmount: {
        width: 200,
        height: 42,
        backgroundColor: COLORS.blue_light,
        borderRadius: 8,
        marginBottom: 24,
    },
    skeletonBadge: {
        width: 140,
        height: 48,
        backgroundColor: COLORS.blue_light,
        borderRadius: 24,
    },
    skeletonCard: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginTop: 24,
        shadowColor: COLORS.blue_navy,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
        borderColor: COLORS.border_light,
    },
    skeletonTitle: {
        width: 180,
        height: 20,
        backgroundColor: COLORS.blue_pale,
        borderRadius: 4,
        marginBottom: 20,
    },
    skeletonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue_pale,
    },
    skeletonLabel: {
        width: 80,
        height: 14,
        backgroundColor: COLORS.blue_pale,
        borderRadius: 4,
    },
    skeletonValue: {
        width: 120,
        height: 14,
        backgroundColor: COLORS.blue_pale,
        borderRadius: 4,
    },
});