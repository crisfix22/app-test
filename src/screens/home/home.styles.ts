import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/global.styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background_secondary,
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.text_primary,
    },
    headerSubtitle: {
        fontSize: 14,
        color: COLORS.text_secondary,
        marginTop: 4,
    },
    listContent: {
        paddingTop: 8,
        paddingBottom: 24,
    },
});

