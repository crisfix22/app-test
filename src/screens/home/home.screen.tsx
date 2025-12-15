import { FlatList, View } from "react-native";
import TextCustomComponent from "../../components/TextCustom/textCustom.component";
import { HomeItemComponent } from "./components/HomeItem/HomeItem.component";
import { HomeResponse, Operation } from "./services/interfaces/home.interfaces";
import { useHome } from "./hooks/useHome.hook";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
    const { getHome } = useHome();
    const [operations, setOperations] = useState<Array<Operation>>([]);

    const init = async () => {
        const response = await getHome({ simulateNoData: false });
        if(response.success) {
            setOperations(response.data);
        }
    }
    useEffect(() => {
        init();
    }, []);
    return (
       <FlatList
        data={operations}
        renderItem={({ item }) => <HomeItemComponent operation={item} />}
       />
    );
}