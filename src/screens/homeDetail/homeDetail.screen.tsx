import { View } from "react-native";
import TextCustomComponent from "../../global/components/TextCustom/textCustom.component";
import { useHomeDetail } from "./hooks/useHomeDetail.hook";
import { useState } from "react";
import { useEffect } from "react";
import { Operation } from "../home/services/interfaces/home.interfaces";
import { EmptyStateComponent } from "../home/components/EmptyState/EmptyState.component";
import { StaticScreenProps } from "@react-navigation/native";


type HomeDetailScreenProps = StaticScreenProps<{
    operationId: string;
}>

export const HomeDetailScreen = ({ route: { params: { operationId } } }: HomeDetailScreenProps) => {
    const { getOperationById } = useHomeDetail();
    const [operation, setOperation] = useState<Operation | null>(null);

    const init = async () => {
        const response = await getOperationById(operationId);
        if (response.success) {
            setOperation(response.data);
        }
    }
    useEffect(() => {
        init();
    }, [operationId]);

    if (!operation) {
        return <EmptyStateComponent type="not_found" />;
    }
    return (
        <View>
            <TextCustomComponent text={`Detalle de la operación #${operation.id}`} color="text_primary" fontSize={28} fontWeight="bold" />
            <TextCustomComponent text={`Monto: ${operation.amount.toString()}`} color="text_primary" fontSize={28} fontWeight="bold" />
            <TextCustomComponent text={`Carbon Score: ${operation.carbonScore.toString()}`} color="text_primary" fontSize={28} fontWeight="bold" />
            <TextCustomComponent text={`Fecha de creación: ${operation.createdAt.toString()}`} color="text_primary" fontSize={28} fontWeight="bold" />
        </View>
    );
}