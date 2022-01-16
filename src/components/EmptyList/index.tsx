import {Colors, Typography} from '@/styles';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../Button';
import Layout from '../Layout';

const EmptyList = () => {
    const navigation = useNavigation();
    const onCreateEditor = () => {
        navigation.navigate('editor');
    };
    return (
        <Layout>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                        source={require('@/assets/images/notion.png')}
                        style={{width: 180, height: 180}}
                    />
                    <Text style={[Typography.FONT.REGULAR, styles.title]}>
                        Let's record it for the first time.
                    </Text>
                    <Text style={[Typography.FONT.LIGHT, styles.description]}>
                        for the first article We recommend introducing yourself and
                        writing what you would like to do in the future.
                    </Text>
                    <Button content="Create" onPress={() => onCreateEditor()} />
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: Typography.FONT_SIZE_18,
        marginBottom: 8,
    },
    description: {
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.GRAY_DARK,
        marginBottom: 12,
    },
    container: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        backgroundColor: Colors.SECONDARY,
        justifyContent: 'center',
        paddingVertical: 38,
        paddingHorizontal: 24,
        height: '100%',
    },
});
export default EmptyList;
