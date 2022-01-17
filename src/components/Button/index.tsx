import {Colors, Typography} from '@/styles';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonDisabledStyle, ButtonProps} from './button.interface';

const Button: React.FC<ButtonProps> = ({
    content,
    onPress,
    disabled = false,
    containerStyles = {},
    textStyles = {},
    color = Colors.PRIMARY,
}) => {
    const disabledStyle: ButtonDisabledStyle = {opacity: 0.5};
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.78} disabled={disabled}>
            <View
                style={[
                    styles.button,
                    {backgroundColor: color},
                    containerStyles,
                    disabled && disabledStyle,
                ]}>
                <Text style={[styles.textButton, textStyles]}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontWeight: '500',
        color: Colors.WHITE,
        textTransform: 'uppercase',
    },
});

export default Button;
