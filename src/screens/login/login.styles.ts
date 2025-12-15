import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/global.styles";

const INPUT_WIDTH = '100%';
const INPUT_HEIGHT = 60;
const INPUT_RADIUS = 10;
const INPUT_MARGIN_BOTTOM = 20;
const BUTTON_WIDTH = '100%';
const BUTTON_PADDING = 10;
const BUTTON_MARGIN_TOP = 20;
const BUTTON_FONT_SIZE = 16;
const BUTTON_FONT_WEIGHT = 'bold';
const TITLE_CONTAINER_MARGIN_BOTTOM = 20;
const TITLE_CONTAINER_MARGIN_TOP = 100;
const LOGO_WIDTH = 150;
const LOGO_HEIGHT = 150;
const LOGO_MARGIN_BOTTOM = 20;
const CONTAINER_PADDING = 20;
const TITLE_TEXT_MARGIN_BOTTOM = 10;
const INPUT_MARGIN_TOP = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: CONTAINER_PADDING,
    backgroundColor: COLORS.white,
  },
  titleText: {
    marginBottom: TITLE_TEXT_MARGIN_BOTTOM,
  },
  input: {
    backgroundColor: COLORS.gray,
    width: INPUT_WIDTH,
    height: INPUT_HEIGHT,
    borderRadius: INPUT_RADIUS,
    marginBottom: INPUT_MARGIN_BOTTOM,
  },
  button: {
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    marginTop: BUTTON_MARGIN_TOP,
  },
  buttonText: {
    color: COLORS.text_on_primary,
    fontSize: BUTTON_FONT_SIZE,
    fontWeight: BUTTON_FONT_WEIGHT,
  },
  titleContainer: {
    marginBottom: TITLE_CONTAINER_MARGIN_BOTTOM,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: TITLE_CONTAINER_MARGIN_TOP,
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    marginBottom: LOGO_MARGIN_BOTTOM,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: INPUT_MARGIN_TOP,
  },
});