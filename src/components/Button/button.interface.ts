import {GestureResponderEvent, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
    content?: string;
    color?: string;
    containerStyles?: StyleProp<ViewStyle>;
    disabled?: boolean;
    textStyles?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void;
}

export type ButtonDisabledStyle = StyleProp<ViewStyle>