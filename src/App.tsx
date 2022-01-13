import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors, Typography} from '@styles';
import Layout from '@components/Layout';

import NotionImage from '@assets/images/notion.png';
import Button from '@components/Button';

const App = () => {
    return (
        <Layout>
            <View style={styles.box}>
                <Image source={NotionImage} style={{width: 180, height: 180}} />
                <Text style={[Typography.FONT.REGULAR, styles.title]}>
                    Let's record it for the first time.
                </Text>
                <Text style={[Typography.FONT.LIGHT, styles.description]}>
                    for the first article We recommend introducing yourself and writing what you
                    would like to do in the future.
                </Text>
                <Button content="Create" />
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
    box: {
        backgroundColor: Colors.SECONDARY,
        alignItems: 'center',
		paddingVertical: 38,
		paddingHorizontal: 24
    },
});

export default App;
