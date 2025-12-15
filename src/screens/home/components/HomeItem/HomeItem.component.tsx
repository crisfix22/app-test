import { View, Text, TouchableOpacity } from "react-native";
import { HomeItemProps } from "./interface/homeIten.interface";
import { styles } from "./HomeItem.styles";
import { useHomeItem } from "./hooks/useHomeItem.hook";
import TextCustomComponent from "../../../../global/components/TextCustom/textCustom.component";
import { useNavigation } from "@react-navigation/native";



export const HomeItemComponent = ({ operation }: HomeItemProps) => {
    const { getCarbonScoreColor, formatAmount, formatDate } = useHomeItem();
    const navigation = useNavigation();
    const navigateToHomeDetail = () => {
        navigation.navigate("HomeDetail", {  operationId: operation.id } );
    }
    return (
        <TouchableOpacity style={styles.container} onPress={navigateToHomeDetail} activeOpacity={0.8}>
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
        </TouchableOpacity>
    );
};
