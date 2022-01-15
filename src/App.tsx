import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import TabBar from './navigation/TabBar';
import {
    CardStyleInterpolators,
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import {store, persistor} from '@/store';
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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Navigator initialRouteName="main" screenOptions={screenOptions}>
                        <Screen name="main" component={TabBar} />
                    </Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
