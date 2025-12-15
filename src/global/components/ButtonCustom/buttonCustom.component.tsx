import { TouchableOpacity } from "react-native";
import { ButtonCustomProps } from "./interface/buttonCustom.interface";
import TextCustomComponent from "../TextCustom/textCustom.component";
import { styles } from "./buttonCustom.styles";

export const ButtonCustomComponent = ({ onPress, style, text }: ButtonCustomProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <TextCustomComponent text={text} fontSize={16} fontWeight="bold" color="text_on_primary" />
    </TouchableOpacity>
  );
};