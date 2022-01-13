import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from '@styles';
import Layout from '@components/Layout';

const App = () => {
    return (
        <Layout>
            <View>
                <Text>test</Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
    },
});

export default App;
