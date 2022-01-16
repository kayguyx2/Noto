import {Colors} from '@/styles';
import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ButtonIconProps {
    name: string;
    size?: number;
    color?: string;
    containerStyles?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
    name,
    onPress,
    containerStyles = {},
    color = Colors.TEXT_BASE,
    size = 24,
}) => {
    return (
        <Pressable onPress={onPress} style={containerStyles}>
            <Icon name={name} size={size} color={color} />
        </Pressable>
    );
};

export default ButtonIcon;
