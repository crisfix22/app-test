import { Colors } from '../../../styles/global.styles';
import { StyleProp, TextStyle } from 'react-native';
export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface TextCustomProps {
  text: string;
  color: keyof Colors;
  fontSize?: number;
  fontWeight?: FontWeight;
  textAlign?: 'left' | 'center' | 'right';
  style?: StyleProp<TextStyle>;
}