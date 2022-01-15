import {Dimensions, PixelRatio} from 'react-native';

interface BoxShadowOffset {
    height: number;
    width: number;
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth: number = 375;

export const scaleSize = (size: number): number => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

export function boxShadow(
    color: string,
    offset: BoxShadowOffset = {height: 2, width: 2},
    radius: number = 8,
    opacity: number = 0.2,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}
