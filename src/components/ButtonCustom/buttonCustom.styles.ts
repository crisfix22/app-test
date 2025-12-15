import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/global.styles";

const BUTTON_HEIGHT = 40;
const BUTTON_WIDTH = '100%';
const BUTTON_RADIUS = 10;
const BUTTON_PADDING = 10;

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.button_primary,
    padding: BUTTON_PADDING,
    borderRadius: BUTTON_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
  },
});