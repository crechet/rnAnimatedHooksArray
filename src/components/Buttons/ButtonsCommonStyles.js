import { StyleSheet, Platform } from 'react-native';
import { COLORS, pxToHeightPercent, pxToWidthPercent } from '../../styles/commonStyles';

const buttonsStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: pxToWidthPercent(134),
        minHeight: pxToWidthPercent(36),
        paddingHorizontal: pxToHeightPercent(16),
        borderRadius: pxToWidthPercent(100),
    },

    label: {
        color: COLORS.white,
        fontSize: pxToHeightPercent(16),
        lineHeight: Platform.OS === 'android' ? pxToHeightPercent(18) : 0,
    }
});

export default buttonsStyles;
