import { StyleProp, ViewStyle } from "react-native";

export interface ButtonCustomProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
}