import { StyleSheet } from 'react-native';
import { COLORS, pxToWidthPercent, pxToHeightPercent } from '../../../styles/commonStyles';

const styles = StyleSheet.create({
    bulletsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bullet: {
        backgroundColor: COLORS.white,
        opacity: 0.5,
        width: pxToWidthPercent(6),
        height: pxToHeightPercent(6),
        borderRadius: pxToWidthPercent(6),
        margin: pxToWidthPercent(1),
        marginRight: pxToHeightPercent(4)
    },
    bulletLast: {
        marginRight: pxToWidthPercent(1)
    },
});

export default styles;
