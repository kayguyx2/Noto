import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export interface LayoutProps {
    statusColor?: ColorValue;
    footerStyles?: StyleProp<ViewStyle>;
    headerColor?: string;
    barStyle?: 'dark-content' | 'light-content';
}
