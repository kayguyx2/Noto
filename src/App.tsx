import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from '@styles';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <Text>test</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
    },
});

export default App;
