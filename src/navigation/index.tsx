import EditorScreen from '@/screens/Editor';
import {AppRootParamList} from '@/types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import TabBarScreen from './TabBar';

const MainAppStack = createStackNavigator<AppRootParamList>();

const screenOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
};

const NavigationMain = () => {
    const {Navigator, Screen} = MainAppStack;
    return (
        <NavigationContainer>
            <Navigator initialRouteName="main" screenOptions={screenOptions}>
                <Screen name="main" component={TabBarScreen} />
                <Screen name="editor" component={EditorScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default NavigationMain;
