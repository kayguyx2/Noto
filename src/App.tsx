import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '@styles';
import Layout from '@components/Layout';

const App = () => {
    return (
        <Layout>
            <View>
                <Text style={[Typography.FONT.REGULAR, styles.title]}>Test React Native</Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
	title: {
		fontSize: Typography.LINE_HEIGHT_28,
	}
});

export default App;
