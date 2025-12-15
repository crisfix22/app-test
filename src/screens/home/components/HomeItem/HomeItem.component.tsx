import { View } from "react-native";
import TextCustomComponent from "../../../../components/TextCustom/textCustom.component";
import { HomeItemProps } from "./interface/homeIten.interface";
import { styles } from "./HomeItem.styles";


export const HomeItemComponent = ({ operation }: HomeItemProps) => {
    return (
        <View style={styles.container}>
            <TextCustomComponent text={operation.id} color="text_primary" />
            <TextCustomComponent text={operation.amount.toString()} color="text_primary" />
            <TextCustomComponent text={operation.carbonScore.toString()} color="text_primary" />
            <TextCustomComponent text={operation.createdAt.toString()} color="text_primary" />
        </View>
    );
}