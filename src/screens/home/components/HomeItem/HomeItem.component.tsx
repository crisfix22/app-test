import { View, Text } from "react-native";
import { HomeItemProps } from "./interface/homeIten.interface";
import { styles, getCarbonScoreColor, getCarbonScoreLabel } from "./HomeItem.styles";

const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
    }).format(amount);
};

const formatDate = (date: Date): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('es-CL', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

export const HomeItemComponent = ({ operation }: HomeItemProps) => {
    const carbonColor = getCarbonScoreColor(operation.carbonScore);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.idText}>#{operation.id}</Text>
                <Text style={styles.dateText}>{formatDate(operation.createdAt)}</Text>
            </View>
            
            <View style={styles.content}>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountLabel}>Monto</Text>
                    <Text style={styles.amountValue}>{formatAmount(operation.amount)}</Text>
                </View>
                
                <View style={styles.carbonContainer}>
                    <Text style={styles.carbonLabel}>Carbon Score</Text>
                    <View style={[styles.carbonBadge, { backgroundColor: carbonColor }]}>
                        <Text style={styles.carbonValue}>{operation.carbonScore}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
