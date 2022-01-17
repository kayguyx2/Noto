import {Colors} from '@/styles';
import React, {Fragment, FunctionComponent} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import {LayoutProps} from './layout.interface';

const Layout: FunctionComponent<LayoutProps> = ({
    headerColor = 'transparent',
    statusColor = 'transparent',
    barStyle = 'dark-content',
    children,
}) => {
    return (
        <Fragment>
            <StatusBar translucent backgroundColor={statusColor} barStyle={barStyle} />
            <SafeAreaView style={[styles.layout, {backgroundColor: headerColor}]}>
                <View style={styles.container}>{children}</View>
            </SafeAreaView>
            <SafeAreaView style={styles.footer} />
        </Fragment>
    );
};

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        ...Platform.select({
            ios: {
                paddingTop: 0,
            },
            android: {
                paddingTop: StatusBar.currentHeight,
            },
        }),
    },
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    footer: {
        flex: 0,
        backgroundColor: Colors.BACKGROUND,
    },
});

export default Layout;
