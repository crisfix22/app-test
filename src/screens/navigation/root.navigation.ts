import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../home/home.screen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import LoginScreen from "../login/login.screen";
import { HomeDetailScreen } from "../homeDetail/homeDetail.screen";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
          title: "Operaciones",
        },
      },
      Login: {
        screen: LoginScreen,
        options: {
          headerShown: false,
        },
      },
      HomeDetail: {
        screen: HomeDetailScreen,
        options: {
          title: "Detalle de la operación",
        },
      }
    },
  });

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

  export const Navigation = createStaticNavigation(RootStack);
