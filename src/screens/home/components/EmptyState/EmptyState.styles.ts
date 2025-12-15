import { StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/global.styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 64,
    },
    iconContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: COLORS.blue_pale,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    iconInner: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.blue_lightest,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.text_primary,
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.text_secondary,
        textAlign: 'center',
        lineHeight: 20,
    },
});

