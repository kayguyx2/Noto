import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from './navigation/TabBar';
import {
    CardStyleInterpolators,
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import {View} from 'react-native';

const MainAppStack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	headerShown: false,
};

const App = () => {
    const {Navigator, Screen} = MainAppStack;
    return (
        <NavigationContainer>
            <Navigator initialRouteName="main" screenOptions={screenOptions}>
                <Screen name="main" component={TabBar} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
