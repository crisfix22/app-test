import { View, Text } from "react-native";
import { HomeItemProps } from "./interface/homeIten.interface";
import { styles } from "./HomeItem.styles";
import { useHomeItem } from "./hooks/useHomeItem.hook";
import TextCustomComponent from "../../../../global/components/TextCustom/textCustom.component";

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
    const { getCarbonScoreColor } = useHomeItem();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextCustomComponent text={`#${operation.id}`} color="text_muted" fontSize={12} fontWeight="500" />
                <TextCustomComponent text={formatDate(operation.createdAt)} color="text_secondary" fontSize={12} />
            </View>
            
            <View style={styles.content}>
                <View style={styles.amountContainer}>
                    <TextCustomComponent text="Monto" color="text_secondary" fontSize={12} />
                    <TextCustomComponent text={formatAmount(operation.amount)} color="text_primary" fontSize={24} fontWeight="700" />
                </View>
                
                <View style={styles.carbonContainer}>
                    <TextCustomComponent text="Carbon Score" color="text_secondary" fontSize={10} />
                    <View style={[styles.carbonBadge, { backgroundColor: getCarbonScoreColor(operation.carbonScore) }]}>
                        <TextCustomComponent text={operation.carbonScore.toString()} color="background_primary" fontSize={16} fontWeight="700" />
                    </View>
                </View>
            </View>
        </View>
    );
};
