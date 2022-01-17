import {Colors} from '@/styles';
import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonIconProps} from './buttonIcon.interface';

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
