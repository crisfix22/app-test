import { FlatList, View, Text, Alert } from "react-native";
import { HomeItemComponent } from "./components/HomeItem/HomeItem.component";
import { Operation } from "./services/interfaces/home.interfaces";
import { useHome } from "./hooks/useHome.hook";
import { useEffect, useState } from "react";
import { SkeletonList } from "./components/SkeletonItem/SkeletonItem.component";
import { EmptyStateComponent } from "./components/EmptyState/EmptyState.component";
import { styles } from "./home.styles";
import TextCustomComponent from "../../components/TextCustom/textCustom.component";

export const HomeScreen = () => {
    const { getHome } = useHome();
    const [operations, setOperations] = useState<Array<Operation>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const init = async () => {
        setIsLoading(true);
        const response = await getHome({ simulateNoData: false });
        if (response.success) {
            setOperations(response.data);
        } else {
            setIsError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        init();
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <SkeletonList />;
        }

        if (operations.length === 0) {
            return <EmptyStateComponent type="empty" />;
        }
        if (isError) {
            return <EmptyStateComponent type="error" />;
        }
        return (
            <FlatList
                data={operations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HomeItemComponent operation={item} />}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextCustomComponent text="Operaciones" color="text_primary" fontSize={28} fontWeight="bold" />
            </View>
            {renderContent()}
        </View>
    );
};
