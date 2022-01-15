import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
    NavigationHelpers,
    ParamListBase,
    RouteProp,
    TabNavigationState,
} from '@react-navigation/native';
import {Colors, Typography} from '@styles/index';
import * as React from 'react';

import {
    Animated,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Language

const {width} = Dimensions.get('window');

interface StaticTabBarProps {
    value: Animated.Value;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    state: TabNavigationState<ParamListBase>;
}

type RouteProps = RouteProp<ParamListBase>;

export default class StaticTabBar extends React.PureComponent<StaticTabBarProps> {
    values: Animated.Value[] = [];
    constructor(props: StaticTabBarProps) {
        super(props);
        const {state} = this.props;
        this.values = state.routes.map(
            (_, index: number) => new Animated.Value(index === 1 ? 1 : 0),
        );
    }

    getNameIcon = (routeName: string) => {
        switch (routeName) {
            case 'home':
                return 'box';
            case 'favorite':
                return 'heart';
            case 'setting':
                return 'file-text';
            default:
                return 'box`';
        }
    };

    onPress = (identity: number, route: RouteProps, isFocused: boolean): void => {
        const {value, state} = this.props;
        const tabWidth = width / state.routes.length;
        Animated.sequence([
            Animated.parallel(
                this.values.map(
                    v =>
                        Animated.timing(v, {
                            toValue: 0,
                            duration: 100,
                            useNativeDriver: true,
                        }),
                    this.onTabPress(route, isFocused),
                ),
            ),
            Animated.parallel([
                Animated.spring(value, {
                    toValue: tabWidth * identity,
                    useNativeDriver: true,
                }),
                Animated.spring(this.values[identity], {
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    };

    onTabPress(route: RouteProps, isFocused: boolean): void {
        const {navigation} = this.props;
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }

    render() {
        const {onPress} = this;
        const {state} = this.props;
        const itemLength = state.routes.length;
        return (
            <View style={styles.container}>
                {state.routes.map((route, key) => {
                    const tabWidth = width / itemLength;
                    const isFocused = state.index === key;
                    const translateY = this.values[key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [64, 0],
                        extrapolate: 'clamp',
                    });
                    const opacity = this.values[key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolate: 'clamp',
                    });
                    return (
                        <React.Fragment {...{key}}>
                            <TouchableWithoutFeedback
                                onPress={() => onPress(key, route, isFocused)}>
                                <Animated.View
                                    style={[styles.tab, {opacity: isFocused ? 0 : 1}]}>
                                    <Icon
                                        name={this.getNameIcon(route.name)}
                                        size={30}
                                        color={Colors.WHITE}
                                    />
                                    <Text
                                        style={[
                                            Typography.FONT.REGULAR,
                                            styles.textDeactiveInTab,
                                        ]}>
                                        {route.name}
                                    </Text>
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    top: -8,
                                    left: tabWidth * key,
                                    width: tabWidth,
                                    height: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: opacity,
                                    transform: [{translateY}],
                                }}>
                                <View style={styles.activeIconBorder}>
                                    <View style={styles.activeIcon}>
                                        <Icon
                                            name={this.getNameIcon(route.name)}
                                            size={30}
                                            color={Colors.WHITE}
                                        />
                                    </View>
                                </View>
                                <Text
                                    style={[
                                        Typography.FONT.REGULAR,
                                        styles.textActiveInTab,
                                    ]}>
                                    {route.name}
                                </Text>
                            </Animated.View>
                        </React.Fragment>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.PRIMARY,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 10,
        paddingBottom: 10,
    },
    activeIcon: {
        backgroundColor: Colors.PRIMARY,
        width: 51,
        height: 51,
        borderRadius: 30,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIconBorder: {
        backgroundColor: Colors.WHITE,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textActiveInTab: {
        color: Colors.WHITE,
        paddingTop: 5,
        fontSize: Typography.FONT_SIZE_16,
    },
    textDeactiveInTab: {
        paddingTop: 5,
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_16,
    },
});
