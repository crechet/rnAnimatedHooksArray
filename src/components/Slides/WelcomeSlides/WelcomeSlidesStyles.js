import { StyleSheet } from 'react-native';
import { COLORS, pxToHeightPercent, pxToWidthPercent } from '../../../styles/commonStyles';

export const linearGradientColors = [
    COLORS.blackRGBA(0),
    COLORS.black,
    COLORS.black,
    COLORS.black,
    COLORS.black,
    COLORS.black
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    controlsContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: pxToHeightPercent(24)
    },

    logoContainer: {
        marginTop: pxToHeightPercent(38),
        marginBottom: pxToHeightPercent(24),
    },

    textContainer: {
        width: '100%',
        justifyContent: 'center',
        height: pxToHeightPercent(100),
    },
    textContainerInner: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0,
    },
    text: {
        fontSize: pxToHeightPercent(16),
        color: COLORS.white,
        textAlign: 'center',
        paddingHorizontal: pxToWidthPercent(8)
    },

    button: {
        backgroundColor: COLORS.neutralBackground,
        marginTop: pxToHeightPercent(24),
        marginBottom: pxToHeightPercent(24)
    },
    buttonLabel: {
        color: COLORS.black
    },

    linearGradient: {
        flex: 1
    },
});

export default styles;
