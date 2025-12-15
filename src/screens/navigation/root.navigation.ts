import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../home/home.screen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import LoginScreen from "../login/login.screen";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
      Home: HomeScreen,
      Login: LoginScreen,
    },
  });

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

  export const Navigation = createStaticNavigation(RootStack);
