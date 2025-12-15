import React, { useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Animated, Easing } from 'react-native';
import { loadingStyles } from './loading.styles';
import { LoadingProps } from './interface/loading.interface';
import { COLORS } from '../../styles/global.styles';

export const LoadingComponent: React.FC<LoadingProps> = ({
    fullScreen = true,
    message = 'Cargando...',
    size = 'large',
    color = COLORS.primary,
    visible = true,
}) => {
    const pulseAnim = useRef(new Animated.Value(1)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            // Animación de pulso
            const pulseAnimation = Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnim, {
                        toValue: 1.15,
                        duration: 800,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1,
                        duration: 800,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                ])
            );

            // Animación de rotación del anillo
            const rotateAnimation = Animated.loop(
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            );

            pulseAnimation.start();
            rotateAnimation.start();

            return () => {
                pulseAnimation.stop();
                rotateAnimation.stop();
            };
        }
    }, [visible, pulseAnim, rotateAnim]);

    if (!visible) return null;

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const containerStyle = fullScreen 
        ? loadingStyles.fullScreenOverlay 
        : loadingStyles.inlineContainer;

    return (
        <View style={containerStyle}>
            <View style={loadingStyles.loadingBox}>
                <View style={loadingStyles.spinnerContainer}>
                    {/* Anillo decorativo animado */}
                    <Animated.View 
                        style={[
                            loadingStyles.outerRing, 
                            { 
                                transform: [
                                    { scale: pulseAnim },
                                    { rotate: spin }
                                ] 
                            }
                        ]} 
                    />
                    
                    {/* Spinner principal */}
                    <ActivityIndicator 
                        size={size} 
                        color={color}
                    />
                </View>
                
                {message && (
                    <Text style={loadingStyles.messageText}>
                        {message}
                    </Text>
                )}
            </View>
        </View>
    );
};

export default LoadingComponent;
