import { View, Text } from "react-native";
import { styles } from "./EmptyState.styles";
import { useEmptyState } from "./hooks/emptyState.hook";
import { EmptyStateType } from "./interface/emptyState.interface";
import TextCustomComponent from "../../../../components/TextCustom/textCustom.component";

interface EmptyStateComponentProps {
    type: EmptyStateType;
}
export const EmptyStateComponent = ( { type }: EmptyStateComponentProps ) => {
    const { getEmptyState } = useEmptyState();
    const emptyState = getEmptyState(type);
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.iconInner}>
                    <TextCustomComponent text={emptyState.icon} color="text_primary" fontSize={40} fontWeight="bold" />
                </View>
            </View>
                <TextCustomComponent text={emptyState.title} color="text_primary" fontSize={20} fontWeight="bold" />
            <TextCustomComponent text={emptyState.subtitle} color="text_primary" fontSize={16} fontWeight="normal" />
        </View>
    );
};

