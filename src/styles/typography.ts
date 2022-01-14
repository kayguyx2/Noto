import {StyleSheet} from 'react-native';
import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_LIGHT: string = 'NotoSansThai-LIGHT';
export const FONT_FAMILY_REGULAR: string = 'NotoSansThai-REGULAR';
export const FONT_FAMILY_BOLD: string = 'NotoSansThai-Bold';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);

// LINE HEIGHT
export const LINE_HEIGHT_28 = scaleFont(28);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);

// FONT STYLE
export const FONT = StyleSheet.create({
    BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: '700',
    },
    REGULAR: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontWeight: '400',
    },
    LIGHT: {
        fontFamily: FONT_FAMILY_LIGHT,
        fontWeight: '300',
    },
});
