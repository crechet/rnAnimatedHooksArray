import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    slidesContainer: {
        flex: 1,
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0,
    },

    imageContainer: {
        height: hp(70),
    },

    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
});

export default styles;
