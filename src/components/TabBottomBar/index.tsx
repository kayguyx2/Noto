import * as shape from 'd3-shape';

import {Animated, Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import React from 'react';
import StaticTabBar from './StaticTabBar';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { Colors } from '@styles/index';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const {width} = Dimensions.get('window');
const height = 75;

const tabWidth = width / 3;
const backgroundColor = Colors.PRIMARY;

const getPath = (): string => {
    // @ts-ignore
    const left = shape
        .line()
        .x((d: any) => d.x)
        .y((d: any) => d.y)([
        {x: 10, y: 0},
        {x: width, y: 0},
    ]);

    // @ts-ignore
    const right = shape
        .line()
        .x((d: any) => d.x)
        .y((d: any) => d.y)([
        {x: width + tabWidth, y: 0},
        {x: width * 2, y: 0},
        {x: width * 2, y: height},
        {x: 0, y: height},
        {x: 0, y: 0},
    ]);
    return `${left} ${right}`;
};

const d = getPath();

const TabBottomBar = (props: BottomTabBarProps) => {
    const state = props.state;
    const navigation = props.navigation;
    let value = new Animated.Value(0);

    const translateX = value.interpolate({
        inputRange: [0, width],
        outputRange: [-width, 0],
    });

    return (
        <>
            <View {...{height, width}}>
                <AnimatedSvg width={width * 2} {...{height}} style={{transform: [{translateX}]}}>
                    <Path fill={backgroundColor} {...{d}} />
                </AnimatedSvg>
                <View style={StyleSheet.absoluteFill}>
                    <StaticTabBar {...{value, state, navigation}} />
                </View>
            </View>
            <SafeAreaView style={styles.container} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor,
    },
});

export default TabBottomBar;
