import {Colors} from '@styles/index';
import React, {Fragment} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import {LayoutProps} from './layout.interface';

const Layout: React.FC<LayoutProps> = ({
    statusColor = 'transparent',
    footerStyles = {},
    children,
}) => {
    return (
        <Fragment>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'red',
                }}>
                <StatusBar
                    translucent
                    backgroundColor={statusColor}
                    barStyle="dark-content"
                />
                <SafeAreaView style={styles.header} />
                <SafeAreaView style={styles.layout}>
                    <View style={styles.container}>{children}</View>
                </SafeAreaView>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 0,
        backgroundColor: Colors.BACKGROUND,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    layout: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },
});

export default Layout;
