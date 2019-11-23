/**
 * @flow
 * */
import React from 'react';
import { View, Text } from 'react-native';

import styles from './WelcomeScreenStyles';

import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

type Props = {};

const WelcomeScreen = (props: Props) => {
    return (
        <ScreenContainer
            safeAreaForceInset={{ top: 'never' }}
            safeAreaViewStyles={styles.screenContainer}
        >
            <View style={styles.container}>
                <Text>Welcome Screen</Text>
            </View>
        </ScreenContainer>
    );
};

export default WelcomeScreen;
