import { View, ScrollView } from "react-native";
import TextCustomComponent from "../../global/components/TextCustom/textCustom.component";
import { useHomeDetail } from "./hooks/useHomeDetail.hook";
import { useState, useEffect } from "react";
import { Operation } from "../home/services/interfaces/home.interfaces";
import { EmptyStateComponent } from "../home/components/EmptyState/EmptyState.component";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { styles } from "./homeDetail.styles";
import { SkeletonLoading } from "./components/skeletonLoading/skeleton.component";
import { ButtonCustomComponent } from "../../global/components/ButtonCustom/buttonCustom.component";

type HomeDetailScreenProps = StaticScreenProps<{
    operationId: string;
}>;



export const HomeDetailScreen = ({ route: { params: { operationId } } }: HomeDetailScreenProps) => {
    const { getOperationById, formatAmount, formatDate, getCarbonScoreColor, getCarbonScoreLabel } = useHomeDetail();
    const [operation, setOperation] = useState<Operation | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const navigation = useNavigation(); 

    const init = async () => {
        setIsLoading(true);
        const response = await getOperationById(operationId);
        if (response.success) {
            setOperation(response.data);
        } else {
            setIsError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        init();
    }, [operationId]);

    if (isLoading) {
        return <SkeletonLoading />;
    }

    if (!operation || isError) {
        return <EmptyStateComponent type={isError ? "error" : "not_found"} />;
    }

    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            {/* Hero Section */}
            <View style={styles.heroSection}>
                <TextCustomComponent 
                    text="Monto de la operación" 
                    color="white" 
                    fontSize={14} 
                    style={styles.heroLabel}
                />
                <TextCustomComponent 
                    text={formatAmount(operation.amount)} 
                    color="white" 
                    fontSize={42} 
                    fontWeight="800"
                    style={styles.heroAmount}
                />
                
                {/* Carbon Score Badge */}
                <View style={styles.carbonScoreContainer}>
                    <TextCustomComponent 
                        text="Carbon Score" 
                        color="white" 
                        fontSize={12}
                        style={styles.carbonScoreLabel}
                    />
                    <View style={[
                        styles.carbonBadge, 
                        { backgroundColor: getCarbonScoreColor(operation.carbonScore) }
                    ]}>
                        <TextCustomComponent 
                            text={operation.carbonScore.toString()} 
                            color="white" 
                            fontSize={24} 
                            fontWeight="700"
                        />
                        <TextCustomComponent 
                            text={`• ${getCarbonScoreLabel(operation.carbonScore)}`} 
                            color="white" 
                            fontSize={14} 
                            fontWeight="600"
                        />
                    </View>
                </View>
            </View>

            {/* Content Section */}
            <View style={styles.contentSection}>
                {/* Detail Card */}
                <View style={styles.detailCard}>
                    <TextCustomComponent 
                        text="Información de la operación" 
                        color="text_primary" 
                        fontSize={18} 
                        fontWeight="700"
                        style={styles.cardTitle}
                    />

                    {/* ID Row */}
                    <View style={styles.infoRow}>
                        <TextCustomComponent 
                            text="ID de operación" 
                            color="text_secondary" 
                            fontSize={14} 
                            fontWeight="500"
                        />
                        <TextCustomComponent 
                            text={`#${operation.id}`} 
                            color="text_primary" 
                            fontSize={14} 
                            fontWeight="600"
                        />
                    </View>

                    {/* Date Row */}
                    <View style={styles.infoRow}>
                        <TextCustomComponent 
                            text="Fecha de creación" 
                            color="text_secondary" 
                            fontSize={14} 
                            fontWeight="500"
                        />
                        <TextCustomComponent 
                            text={formatDate(operation.createdAt)} 
                            color="text_primary" 
                            fontSize={14} 
                            fontWeight="600"
                        />
                    </View>

                    {/* Status Row */}
                    <View style={[styles.infoRow, styles.infoRowLast]}>
                        <TextCustomComponent 
                            text="Estado" 
                            color="text_secondary" 
                            fontSize={14} 
                            fontWeight="500"
                        />
                        <TextCustomComponent 
                            text="Completada" 
                            color="success" 
                            fontSize={14} 
                            fontWeight="600"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.footerSection}>
                <ButtonCustomComponent text="Volver" onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
};
