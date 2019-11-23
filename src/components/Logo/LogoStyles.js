import { StyleSheet } from 'react-native';
import { pxToWidthPercent, pxToHeightPercent } from '../../styles/commonStyles';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    logo: {
        width: pxToWidthPercent(200),
        height: pxToHeightPercent(58),
        resizeMode: 'cover'
    }
});

export default styles;
