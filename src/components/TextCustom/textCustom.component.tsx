import { View, Text } from 'react-native';
import { TextCustomProps } from './interfaces/textCustom.interface';
import { COLORS } from '../../styles/global.styles';

export default function TextCustomComponent({ text, color }: TextCustomProps) {
  const colorValue = COLORS[color];
  return (
      <Text style={{ color: colorValue }}>{text}</Text>
  );
}