import { View } from "react-native";
import { styles } from "./skeleton.styles";
export const SkeletonLoading = () => {
   return (
    <View style={styles.container}>
    <View style={styles.skeletonHero}>
        <View style={styles.skeletonAmount} />
        <View style={styles.skeletonBadge} />
    </View>
    <View style={styles.skeletonCard}>
        <View style={styles.skeletonTitle} />
        <View style={styles.skeletonRow}>
            <View style={styles.skeletonLabel} />
            <View style={styles.skeletonValue} />
        </View>
        <View style={styles.skeletonRow}>
            <View style={styles.skeletonLabel} />
            <View style={styles.skeletonValue} />
        </View>
        <View style={[styles.skeletonRow, { borderBottomWidth: 0 }]}>
            <View style={styles.skeletonLabel} />
            <View style={styles.skeletonValue} />
        </View>
    </View>
</View>
   );
};