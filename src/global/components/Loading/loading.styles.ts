import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/global.styles';

export const loadingStyles = StyleSheet.create({
    // Overlay de pantalla completa
    fullScreenOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.background_primary, // blue_navy con transparencia
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    
    // Contenedor inline (sin overlay)
    inlineContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    
    // Caja del loading con efecto glassmorphism
    loadingBox: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.blue_navy,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 12,
        minWidth: 140,
        minHeight: 140,
    },
    
    // Texto del mensaje
    messageText: {
        marginTop: 16,
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.text_primary,
        textAlign: 'center',
        letterSpacing: 0.3,
    },
    
    // Contenedor del spinner con animación de pulso
    spinnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // Anillo decorativo exterior
    outerRing: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.blue_lightest,
    },
});

