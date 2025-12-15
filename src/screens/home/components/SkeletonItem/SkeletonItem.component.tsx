import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { styles } from "./SkeletonItem.styles";

export const SkeletonItemComponent = () => {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 0.4,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );
        pulse.start();

        return () => pulse.stop();
    }, [pulseAnim]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animated.View style={[styles.skeletonId, { opacity: pulseAnim }]} />
                <Animated.View style={[styles.skeletonDate, { opacity: pulseAnim }]} />
            </View>
            
            <View style={styles.content}>
                <View style={styles.amountContainer}>
                    <Animated.View style={[styles.skeletonLabel, { opacity: pulseAnim }]} />
                    <Animated.View style={[styles.skeletonAmount, { opacity: pulseAnim }]} />
                </View>
                
                <View style={styles.carbonContainer}>
                    <Animated.View style={[styles.skeletonCarbonLabel, { opacity: pulseAnim }]} />
                    <Animated.View style={[styles.skeletonCarbonBadge, { opacity: pulseAnim }]} />
                </View>
            </View>
        </View>
    );
};

export const SkeletonList = () => {
    return (
        <View>
            <SkeletonItemComponent />
            <SkeletonItemComponent />
            <SkeletonItemComponent />
            <SkeletonItemComponent />
        </View>
    );
};

