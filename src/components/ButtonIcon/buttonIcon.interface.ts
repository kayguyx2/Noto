import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface ButtonIconProps {
    name: string;
    size?: number;
    color?: string;
    containerStyles?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
}
