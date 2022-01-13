import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_LIGHT: string = 'Lamoon-Light';
export const FONT_FAMILY_REGULAR: string = 'Lamoon-Regular';
export const FONT_FAMILY_BOLD: string = 'Lamoon-Bold';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT = StyleSheet.create({
    BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: '700',
    },
    REGULAR: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontWeight: '500',
    },
    LIGHT: {
        fontFamily: FONT_FAMILY_LIGHT,
        fontWeight: '500',
    },
});
