import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

/** Colors **/
export const COLORS = {
    white: '#FFFFFF',
    whiteAlpha: 'rgba(255, 255, 255, 0.5)',
    black: '#000000',
    blackRGBA: (alpha = 0) => `rgba(0, 0, 0, ${alpha})`,
    accent: '#E8B392',
    accentBad: '#DE4256',
    accentGood: '#00B876',
    neutralBackground: '#C2C2C2',
    neutralBackgroundRGB: 'rgb(194, 194, 194)',
    neutralBackgroundRGBA: (alpha = 0) => `rgba(194, 194, 194, ${alpha})`,

    // Form element's
    formInputBorder: '#DADADA',
    formInputBorderDark: '#E2A67E',
    formInputLabel: '#9B9B9B',
    formButtonLightFont: '#E7B593',
};

/** Dimensions **/
export const DIMENSIONS = Dimensions.get('window');
export const pxToHeightPercent = px => hp(px * 100 / DIMENSIONS.height);
export const pxToWidthPercent = px => wp(px * 100 / DIMENSIONS.width);
