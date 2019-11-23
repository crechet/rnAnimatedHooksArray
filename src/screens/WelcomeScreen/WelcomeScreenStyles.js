import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/commonStyles';

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: COLORS.neutralBackground
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
