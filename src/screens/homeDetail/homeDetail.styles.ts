import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../global/styles/global.styles";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollContent: {
        flexGrow: 1,
    },
    // === HERO SECTION ===
    heroSection: {
        backgroundColor: COLORS.primary,
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 24,
        alignItems: 'center',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    heroLabel: {
        fontSize: 14,
        color: COLORS.blue_lighter,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    heroAmount: {
        fontSize: 42,
        fontWeight: '800',
        color: COLORS.white,
        marginBottom: 24,
    },
    carbonScoreContainer: {
        alignItems: 'center',
    },
    carbonScoreLabel: {
        fontSize: 12,
        color: COLORS.blue_lighter,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    carbonBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 24,
        gap: 8,
    },
    carbonValue: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.white,
    },
    carbonStatus: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.white,
        opacity: 0.9,
    },
    // === CONTENT SECTION ===
    contentSection: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 32,
    },
    // === DETAIL CARD ===
    detailCard: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 20,
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
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text_primary,
        marginBottom: 20,
    },
    // === INFO ROWS ===
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue_pale,
    },
    infoRowLast: {
        borderBottomWidth: 0,
    },
    infoLabel: {
        fontSize: 14,
        color: COLORS.text_secondary,
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 14,
        color: COLORS.text_primary,
        fontWeight: '600',
    },
    // === LOADING STATE ===
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 14,
        color: COLORS.text_secondary,
    },
    footerSection: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
});

