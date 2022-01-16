import Button from '@/components/Button';
import Layout from '@/components/Layout';
import {Typography, Colors} from '@/styles';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
	const navigation = useNavigation()
	const onCreateEditor = () => {
		navigation.navigate('editor')
	}

	useEffect(() => {
		const getData = async () => {
			const data = await AsyncStorage.getAllKeys()
			console.log('data', data)
		}
		getData()
	}, [])
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
                    <Button content="Create" onPress={() => onCreateEditor()}/>
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
		flex: 1
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

export default HomeScreen;
