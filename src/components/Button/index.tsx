import {Colors, Typography} from '@styles';
import React from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface ButtonProps {
    content: string;
    color?: string;
    onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({content, color = Colors.PRIMARY}) => {
    return (
        <TouchableOpacity onPress={() => {}} >
            <View
                style={{
                    backgroundColor: color,
					paddingVertical: 8,
					paddingHorizontal: 16,
					borderRadius: 10,
					justifyContent: 'center',
					alignItems: 'center'
                }}>
                <Text style={[Typography.FONT.REGULAR, {color: Colors.WHITE, textTransform: 'uppercase'}]}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
