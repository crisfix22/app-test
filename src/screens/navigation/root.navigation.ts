import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../home/home.screen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import LoginScreen from "../login/login.screen";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
          headerShown: false,
        },
      },
      Login: {
        screen: LoginScreen,
        options: {
          headerShown: false,
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
