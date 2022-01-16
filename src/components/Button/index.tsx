import {Colors, Typography} from '@/styles';
import React from 'react';
import {
    GestureResponderEvent,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

interface ButtonProps {
    content?: string;
    color?: string;
    containerStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
    content,
    onPress,
    containerStyles = {},
    textStyles = {},
    color = Colors.PRIMARY,
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.78}>
            <View style={[styles.button, {backgroundColor: color}, containerStyles]}>
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
