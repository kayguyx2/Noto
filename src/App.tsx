import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '@styles';
import Layout from '@components/Layout';

const App = () => {
    return (
        <Layout>
            <View>
                <Text style={[Typography.FONT.LIGHT, styles.title]}>Test</Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
	title: {
		fontSize: Typography.FONT_SIZE_16,
		lineHeight: Typography.LINE_HEIGHT_20
	}
});

export default App;
