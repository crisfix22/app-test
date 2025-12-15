import { Text } from 'react-native';
import { TextCustomProps } from './interfaces/textCustom.interface';
import { COLORS } from '../../styles/global.styles';

export default function TextCustomComponent({ text, color, fontSize = 20, fontWeight = 'bold', textAlign = 'left', style }: TextCustomProps) {
  const colorValue = COLORS[color];
  return (
      <Text style={{ color: colorValue, fontSize: fontSize, fontWeight: fontWeight, textAlign: textAlign, ...style }}>{text}</Text>
  );
}

