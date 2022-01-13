import {Colors} from '@styles';
import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import { LayoutProps } from './layout.interface';

const Layout: React.FC<LayoutProps> = ({
    statusColor = 'transparent',
    footerStyles = {},
    children,
}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor={statusColor} barStyle="dark-content" />
                {children}
            </SafeAreaView>
            <SafeAreaView style={[styles.footer, footerStyles]} />
        </>
    );
};

const styles = StyleSheet.create({
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
