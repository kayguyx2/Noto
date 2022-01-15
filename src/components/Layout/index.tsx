import {Colors} from '@styles/index';
import React, {Fragment} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import {LayoutProps} from './layout.interface';

const Layout: React.FC<LayoutProps> = ({statusColor = 'transparent', children}) => {
    return (
        <Fragment>
            <StatusBar
                translucent
                backgroundColor={statusColor}
                barStyle="dark-content"
            />
            <SafeAreaView style={styles.layout}>
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
        backgroundColor: Colors.PRIMARY,
    },
});

export default Layout;
