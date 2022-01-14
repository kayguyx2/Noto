import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// component
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import Setting from '../screens/Setting';
import TabBottomBar from '../components/TabBottomBar';

// create tab bar navigator
const MainTabBar = createBottomTabNavigator();

const TabBarScreen = () => {
    const {Navigator, Screen} = MainTabBar;
    return (
        <Navigator initialRouteName="Track" screenOptions={{ headerShown: false}}  tabBar={props => <TabBottomBar {...props} />}>
            <Screen name="home" component={Home} />
            <Screen name="favorite" component={Favorite} />
            <Screen name="setting" component={Setting} />
        </Navigator>
    );
};

export default TabBarScreen;
